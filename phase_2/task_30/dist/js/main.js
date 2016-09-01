function init() {

    var get = function(name) {
        return document.querySelector(name);
    }
    var getAll = function(name) {
        return document.querySelectorAll(name);
    }

    var CheckEmptyState = {
        isOK: false,
        tips: ''
    }
    var formInputEle = getAll('table input');
    var AllHitInfo = document.querySelectorAll('table tr:nth-child(2n) td:nth-child(2)');

    //给每个input加上失去焦点监听
    for (var i = 0; i < formInputEle.length; i++) {
        formInputEle[i].addEventListener('blur', function(e) {
            //传入每个失去焦点的后的input对象 完成读取CheckEmptyState 
            var hitIndex = findHint(e, formInputEle);
            CheckEmpty(e.target);
            var AllHitInfo = document.querySelectorAll('table tr:nth-child(2n) td:nth-child(2)');
            AllHitInfo[hitIndex].innerHTML = CheckEmptyState.tips;
            //console.log(hitIndex);


            if (CheckEmptyState.isOK) {
                if (formInputEle[hitIndex].classList.contains('error') || AllHitInfo[hitIndex].classList.contains('error') || AllHitInfo[hitIndex].classList.contains('none')) {
                    formInputEle[hitIndex].classList.remove('error');
                    AllHitInfo[hitIndex].classList.remove('error');
                    AllHitInfo[hitIndex].classList.remove('none');
                }

                formInputEle[hitIndex].classList.add('success');
                AllHitInfo[hitIndex].classList.add('success');
            } else {
                if (formInputEle[hitIndex].classList.contains('success') || AllHitInfo[hitIndex].classList.contains('success')) {
                    formInputEle[hitIndex].classList.remove('success');
                    AllHitInfo[hitIndex].classList.remove('success');
                }
                formInputEle[hitIndex].classList.add('error');
                AllHitInfo[hitIndex].classList.add('error');
                AllHitInfo[hitIndex].classList.remove('none');
            }
        })
    }




    ConfirmBtn.addEventListener("click", function(e) {
        var clickSuccess = false;
        for (var i = 0; i < formInputEle.length; i++) {
            CheckEmpty(formInputEle[i]);
            if (CheckEmptyState.isOK) {
                clickSuccess = true;
                if (formInputEle[i].classList.contains('error') || AllHitInfo[i].classList.contains('error') || AllHitInfo[i].classList.contains('none')) {
                    formInputEle[i].classList.remove('error');
                    AllHitInfo[i].classList.remove('error');
                    AllHitInfo[i].classList.remove('none');
                }

                formInputEle[i].classList.add('success');
                AllHitInfo[i].classList.add('success');
            } else {
                clickSuccess = false;
                if (formInputEle[i].classList.contains('success') || AllHitInfo[i].classList.contains('success')) {
                    formInputEle[i].classList.remove('success');
                    AllHitInfo[i].classList.remove('success');
                }
                formInputEle[i].classList.add('error');
                AllHitInfo[i].classList.add('error');
                AllHitInfo[i].classList.remove('none');
            }
            if (!clickSuccess) {
                break;
            }


        }

        if (clickSuccess) {
            alert("提交成功");
        } else {
            alert("提交失败，输入有误");
        }


    });

    function findHint(e) {
        var index = -1;
        for (var i = 0; i < formInputEle.length; i++) {
            if (e.target === formInputEle[i]) {
                index = i;
            }
        }
        return index;
    }






    function CheckEmpty(ele) {
        //trim 处理
        var str = ele.value.trim();
        //check input text is Empty?
        if (str.length === 0) {
            CheckEmptyState.isOK = false;
            CheckEmptyState.tips = '输入不能为空';

            return;
        }
        //check UserName
        if (ele === formInputEle[0]) {
            //计算输入的字符长度 检查ASCII 大于255的非单字符，替换为两个字
            var len = str.replace(new RegExp('[^\x00-\xff]', 'g'), 'aa').length;
            if (len >= 4 && len <= 16) {
                CheckEmptyState.isOK = true;
                CheckEmptyState.tips = "名称可用";

            } else {
                CheckEmptyState.isOK = false;
                CheckEmptyState.tips = "名称不可用";

            }
            console.log(CheckEmptyState.tips);
        }
        //检查第一次密码
        if (ele === formInputEle[1]) {
            if (str.match(/^[a-zA-Z0-9]{6,16}$/)) {
                CheckEmptyState.isOK = true;
                CheckEmptyState.tips = "密码格式正确";
            } else {
                CheckEmptyState.isOK = false;
                CheckEmptyState.tips = "6到16位字符且只能为数字和字母";
            }
            console.log(CheckEmptyState.tips);
        }

        //检查第二次密码
        if (ele === formInputEle[2]) {
            if (str === formInputEle[1].value.trim()) {
                CheckEmptyState.isOK = true;
                CheckEmptyState.tips = '重复密码正确';
            } else {
                CheckEmptyState.isOK = false;
                CheckEmptyState.tips = '两次密码输入要相同';
            }
            console.log(CheckEmptyState.tips);
        }
        //检查邮箱格式
        if (ele === formInputEle[3]) {
            var reg = new RegExp('^([a-zA-Z0-9_\.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$', 'i');

            if (str.match(reg)) {
                CheckEmptyState.isOK = true;
                CheckEmptyState.tips = '邮箱可用';
            } else {
                CheckEmptyState.isOK = false;
                CheckEmptyState.tips = '邮箱格式错误';
            }
            console.log(CheckEmptyState.tips);
        }
        //检查手机号码格式
        if (ele === formInputEle[4]) {
            if (str.match(/^1[3|5|7|8|][0-9]{9}$/)) {
                CheckEmptyState.isOK = true;
                CheckEmptyState.tips = '号码可用';
            } else {
                CheckEmptyState.isOK = false;
                CheckEmptyState.tips = '号码格式错误';
            }
            console.log(CheckEmptyState.tips);
        }

    }

}

window.onload = function() {
    init();
}