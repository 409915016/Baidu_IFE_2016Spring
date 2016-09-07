 var get = function(name) {
     return document.querySelector(name);
 }
 var getAll = function(name) {
     return document.querySelectorAll(name);
 }

 function radioChange() {
     if( get("#inSchoolRadio").checked ) {
         get(".inSchool").className = "inSchool";
         get(".outSchool").className = "outSchool hide";
     }
     else {
         get(".inSchool").className = "inSchool hide";
         get(".outSchool").className = "outSchool";

     }

 }

 function selectDistrict() {
     var data = {
        beijing: ["北京大学", "清华大学", "北京航空航天大学"],
        shanghai: ["复旦大学", "上海交通大学", "同济大学"],
        hangzhou: ["浙江大学", "杭州电子科技大学", "浙江工业大学"]
     }
     //地区
     var Slt1 = get("#select1");
     //学校
     var Slt2 = get("#select2");
     //在Slt1选项数组中，返回被选中的value
     var selected = Slt1.options[Slt1.selectedIndex].value;
     Slt2.innerHTML = "";
     //填充选项
     for ( var i = 0; i < data[selected].length; i++) {
         var opt = document.createElement('option');
         opt.value = data[selected][i];
         opt.innerHTML = data[selected][i];
         Slt2.appendChild(opt);
     }
 }