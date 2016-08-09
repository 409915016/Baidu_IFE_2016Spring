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

function getCanBuild() {
    var num_value = get('#input-num').value;
    var regular = /^\d{1,2}$|100/;
    if (num_value.match(regular) == null) {
        alert('请输入 1-100之间的数值');
        return false;
    }
    return parseInt(num_value);
}

function removeSpan(event) {
    event.target.className += 'removing';
    setTimeout(function() {
        blockWrapper.removeChild(event.target)
    }, 500);
}

function leftIn() {
    var num = getCanBuild();
    if (!num)
        return;
    var span = document.createElement('span');
    span.textContent = num;
    span.className += 'apping';
    span.style.backgroundColor = randomColor();
    span.onclick = function(event) {
        removeSpan(event);
    };
    blockWrapper.insertBefore(span, blockWrapper.firstElementChild);
}

function rightIn() {
    var num = getCanBuild();
    if (!num)
        return;
    var span = document.createElement('span');
    span.textContent = num;
    span.style.backgroundColor = randomColor();
    span.className += 'apping';
    span.onclick = function(event) {
        removeSpan(event);
    };
    blockWrapper.appendChild(span);
}

function leftOut() {
    if (!blockWrapper.hasChildNodes()) {
        alert('队列没有元素');
        return;
    }
    blockWrapper.firstElementChild.className += 'removing';
    setTimeout(function() {
        blockWrapper.removeChild(blockWrapper.firstElementChild)
    }, 500);

}

function rightOut() {
    if (!blockWrapper.hasChildNodes()) {
        alert('队列没有元素');
        return;
    }
    blockWrapper.lastElementChild.className += 'removing';
    setTimeout(function() {
        blockWrapper.removeChild(blockWrapper.lastElementChild)
    }, 500);

}

function init() {
    get('#btn-left-in').onclick = leftIn;
    get('#btn-right-in').onclick = rightIn;
    get('#btn-left-out').onclick = leftOut;
    get('#btn-right-out').onclick = rightOut;
    blockWrapper = get('.span-wrapper');
}
window.onload = function() {
    init();
}