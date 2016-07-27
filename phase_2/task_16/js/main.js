var arr = ["一", "二", "三", "四", "五"];
var aqiData = [];
var passNum = 60;

var get = function (name) {
    return document.querySelector(name);
}
var getAll = function (name) {
    return document.querySelectorAll(name);
}

var city_name_input = get('#aqi-city-input');
var aqi_value_input = get('#aqi-value-input');


function render() {
    var aqi_table = get('#aqi-table');
    aqi_table.innerHTML = "";

    var table_thead = document.createElement("thead");
    var table_tbody = document.createElement("tbody");
    table_thead.innerHTML = "<thead><tr><td>城市</td><td>空气质量</td><td>操作</td></tr></thead>";


    aqi_table.appendChild(table_thead);
    for (var city_name in aqiData) {
        var tbody_tr = document.createElement("tr");
        tbody_tr.innerHTML = "<td>" + city_name + "</td><td>" + aqiData[city_name] + "</td><td><button data-cityname='" + city_name + "'>删除</button></td>";
        table_tbody.appendChild(tbody_tr);
    }

    aqi_table.appendChild(table_tbody);
}

function add_btnHandle() {
    var city_name = city_name_input.value.trim();
    var aqi_value = aqi_value_input.value.trim();
    if (!city_name.match(/^[A-Za-z\u4E00-\u9FA5]+$/)) {
        alert("城市名必须为中英文字符！");
        return;
    }
    if (!aqi_value.match(/^\d{1,2}$/)) {
        alert("空气质量指数必须为整数！");
        return;
    }
    aqiData[city_name] = aqi_value;
    render();
}

function del_btnHandle(cityname) {

    delete aqiData[cityname];
    render();
}

function init() {
    var add_btn = get("#add-btn");
    add_btn.onclick = add_btnHandle;
    document.getElementById("aqi-table").addEventListener("click",
        function (event) {
            if (event.target.localName == "button") del_btnHandle(event.target.dataset.cityname);
        })

}

init();