"use strict";

var MaxDataNum = 60;
var animate = true;
var no_animate = false;
var blockWrapper;
var tagData = ["a", "ab", "abc", "233", "123", "JavaScript", "中文", "测试1", "测试2", "测试3"]
var get = function(name) {
    return document.querySelector(name);
}
var getAll = function(name) {
    return document.querySelectorAll(name);
}


//创建标签并返回对象
function createTag(value) {
    var span = document.createElement('span');
    span.textContent = value;
    span.dataset.content = value;
    span.className = "apping";
    span.onclick = function(event) {
        removeTag(event);
    };
    return span;
}

//检查输入的值是否符合要求
function checkInputNum(DomName) {
    var inputData = get(DomName).value.trim();
    var regular = /^[\n\s,，、]|[^\d\w\u4E00-\u9FA5\n\s,，、]|[\n\s,，、]$/;
    if (inputData == "") {
        return false;
    }
    if (inputData.match(regular)) {
        alert("输入有误");
        return false;
    }
    return inputData.split(/[\n\s,，、]+/);
}
//渲染页面
function renderChart(isanimate) {
    blockWrapper.innerHTML = "";
    tagData.forEach(function(value) {
        var span = document.createElement('span');
        if (isanimate) {
            span.className = "apping";
        }
        span.textContent = value;
        span.dataset.content = value;
        span.onclick = function(event) {
            removeTag(event);
        };
        blockWrapper.appendChild(span);
    });
}


//左端入
function leftIn() {
    var TagArr = checkInputNum('#input-tag');
    if (!TagArr)
        return;
    if (blockWrapper.childNodes.length >= 60) {
        alert('下面太挤啦');
        return;
    }
    TagArr.forEach(function(element) {
        tagData.unshift(element);
        var span = createTag(element);
        blockWrapper.insertBefore(span, blockWrapper.firstElementChild);

    });
    get('#input-tag').value = "";
    get('#input-tag').focus;

}
//右端入
function rightIn() {
    var TagArr = checkInputNum('#input-tag');
    if (!TagArr)
        return;
    if (blockWrapper.childNodes.length >= 60) {
        alert('下面太挤啦');
        return;
    }
    TagArr.forEach(function(element) {
        //console.log(v);
        tagData.push(element);
        var span = createTag(element);
        blockWrapper.appendChild(span);
    });
    get('#input-tag').value = "";
    get('#input-tag').focus;
}



//左侧出
function leftOut() {
    if (!blockWrapper.hasChildNodes()) {
        alert('空了');
        return;
    }
    blockWrapper.firstElementChild.className += 'removing';
    setTimeout(function() {
        blockWrapper.removeChild(blockWrapper.firstElementChild)
    }, 500);
    tagData.shift();

}
//右侧出
function rightOut() {
    if (!blockWrapper.hasChildNodes()) {
        alert('空了');
        return;
    }
    blockWrapper.lastElementChild.className += 'removing';
    setTimeout(function() {
        blockWrapper.removeChild(blockWrapper.lastElementChild)
    }, 500);
    tagData.pop();
}



function removeTag(event) {
    if (event.target.nodeName == "SPAN") {
        var delTagName = event.target.dataset.content;
        //console.log(delTagName);
        event.target.classList.add('removing');

        setTimeout(function() {
            blockWrapper.removeChild(event.target);
        }, 500);

        tagData.forEach(function(element, index) {
            if (element == delTagName) {
                tagData.splice(index, 1);
            }
        });
        //tagData.splice(delTagName, 1);
    }

}

function TagSearch() {
    var str = get('#input-search').value.trim();
    if (str == "") {
        return;
    }
    if (str.match(/[^\d\w\u4E00-\u9FA5]/)) {
        alert('输入有误');
        return;
    }
    var nodes = blockWrapper.childNodes;
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].dataset.content.includes(str)) {
            nodes[i].style.border = "3px solid #1776B7";
        } else {
            nodes[i].style.borderColor = "#0af";
        }
    }
    get('#input-tag').value = "";
    get('#input-tag').focus;
}


function init() {
    get('#btn-left-in').onclick = leftIn;
    get('#btn-right-in').onclick = rightIn;
    get('#btn-left-out').onclick = leftOut;
    get('#btn-right-out').onclick = rightOut;
    blockWrapper = get('.tag-wrapper');
    get('#btn-search').onclick = TagSearch;
    renderChart(no_animate);
}
window.onload = function() {
    init();
}