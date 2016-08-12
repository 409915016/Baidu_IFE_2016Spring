var MaxData = 200;
var MinData = 10;
var OriginalData = [];
var MaxDataNum = 60;
var animate = true;
var no_animate = false;
var swapSpanNo = new Array(2);
var get = function(name) {
    return document.querySelector(name);
}
var getAll = function(name) {
    return document.querySelectorAll(name);
}

//获取随机颜色
function randomColor() {
    return "#" + Math.random().toString(16).substring(2, 8);
}
//排序 
Array.prototype.mySort = function() {

    for (var i = 0; i < this.length; ++i) {
        var minIndex = i;
        for (var j = i + 1; j < this.length; ++j) {
            if (this[j] < this[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            var t = this[minIndex];
            this[minIndex] = this[i];
            this[i] = t;
        }
        swapSpanNo[0].push(i);
        swapSpanNo[1].push(minIndex);
    }


};

function SortlData() {
    swapSpanNo[0] = [];
    swapSpanNo[1] = [];
    OriginalData.mySort();
    var tmp, i = 0;
    var swap = setInterval(function() {
        if (i < swapSpanNo[0].length) {
            var left = blockWrapper.childNodes[swapSpanNo[0][i]];
            var right = blockWrapper.childNodes[swapSpanNo[1][i]];

            left.classList.add('apping');

            tmp = left.style.height;
            left.style.height = 0;
            left.style.height = right.style.height;
            right.style.height = tmp;

            tmp = left.title;
            left.title = right.title;
            right.title = tmp;

            i++;

        } else {
            setTimeout(renderChart, 200);
            clearInterval(swap);
        }
    }, 200);

}


//生产随机数据用于图表
function buildOriginalData(MaxDataNum) {
    //清空数组
    OriginalData = [];
    for (var i = 0; i < MaxDataNum; ++i) {
        OriginalData.push(Math.floor(Math.random() * (200 - 10 + 1) + 10));
    }
}
//检查输入的值是否符合要求
function checkInputNum(DomName) {
    var inputData = get(DomName).value;
    var regular = /^\d{2}$|100/;
    if (inputData.match(regular) == null) {
        alert("请输入 10-100之间的数值");
        return false;
    }
    return parseInt(inputData);
}

function renderChart(isanimate) {
    blockWrapper.innerHTML = "";
    OriginalData.forEach(function(value, index) {
        var span = document.createElement('span');
        span.style.height = value + "px";
        // span.style.backgroundColor = "#0af";
        if (isanimate) {
            span.className = "apping";
        }
        //span.style.lineHeight = value + "px";
        //span.style.left = 5 + (index * 15) + "px";
        span.title = value;
        span.dataset.num = index;
        span.onclick = function(event) {
            removeSpan(event);
        };
        blockWrapper.appendChild(span);
    });
}



function removeSpan(event) {
    console.log(event.target);
    if (event.target.nodeName == "SPAN") {
        var delpos = event.target.dataset.num;
        blockWrapper.removeChild(blockWrapper.childNodes[delpos]);
        OriginalData.splice(delpos, 1);
        renderChart(no_animate);
    }

}
//左端入
function leftIn() {
    var num = checkInputNum('#input-num');
    if (!num)
        return;
    if (blockWrapper.childNodes.length >= 60) {
        alert('下面太挤啦');
        return;
    }
    OriginalData.unshift(num);
    renderChart(no_animate);
}
//右端入
function rightIn() {
    var num = checkInputNum('#input-num');
    if (!num)
        return;
    if (blockWrapper.childNodes.length >= 60) {
        alert('下面太挤啦');
        return;
    }
    OriginalData.push(num);
    renderChart(no_animate);
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
    OriginalData.shift();

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
    OriginalData.pop();
}

function rebuild() {
    blockWrapper.innerHTML = "";
    buildOriginalData(MaxDataNum);
    renderChart(animate);

}


function init() {
    get('#btn-rebuild').onclick = rebuild;
    get('#btn-left-in').onclick = leftIn;
    get('#btn-right-in').onclick = rightIn;
    get('#btn-left-out').onclick = leftOut;
    get('#btn-right-out').onclick = rightOut;
    get('#btn-sort').onclick = SortlData;
    blockWrapper = get('.span-wrapper');
    buildOriginalData(MaxDataNum);
    renderChart(animate);

}
window.onload = function() {
    init();
}