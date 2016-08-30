"use strict";

var get = function(name) {
    return document.querySelector(name);
}
var getAll = function(name) {
    return document.querySelectorAll(name);
}

var inputName = get('#UserName');
var hint = get('#HintInfo');


get('#UserNameBtn').onclick = Validate;

function Validate() {
    var inputValue = inputName.value;
    if (CheckChar(inputValue) == 0) {
        clearStyle();
        hint.textContent = "姓名不能为空";
        inputName.classList.add('error');
        hint.classList.add('error');

    } else if (CheckChar(inputValue) >= 4 && CheckChar(inputValue) <= 16) {
        clearStyle();

        hint.textContent = "格式正确";
        inputName.classList.add('success');
        hint.classList.add('success');
    } else {
        clearStyle();
        hint.textContent = "必填，长度为4~16个字符";
        hint.classList.add('error');
        inputName.classList.add('error');

    }

}

function CheckChar(str) {
    var charlength = 0;
    for (var i = 0; i < str.length; i++) {
        var unicodeNum = str.charCodeAt(i);
        if (unicodeNum >= 0 && unicodeNum <= 128) {
            charlength += 1;
        } else {
            charlength += 2;
        }
    }
    return charlength;
}

function clearStyle() {
    if (inputName.classList.contains('error') || hint.classList.contains('error')) {
        inputName.classList.remove('error');
        hint.classList.remove('error');
    }
    if (inputName.classList.contains('success') || hint.classList.contains('success')) {
        inputName.classList.remove('success');
        hint.classList.remove('success');
    }
}