var arr = ["一", "二", "三", "四", "五"];
var aqiData = [];
var passNum = 60;

var get = function(name) {
    return document.querySelector(name);
}
var getAll = function(name) {
    return document.querySelectorAll(name);
}

var city_name_input = get('#aqi-city-input');
var aqi_value_input = get('#aqi-value-input');

function sortAqiData(data, type) {
    if (type == "big") {
        data.sort(function(a, b) {
            return b[1] - a[1];
            //return a[1] - b[1];
        });

    } else {
        data.sort(function(a, b) {
            //return b[1] - a[1];
            return a[1] - b[1];
        });

    }

    return data;
}

function addAqiData() {

}

function getData() {
    var sourceLi = getAll('#source li');
    var sourceLiB = getAll('#source li b');
    var NewaqiData = [];
    for (i = 0; i < sourceLi.length; i++) {
        var city = sourceLi[i].innerText.slice(0, 2).toString();
        var aqinum = Math.abs(sourceLiB[i].innerText);
        NewaqiData.push([city, aqinum]);
    }
    return NewaqiData;
}

function render(data) {
    var aqi_table = get('#aqi-table');
    if (aqi_table.innerHTML !== "") {
        aqi_table.innerHTML = "";
    }
    var table_thead = document.createElement("thead");
    var table_tbody = document.createElement("tbody");
    table_thead.innerHTML = "<thead><tr><td>城市</td><td>空气质量</td><td>操作</td></tr></thead>";
    if (data.length) {

        aqi_table.appendChild(table_thead);
        for (i = 0; i < data.length; i++) {
            var tbody_tr = document.createElement("tr");
            tbody_tr.innerHTML = "<td>" + data[i][0] + "</td><td>" + data[i][1] + "</td><td><button data-cityname='" + data[i][0] + "'>删除</button></td>";
            table_tbody.appendChild(tbody_tr);
        }
    }
    aqi_table.appendChild(table_tbody);
}

function add_btnHandle() {
    var city_name = city_name_input.value.trim();
    var aqi_value = aqi_value_input.value.trim();
    if (!city_name.match(/^[A-Za-z\u4E00-\u9FA5]+$/)) {
        alert("城市名必须为中英文字符！") return;
    }
    if (!aqi_value.match(/^\d{1,2}$/)) {
        alert("空气质量指数必须为整数！") return;
    }
    aqiData.push([city_name, aqi_value]);
    render(aqiData);
}

function del_btnHandle(cityname) {

    for (i = 0; i < aqiData.length; i++) {
        if (aqiData[i][0] == cityname) {
            aqiData.splice(i, 1);
            render(aqiData);
        }
    }
}

function init() {
    var add_btn = get("#add-btn");
    add_btn.onclick = add_btnHandle;
    document.getElementById("aqi-table").addEventListener("click",
    function(event) {
        if (event.target.localName == "button") del_btnHandle(event.target.dataset.cityname);
    })

}

init();