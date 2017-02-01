# 百度 IFE 春季班第二阶段任务总结

标签（空格分隔）： HTML CSS JavaScript
---

[百度前端技术学院][1] （Baidu Institute of Front-End Technology）是一个面向大学生的前端技术学习平台。在这里通过思考完成编码任务，总结编码中的知识点，审查他人的代码来提升学习效率与效果，帮助开发者们更加高效、系统地学习Web前端技术。

本人选择了 任务十三~二十一 二十九~三十二 完成学习第二学习阶段。

----------
## [任务十三：零基础JavaScript编码（一）][2]
**任务描述**

> - 参考以下示例代码，补充其中的JavaScript功能，完成一个JavaScript代码的编写
> - 本任务完成的功能为：用户可以在输入框中输入任何内容，点击“确认填写”按钮后，用户输入的内容会显示在“您输入的值是”文字的右边

**任务注意事项**

> - 实现简单功能的同时，请仔细学习JavaScript基本语法、事件、DOM相关的知识
> - 请注意代码风格的整齐、优雅
> - 代码中含有必要的注释
> - 可以不考虑输入的合法性
> - 建议不使用任何第三方库、框架
> - 示例代码仅为示例，可以直接使用，也可以完全自己重写

Demo | [Sourse][3]

**任务总结**


#### Document.querySelector()

    //element = document.querySelector(selectors);
    var get = function (name) {
        return document.querySelector(name);
    }
    
 name 是一个字符串，可以是一个或多个 CSS 选择器，多个用逗号分隔。

    //elementList = document.querySelectorAll(selectors);
    var getAll = function (name) {
        return document.querySelectorAll(name);
    }

自定义 get 函数返回 `querySelect


#### parseInt()

    //parseInt(string, radix);
    var num = parseInt(get("#aqi-input").value);
    
`parseInt()` 函数将给定的字符串以指定基数（radix/base）解析成为整数。从输入框取得值经过 `parseInt()` 处理返回一个十进制数。默认为十进制。    


#### isNaN()
    
    //isNaN(testValue);
    if ((!isNaN(num)) && (num >= 0)) {}
    
`isNaN()` 函数用来判断一个值是否为 `NaN`。正常应取反该函数即为真。


#### GlobalEventHandlers.onclick


```
//object.onclick=function(){};
get("#button").onclick= function () {}
```

1. `onclick` 事件会在元素被点击时发生、`onkeyup` 事件会在键盘按键被松开时发生。
2. HTML中使用属性 `onclick="Code"`。`onclick`、`onkeyup` 等属于 HTML DOM 事件。
3. 不过直接使用 element.onclick 该对象的相应时间会被该对象相同的事件覆盖，使用 `target.addEventListener(type, listener[, options]){}`  可以解决。


```
if (even.keyCode == 13) {}
```

`even.keyCode` 能判断当前哪个按键被敲下。




**参考资料**

> - [JavaScript入门篇][4]
> - [MDN JavaScript][5]

---


## [任务十四：零基础JavaScript编码（二）](http://ife.baidu.com/2016/task/detail?taskId=14)
**任务描述**

> - 参考以下示例代码，页面加载后，将提供的空气质量数据数组，按照某种逻辑（比如空气质量大于60）进行过滤筛选，最后将符合条件的数据按照一定的格式要求显示在网页上

**任务注意事项**

> - 实现简单功能的同时，请仔细学习JavaScript基本语法、事件、DOM相关的知识
> - 请注意代码风格的整齐、优雅
> - 代码中含有必要的注释
> - 其中的数据以及60的判断逻辑可以自行设定
> - 建议不使用任何第三方库、框架
> - 示例代码仅为示例，可以直接使用，也可以完全自己重写


Demo | [Sourse](https://github.com/409915016/Baidu_IFE_2016Spring/tree/master/phase_2/task_14)

**任务总结**


### 排序（冒泡排序）
```
//arr.sort([compareFunction])
aqiData.sort(function (a, b) {
    return b[1] - a[1];
});
```

#### Array.prototype.sort()

`sort()` 方法可对数组进行排序，返回一个新的排序后的数组。参数`compareFunction`是用来指定按某种顺序进行排序的函数

如果省略，那每个元素都会转换为字符串，然后按 Unicode 位点进行排序。


`compareFunction(a, b)` 函数接受要排序的数组元素，需要返回的值后作为`sort` 排序依据。

如果 `compareFunction(a, b)` 返回的值小于 `0` 那么 `a` 会被排列到 `b` 之前；

返回的值等于 `0` 那么 `a` `b` 保持原来的位置；

返回的值大于 `0` 那么 `b` 会被排列到 `a` 之前。

#### 示例

举个栗子：

```
function sortNumber(a, b) {
  console.log(a + "-" + b + "=" + (a - b))
  return a - b
}

var nunber = [
  '10',
  '5',
  '40',
  '25',
  '1000',
  '1'
];

console.log(nunber.sort(sortNumber));

// Console 
// 5 -30 15 -15 -960 999 39 24 9 4
// sort return new array 
// ["10", "5", "40", "25", "40", "1000"]
```

 
`sort` 函数会将 `nunber`数组的元素按顺序**两两**地传入自定义的 `sortNumber` 函数中。处理后返回 **正负或零** ，作为`sort` 函数排序的依据。
 
首先元素`a = 10` `b = 5` 会计算差值，返回值 `5` 传入到`sort` 函数中。已知 `a - b = 5` **大于零** ，`a` `b` 将调换他们的值。

经第一次处理后**新**的 `nunber` 数组变成：

```

  ['5','10','40','25','1000','1']

```

下一次将比较 `10 - 40 = -30` **小于零**，他们的相对位置保持不变 ：

```

  ['5','10','40','25','1000','1']

```

下一次：

```

  ['5','10','25','40','1000','1']

```

其实每次排序都保证了新数组靠前的值的 Unicode 位点一定比后一位小或相等，最后产生一个**升序**的新数组：


```

["10", "5", "40", "25", "40", "1000"]

```

所以栗子中 自定义的 `sortNumber` 函数是保证排序顺序的依据，要实现**降序**的功能也一样简单：

```

//降序排列
function sortNumber(a, b) {
  return b - a
}
```

---


![image](http://thumbnails117.imagebam.com/52481/05c24c524804646.jpg)

其中数组 `nunber` 是一个多维数组，其中包含了 6 带有两个元素的数组。 第一个元素是 城市名字符串，第二个是整数值。

读取数组的元素， `6` 个元素但下标从 `0` 开始 ，最后一位是 `5` 。所以 `i` **最大值**为 `5` 。


`aqiData[i][0]`   可读取城市名  `北京`

`aqiData[i][1]`   可读取污染整数值 `90`



**参考资料**

> - [JavaScript入门篇][4]
> - [MDN JavaScript][5]



---



## [任务十五：零基础JavaScript编码（三）](http://ife.baidu.com/2016/task/detail?taskId=15)
**任务描述**

> - 参考以下示例代码，读取页面上已有的source列表，从中提取出城市以及对应的空气质量
> - 将数据按照某种顺序排序后，在resort列表中按照顺序显示出来

**任务注意事项**

> - 实现简单功能的同时，请仔细学习JavaScript基本语法、事件、DOM相关的知识
> - 请注意代码风格的整齐、优雅
> - 代码中含有必要的注释
> - 建议不使用任何第三方库、框架
> - 示例代码仅为示例，可以直接使用，也可以完全自己重写


Demo | [Sourse](https://github.com/409915016/Baidu_IFE_2016Spring/tree/master/phase_2/task_15)

**任务总结**



``` getAll('#source li')[i].innerText.slice(0, 2).toString();```用于取得 HTML DOM中某段文字

 

#### String.prototype.slice() 

slice() 方法用于截取字符串中的一部分，返回一个新的字符串。

语法 ``` str.slice(beginSlice[, endSlice])  ```。

 - ``` beginSlice ``` 从索引 0 为基数，负数则从开头一个字符串开始计算截取的字符串。

 - ``` endSlice ``` 省略时默认会截取到字符串最后一位。负数则从末尾开始计算截取的字符串。


#### Array.prototype.slice()

略


#### Object.prototype.toString()

toString() 方法返回一个表示该对象的字符串。

语法 ```object.toString() ```。

```
var o = new Object();
o.toString();           // [object Object]

var arr = new Array();
arr.push("NewValue");
arr.toString();         // "NewValue"

var s = new String("Hello");        
s.toString();           // "Hello"

```
#### String 对象 与 基本数据类型 

```

String("test") === new String("test"); // false;
String("test") === String("test"); // true;

```
```new String```创建的是字符串对象，```String(a)```返回的是基本类型。
```

a = "test"
a.b = "bar"
alert("a.b = " + a.b); //undefined

A = new String("test");
A.b = "bar";
alert("A.b = " + A.b); // bar


```
当调用方法的时候普通字符串会自动包装成字符串对象，所以也可以调用对应的方法，只是表现上看起来像是方法，但是总的来说还是有区别的。


```
var s0 = 'hello';
var s1 = new String(s0);
var s2 = String(s0);
console.log(s1 === s2); // false
console.log(s1 === s0); // false
console.log(s2 === s0); // true
s0.foo = 'bar';
s1.foo = 'bar';
s2.foo = 'bar';
console.log(s0.foo); // undefined
console.log(s1.foo); // bar
console.log(s2.foo); // undefined



```
以上栗子很好地说明了它们之间的区别。


#### Math 

```Math``` 是一个内置对象， 所有属性和方法都是静态的，为数学常量和数学函数提供了属性和方法，而不是一个函数对象。它的更多属性和方法可以参考：

[Math - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math)


```Math.E  ``` 属性中值为欧拉常数。

其它的属性中储存了一些常用的常数。


```Math.abs(x)``` 函数返回指定数字 “x“ 的绝对值。

传入一个非数字形式的字符串或者 ```undefined/empty``` 变量，将返回 `NaN`。传入 `null` 将返回 0。


```

Math.abs('-1');     // 1
Math.abs(-2);       // 2
Math.abs(null);     // 0
Math.abs("string"); // NaN
Math.abs();         // NaN

```
#### Document.createElement()

```Document.createElement() ```方法用于创建指定的HTML元素。

语法 ``` var element = document.createElement(tagName[, options]); ```


```element ``` 指被创建的 Element 对象


#### Document.createTextNode()

同理，创建一个文本节点

语法 ``` var text = document.createTextNode(data); ``` 


#### Node.appendChild()

```Node.appendChild() ```方法将一个节点添加到指定父节点的子节点列表末尾。

语法 ``` var child = node.appendChild(child); ```

- ```node``` 是要插入子节点的父节点。
- ```child``` 即是参数又是这个方法的返回值。

创建一个新的段落p元素和它的文本节点,然后添加到body的最尾部


```

var pText = document.createTextNode("new Text");
var p = document.createElement("p");
p.appendChild(pText);
document.body.appendChild(p);


```


#### Node.cloneNode()


``` Node.cloneNode() ```返回调用该方法的节点的一个副本。

语法 ``` var dupNode = node.cloneNode(deep);```

- ```node``` 要被克隆的节点
- ``` dupNode ```  克隆所生成的副本节点
- ```deep``` 默认为深度克隆，所有后代节点也都会被克隆,如果为false,则只克隆该节点本身。

为防止 复制后的节点在同一文档内 `id` `name` 冲突，没法重新选取元素或其他操作。

对于新拷贝的副本对象 ``` dupNode ```  应该使用 `Element.setAttribute()` 修改其 `id` `name`值。



**参考资料**

> - [JavaScript入门篇][4]
> - [MDN JavaScript][5]







---





## [任务十六：零基础JavaScript编码（四）](http://ife.baidu.com/2016/task/detail?taskId=16)
**任务描述**

> - 参考以下示例代码，用户输入城市名称和空气质量指数后，点击“确认添加”按钮后，就会将用户的输入在进行验证后，添加到下面的表格中，新增一行进行显示
> - 用户输入的城市名必须为中英文字符，空气质量指数必须为整数
> - 用户输入的城市名字和空气质量指数需要进行前后去空格及空字符处理（trim）
> - 用户输入不合规格时，需要给出提示（允许用alert，也可以自行定义提示方式）
> - 用户可以点击表格列中的“删除”按钮，删掉那一行的数据



**任务注意事项**

> - 实现简单功能的同时，请仔细学习JavaScript基本语法、事件、DOM相关的知识
> - 请注意代码风格的整齐、优雅
> - 代码中含有必要的注释
> - 验证输入逻辑可以在失去焦点时判断，也可以在点击按钮时判断
> - 建议不使用任何第三方库、框架
> - 示例代码仅为示例，可以直接使用，也可以完全自己重写


Demo | [Sourse](https://github.com/409915016/Baidu_IFE_2016Spring/tree/master/phase_2/task_16)


**任务总结**

#### Array.prototype.forEach()


####  for...in

以任意序迭代一个对象的可枚举属性。
```for...in``` 会迭代使用内置构造函创建出来的对象，
像 ```Array``` 和 ```Object``` 对象，都会继承自
```Object.prototype``` 和 ```String.prototype``` 的不可枚举属性， 
例如 ```String``` 的 ```indexOf()```  方法或者 ```Object``` 的 ```toString``` 方法。




语法 ```for (variable in object) {...}```


- ```variable```  每次迭代，一个不同的属性名将会赋予 ```variable```
 
- ```object```  可枚举属性被迭代的对象

```
var obj = {a:1, b:2, c:3};
    
for (var prop in obj) {
  console.log("obj." + prop + " = " + obj[prop]);
}


// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"

```

**不建议使用 ```for...in``` 对 数组进行遍历操作，因为其原型方法也会被遍历出来，
虽然用 ``` Object.prototype.hasOwnProperty() ``` 可以把其自身属性检测出来。**


```
for (var prop in obj) {
    if(obj.hasOwnProperty(prop)){
        console.log("obj." + prop + " = " + obj[prop]);
    }
}

```


#### String.prototype.match()

当字符串匹配到 正则表达式 时，```match()``` 方法会提取匹配项。

###### 语法 

> ```str.match(regexp);```

###### 参数

- ```regexp```
一个正则表达式对象。如果传入一个非正则表达式对象，则会隐式地使用 ```new RegExp(obj)``` 将其转换为正则表达式对象。

###### 返回

- ```array```
一个包含匹配结果的数组，如果没有匹配项，则返回 ```null```。


```
if (!city_name.match(/^[A-Za-z\u4E00-\u9FA5]+$/)) {
    alert("城市名必须为中英文字符！");
    return;
}

```

```city_name.match()``` 返回了匹配到的中英文字符，若取反则没有找到匹配的中英文字符。


#### 删除数组元素

#### delete

delete 操作符用来删除一个对象的属性。

###### 语法 

>  ```delete expression``` 
>  
>  ```delete object.property ``` 
>  
>  ```delete object['property']```


###### 参数

- ```objectName```
对象名。

- ```property```
需要删除的属性。

###### 返回

- ```boolean``` 
非严格模式下返回 ```false``` 。其他情况都返回  ```true```  。
在严格模式中，如果属性是一个不可配置属性，删除时会抛出异常。


当你删除一个数组元素时，数组的 ```length``` 属性并不会变小。例如，如果你删除了```a[3]```, ```a[4]```仍然是```a[4]```, ```a[3]```成为```undefined```. 即便你删除了最后一个元素也是如此 ```(delete a[a.length-1])```.

当用 ```delete``` 操作符删除一个数组元素时，被删除的元素已经完全不属于该数组。下面的例子中，``` trees[3]``` 被使用```delete```彻底删除。

```

var trees = ["redwood","bay","cedar","oak","maple"];
delete trees[3];
if (3 in trees) {
   // 这里不会被执行
}

```


如果你想让一个数组元素的值变为 ```undefined``` 而不是删除它，可以使用 ```undefined``` 给其赋值而不是使用 ```delete``` 操作符。下面的例子中，```trees[3]``` 被赋值为```undefined```，但该元素仍然存在。

```
var trees = ["redwood","bay","cedar","oak","maple"];
trees[3]=undefined;
if (3 in trees) {
   // 这里会被执行
}

```


####  Array.prototype.splice()

```splice()``` 方法通过删除现有元素或添加新元素来更改数组的内容。




**参考资料**

> - [JavaScript入门篇][4]
> - [MDN JavaScript][5]

























  [1]: http://ife.baidu.com/
  [2]: http://ife.baidu.com/task/detail?taskId=13
  [3]: https://github.com/409915016/Baidu_IFE_2016Spring/tree/master/phase_2/task_13
  [4]: http://www.imooc.com/learn/36
  [5]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript