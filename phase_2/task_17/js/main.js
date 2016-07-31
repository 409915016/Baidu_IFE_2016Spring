/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/
var get = function (name) {
    return document.querySelector(name);
}
var getAll = function (name) {
    return document.querySelectorAll(name);
}

//获取随机颜色
function randomColor() {
    return "#" + Math.random().toString(16).substring(2, 8);
}


// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
    var y = dat.getFullYear();
    var m = dat.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = dat.getDate();
    d = d < 10 ? '0' + d : d;
    return y + '-' + m + '-' + d;
}

function randomBuildData(seed) {
    var returnData = {};
    var dat = new Date("2016-01-01");
    var datStr = '';
    for (var i = 1; i < 92; i++) {
        datStr = getDateStr(dat);
        returnData[datStr] = Math.ceil(Math.random() * seed);
        dat.setDate(dat.getDate() + 1);
    }
    return returnData;
}

var aqiSourceData = {
    "北京": randomBuildData(500),
    "上海": randomBuildData(300),
    "广州": randomBuildData(200),
    "深圳": randomBuildData(100),
    "成都": randomBuildData(300),
    "西安": randomBuildData(500),
    "福州": randomBuildData(100),
    "厦门": randomBuildData(100),
    "沈阳": randomBuildData(500)
};

// 用于渲染图表的数据
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
    nowSelectCity: -1,
    nowGraTime: "day"
}

/**
 * 渲染图表
 */
function renderChart() {
    console.log("渲染图表");
    var chart_wrap = get(".aqi-chart-wrap");

    var select_city = pageState["nowSelectCity"];
    var select_cycle = pageState["nowGraTime"];

    var select_data = chartData[select_cycle][select_city];

    var html = '';
    var style = "style='width:{width}; height:{height}; background-color:{color}'   ";
    var span_title = "title = '{time} 的空气质量数值为 : {data}' ";
    var model = "<span   " + style + span_title + "></span>";


    for (e in select_data) {
        html += model.replace('{width}', select_data[e]['width']).replace('{height}', select_data[e]['height'])
            .replace('{color}', select_data[e]['color']).replace('{time}', e)
            .replace('{data}', select_data[e]['data'])
    }
    chart_wrap.innerHTML = html;




}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange(e) {
    //console.log("单选发生了变化");
    //console.log(e.target.value);
    //console.log(e);
    // 确定是否选项发生了变化 
    if (e.target.value == pageState["nowGraTime"]) {
        return false;
    }
    // 设置对应数据
    pageState["nowGraTime"] = e.target.value;

    // 调用图表渲染函数
    renderChart();
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange(e) {
    //console.log("下拉选项发生了变化");
    //console.log(e.target.value);
    //console.log(e);
    // 确定是否选项发生了变化 
    if (e.target.value == pageState["nowSelectCity"]) {
        return false;
    }
    // 设置对应数据
    pageState["nowSelectCity"] = e.target.value;

    // 调用图表渲染函数
    renderChart();
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
    var TimeSelector = get("#form-gra-time");
    TimeSelector.addEventListener("change", graTimeChange);
    console.log(TimeSelector);
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
    // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
    var CitySelector = get('#city-select');
    for (var e in aqiSourceData) {
        var CitySelectorOption = document.createElement("option");
        //CitySelectorOption.innerHTML = "";
        CitySelectorOption.innerHTML = e;
        CitySelector.appendChild(CitySelectorOption);
    }
    // 给select设置事件，当选项发生变化时调用函数citySelectChange
    CitySelector.addEventListener("change", citySelectChange);
    console.log(CitySelector);

}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
    // 将原始的源数据处理成图表需要的数据格式
    var aqidata = {};



    //创建日图表数据
    var day = {};



    var week = {};
    var week_day = 5;
    //第几个周
    var week_num = 1;
    var week_total = 0;



    var month = {};
    //第几个月
    var month_num = 1;
    var month_total = 0;
    var i = 0;

    for (var city in aqiSourceData) {

        day[city] = {};
        week[city] = {};
        month[city] = {};


        for (var date in aqiSourceData[city]) {
            //城市
            //console.log(city);
            //日期
            //console.log(date);
            //数值
            //console.log(aqiSourceData[city][date]);


            //每日图表
            var day_pillar = {};
            day_pillar["data"] = aqiSourceData[city][date];
            day_pillar["height"] = Math.round(aqiSourceData[city][date] * 0.5) + "px";
            day_pillar["width"] = "8px";
            day_pillar["color"] = randomColor();
            //console.log(pillar);
            day[city][date] = day_pillar;


            //需要经过平均分
            week_total += aqiSourceData[city][date];

            if (week_day == 7 || date == '2016-03-31') {
                //所有城市每周图表所需数据

                if (date == '2016-01-03') {
                    var week_data = (week_total / 3).toFixed(2);
                } else if (date == '2016-03-31') {
                    var week_data = (week_total / 4).toFixed(2);
                } else {
                    var week_data = (week_total / 7).toFixed(2);
                }
                var week_pillar = {};
                var one_week = "第" + week_num + "周";
                //平均结果
                week_pillar["data"] = week_data;
                week_pillar["height"] = Math.round(week_data * 0.5) + "px";
                week_pillar["width"] = "70px"
                week_pillar["color"] = randomColor();

                week[city][one_week] = week_pillar;

                week_total = 0;
                week_day = 0
                week_num++;
            }
            week_day++;

            //月数据
            month_total += aqiSourceData[city][date];
            if (date == '2016-01-31' || date == '2016-03-31' || date == '2016-02-29') {
                if (date == '2016-02-29') {
                    var month_data = (month_total / 29).toFixed(2);
                } else {
                    var month_data = (month_total / 31).toFixed(2);
                };

                var one_month = month_num + "月";
                var month_pillar = {};
                month_pillar["data"] = month_data;
                month_pillar["height"] = Math.round(month_data * 0.5) + "px";
                month_pillar["width"] = "150px";
                month_pillar["color"] = randomColor();


                month[city][one_month] = month_pillar;
                month_total = 0;
                month_num++;

            }


        }
        week_day = 5;
        week_num = 1;
        month_num = 1;
    }


    // 处理好的数据存到 chartData 中
    chartData["day"] = day;
    chartData["week"] = week;
    chartData["month"] = month;
    console.log(chartData);


}

/**
 * 初始化函数
 */
function init() {
    initGraTimeForm()
    initCitySelector();
    initAqiChartData();
    pageState["nowSelectCity"] = "北京";
    renderChart();
}

init();