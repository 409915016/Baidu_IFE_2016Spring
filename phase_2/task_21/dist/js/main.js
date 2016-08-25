"use strict";

// var MaxDataNum = 60;
// var animate = true;
// var no_animate = false;
// var blockWrapper;
// var tagData = ["a", "ab", "abc", "233", "123", "JavaScript", "中文", "测试1", "测试2", "测试3"]
var get = function(name) {
    return document.querySelector(name);
}
var getAll = function(name) {
    return document.querySelectorAll(name);
}



function NodeList(inputElementDOM, wrapperDOM) {
    this.dataArr = [];
    this.inputElement = inputElementDOM;
    this.wrapper = wrapperDOM;

}

NodeList.prototype.addNode = function() {
    var value = this.getValue().trim().replace(/[,，]/, "");
    this.addData(value);
    this.reset();


}
NodeList.prototype.getValue = function() {
    return this.inputElement.value;
}

NodeList.prototype.addData = function(value) {
    if (!this.checkValue(value))
        return;

    if (this.wrapper.childNodes.length > 10) {
        this.wrapper.removeChild(this.wrapper.firstElementChild);
        this.dataArr.shift();
    }
    this.buildSpan(value);
    this.dataArr.push(value);

}



NodeList.prototype.checkValue = function(str) {
    if (str === "") {
        return false;

    } else if (/[^\w\d\u4E00-\u9FA5]/.test(str)) {
        return false;
    } else {
        var isUnique = true;
        this.dataArr.forEach(function(v) {
            if (v == str) {
                isUnique = false;
            }
        });
        return isUnique;
    }

}

NodeList.prototype.buildSpan = function(value) {
    var self = this;
    var span = document.createElement('span');
    span.textContent = value;
    span.dataset.content = value;

    span.addEventListener("mouseenter", function() {
        this.textContent = "删除 " + this.textContent;
        this.style.backgroundColor = "#E9152A";


    });
    span.addEventListener("mouseleave", function() {
        this.textContent = this.textContent.substr(3);
        this.style.backgroundColor = "#0af";

    });
    span.addEventListener("click", function(event) {
        var delNodeName = event.target.dataset.content;
        event.target.classList.add("removing");
        event.target.textContent = "";
        setTimeout(function() {
            self.wrapper.removeChild(event.target);
        }, 500);

        dataArr.forEach(function(element, index) {
            if (element == delNodeName) {
                dataArr.splice(index, 1);
            }
        });

    });
    this.wrapper.appendChild(span);

}

NodeList.prototype.reset = function() {
    this.inputElement.value = "";
    this.inputElement.focus();
}





var test;

function FavorNodeList() {
    this.inputElement = get("#input-favor");
    this.wrapper = get(".favor-wrapper");
    this.btnfavor = get("#btn-favor");
    NodeList.call(this, this.inputElement, this.wrapper);


}

FavorNodeList.prototype = Object.create(NodeList.prototype);
FavorNodeList.prototype.constructor = FavorNodeList;

FavorNodeList.prototype.addNode = function(value) {
    this.addData(value);
    this.reset();
};


function bindEvent() {
    test.btnfavor.addEventListener("click", function() {
        var value = test.getValue().trim();
        /* 输入数据合法性检查 */
        if (/[^\w\d\u4E00-\u9FA5\s\n,，、]/.test(value)) {
            alert("Invalid input!");
            return;
        }
        /* 将输入数据以分割符分割后新增节点 */
        var valueArray = value.split(/[\s\n,，、]+/);
        valueArray.forEach(function(value) {
            test.addNode(value);
        });
    });
}

function init() {
    test = new FavorNodeList();
    bindEvent();
}

window.onload = init;