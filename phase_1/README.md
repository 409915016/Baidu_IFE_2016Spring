
[百度前端技术学院][1] （Baidu Institute of Front-End Technology）是一个面向大学生的前端技术学习平台。在这里通过思考完成编码任务，总结编码中的知识点，审查他人的代码来提升学习效率与效果，帮助开发者们更加高效、系统地学习Web前端技术。

本人选择了 任务三~四 六~十二 完成学习第一学习阶段。

----------


## [任务三：三栏式布局][2]

**任务描述**

>  - 使用 HTML 与 CSS 按照 [示例图][3] 实现三栏式布局。
>  - 左右两栏宽度固定，中间一栏根据父元素宽度填充满，最外面的框应理解为浏览器。背景色为 #eee 区域的高度取决于三个子元素中最高的高度。
 - [快速而简单的占位图服务][4]

**任务注意事项**
>
>  - 尝试 position 和 float 的效果，思考它们的异同和应用场景。
>  - 注意测试不同情况，尤其是极端情况下的效果。
>  - 图片和文字内容请自行替换，尽可能体现团队的特色。
>  - 调节浏览器宽度，固定宽度和自适应宽度的效果始终符合预期。
>  - 改变中间一栏的内容长度，以确保在中间一栏较高和右边一栏较高时，父元素的高度始终为子元素中最高的高度。
>  - 其他效果图中给出的标识均被正确地实现。


[Demo][5] | [Source][6]

**任务总结**

 - 两侧的栏目使用浮动布局，父容器通过清除浮动来解决高度塌陷的问题。
 - 中间栏固定外边距看起来在两栏中间。
 - 图片与文字顶部对齐问题，图片浮动，使文字围绕图片。设置文字宽度限定折断的位置。

**参考资料**

>  - [MDN：position：了解 CSS position 属性的基本知识][7]
>  - [MDN：float：了解 CSS float 属性的基本知识][8]
>  - [Learn CSS Positioning in Ten Steps：通过具体的例子熟悉 position 属性][9]
>  - [清除浮动（clearfix hack）：清除浮动是什么，如何简单地清除浮动][10]
>  - [StackOverflow：Which method of ‘clearfix’ is best?：清除浮动黑科技完整解读][11]


----------


## [任务四：定位和居中问题][12]

**任务描述**
>  - 实现如 [示例图][13] 的效果
>  - 灰色元素水平垂直居中，有两个四分之一圆位于其左上角和右下角。

**任务注意事项**

>  - 思考不同情况下（如灰色高度是根据内容动态变化的）水平垂直居中的解决方案。
>  - 动手试一试各种情况的组合，父元素和子元素分别取不同的 position 值。思考 position 属性各种取值的真正含义，尤其是 absolute 究竟是相对谁而言的。
>  - 注意测试不同情况，尤其是极端情况下的效果。
>  - 调节浏览器宽度，灰色元素始终水平居中。
>  - 调节浏览器高度，灰色元素始终垂直居中。
>  - 调节浏览器高度和宽度，黄色扇形的定位始终准确。


[Demo][14] | [Source][15]

**任务总结**

 - 居中块使用绝对定位布局，需要 `margin` 一半当前块的高度和宽度来保持绝对居中。
 - 如果居中块的 `::before`  `::after` 还没有被使用，用来制造上下对角的扇形。否则该在居中块內前后多加元素来制作实体扇形。
 - 实体扇形如果使用 `border-radius: 50%` 需要对父元素设置 `overflow: hidden` ，否则圆形剩余的扇不会被遮挡。另一种方法是制造一个矩形，对其一角进行圆角处理。

**参考资料**

>  - [HTML和CSS高级指南之二——定位详解：大漠老师手把手教你，这次彻底搞懂定位问题][16]
>  - [Centering in CSS: A Complete Guide：完整讨论了不同情况下的居中方案，建议自己思考之后再看答案][17]
>  - [Get HTML & CSS Tips In Your Inbox：有人写了一个作弊工具生成居中代码，但是看着代码你明白为什么吗][18]

----------


## [任务六：通过HTML及CSS模拟报纸排版][19]

> **任务描述**
>
>  - 参考 PDS设计稿 ，实现页面开发，要求实现效果与 [样例][20] 基本一致
>  - 页面中的各字体大小，内外边距等可参看 [标注图][21]
>  - 页面宽度固定（定宽）
>

**任务注意事项**

>  - 只需要完成HTML，CSS代码编写，不需要写JavaScript
>  - 设计稿中的图片、文案均可自行设定
>  - 在Chrome中完美实现符合标注中的各项说明
>  - 有能力的同学可以尝试跨浏览器的兼容性
>  - 有能力的同学可以在实现一遍后尝试用less, sass或者stylus等再实现一次

[Demo][22] | [Source][23]

**任务总结**

 - 顶部文字在红色块内底边对齐，直接的方法是使用百分比相对定位。红块占位使用 `display: inline-block`
 - 右侧字母下划线 `text-decoration: underline`
 - 直接转换HTML内容为小型的大写 `font-variant: small-caps`
 - 将单词首个字母转换为大写 `text-transform: capitalize`
 - 左下图文环绕，右浮动一不可见的元素使，图片出现在文章中的固定位置，图片右浮动的同时清除右方浮动。但这样做使得首字属性 `:first-letter` 不能左浮动，需取首字母作为单独元素
 - `content: open-quote` 实现大引号
 - CSS 三角形实现：
    **border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 8px solid #11456b;**

**参考资料**

> [MDN HTML入门][24]
> [MDN CSS入门教程][25]

----------

## [任务七：实现常见的技术产品官网的页面架构及样式布局][26]

**任务描述**

>  - 通过HTML及CSS实现设计稿 设计稿PSD文件 ，效果如 [效果图][27]
>  - 设计稿是有一定宽度的，这个宽度为页面的最小宽度，也就是说，当浏览器窗口宽度小于设计稿宽度时，允许出现横向滚动条，页面内容宽度保持不变，但是当浏览器窗口宽度大于设计稿宽度时，页面部分内容的宽度应该保持和浏览器窗口宽度一致，具体哪些部分题目不做具体指明，看看大家的判断如何。

**任务注意事项**

>  - 只需要完成HTML，CSS代码编写，不需要写JavaScript
>  - 设计稿中的图片、文案均可自行设定
>  - 在Chrome中完美实现符合标注中的各项说明
>  - 有能力的同学可以尝试跨浏览器的兼容性
>  - 有能力的同学可以在实现一遍后尝试用less, sass或者stylus等再实现一次

[Demo][28] | [Source][29]

**任务总结**

 - 导航栏动画。先设置 `border-bottom: 0px #e7504d solid` 加上过效果，鼠标悬停后再设定底边宽度 `border-bottom-width: 4px`。
 - 使用 `img` 标签充当自适应背景时添加 `width: 100%;height: auto;`两项属性。
 - 四纵列利用平分的百分比宽度左浮动，百分比内边距。条形分割同样使用百分比的 `top` 来定位。另一种较好的解决方案是使用 Flex布局。
 - 消除下拉菜单默认样式 `-webkit-appearance: none;`并利用 `background` 组合属性来伪装成下拉按钮。
 - 固定宽度元素设置自适应背景图 `width: 100%;` `background-image: url('img');` `background-repeat: no-repeat;` `background-size: 100% auto;`


----------


## [任务八：响应式网格（栅格化）布局][30]

**任务描述**
>
>  - 需要实现如 [效果图][31] 所示，调整浏览器宽度查看响应式效果，效果图中的红色的文字是说明，不需要写在 HTML 中。

**任务注意事项**

>  - 网格布局的作用在于更有效地控制元素在网页中所占比例的大小。比如，博客中有一个留言板模块，在比较大的屏幕上，我们希望它占了右边 25% 的宽度，在手机等比较小的屏幕上，我们希望它占 100%
> 的宽度，出现在博客文章下方。网格布局是一种实现这一需求的办法，它的好处是，把所有的宽度分为固定栏数（常用 12
> 栏），从而更高效的控制元素宽度。而这功能，我们使用 HTML 和 CSS 就能实现了。
>  - 以 BootStrap 的网格系统为例，DOM 元素类名形如 col-md-4；其中 col 是“列” column 的缩写；md 是 medium 的缩写，适用于应屏幕宽度大于 768px 的场景；4 是占四栏的意思。因此，col-md-4 的意思是，在屏幕宽度大于
> 768px 时，该元素占四栏。


[Demo][32] | [Source][33]

**任务总结**

 - 最小列单元都是左浮动和均分的百分比宽度，并结合 `@media` 媒体查询对不同屏幕宽度的列宽度调节。
 - BootStrap Less 源码中有详细的栅格系统构造方法。

**参考资料**

>  - [BootStrap 官网：如果你没用过的话，至少了解一下它是做什么的][34]
>  - [Bootstrap grid examples：改变浏览器宽度，查看不同类名元素的表现，理解网格系统的作用。然后，通过“审查元素”查看对应
> CSS，思考这一系统是如何实现的][35]
>  - [BootStrap 带 offset 的网格系统][36]
>  - [Creating Your Own CSS Grid System：你可以先自己想想怎么实现，没有思路的话看看别人的做法][37]

----------




## [任务九：使用HTML/CSS实现一个复杂页面][38]

**任务描述**

>  - 通过HTML及CSS实现设计稿 设计稿PSD文件，效果如 [效果图][39]
>  - 整个页面内容宽度固定，但头部的蓝色导航和浏览器宽度保持一致
>  - [CSS Sprite 在线拼合][40]

**任务注意事项**

>  - 只需要完成HTML，CSS代码编写，不需要写JavaScript
>  - tab只需要实现样式，有能力余力的同学可以尝试实现不使用JavaScript的情况下，实现Tab切换
>  - 所有的下拉菜单（Select）均要求按照设计稿样式实现，下拉后的样式自定义，不需要实现下拉选择的功能，但样式要实现
>  - 在Chrome中完美实现与设计稿的除了文字以外的各项图片、字体、颜色、布局、内外边距等样式
>  - 有能力的同学可以尝试跨浏览器的兼容性
>  - 有能力的同学可以在实现一遍后尝试用less, sass或者stylus等再实现一次


[Demo][41] | [Source][42]

**任务总结**

 - 多元素复杂页面应注意 `margin` `padding` 之间的配合来布局。
 - 顶栏、侧边栏、导航栏均使用 `fixed` 布局，中间内容则给对应外边距。
 - 使用 `:focus` 实现鼠标焦点在搜索栏上其宽度变化的动画。
 - `i` 标签可用于设定文字前的 icon ，一般使用 CSS Sprite 的方式，利用 `background-position` 和宽高为背景图案定位。
 - 盒模型为 `box-sizing: border-box;` 状态下，`border` 和 `padding` 的设置都影响元素的宽高。
 - 善用 `::after` `::before` 伪对象能减少HTML内容来实现一些元素上的装饰（色块、线、点等）。
 - 结合 `input` `label` 使用锚点来制作纯CSS的标签页。
 - 多选菜单在火狐浏览器下还应 `-moz-appearance: none` 来消除默认样式。


----------

## [任务十：Flexbox 布局练习][43]

> **任务描述**
>
>  - 需要实现的效果如 [效果图][44] 所示，调整浏览器宽度查看响应式效果，红色的文字是说明，不需要写在 HTML 中。

**任务注意事项**

>  - 只需要完成HTML，CSS代码编写，不需要写JavaScript
>  - 屏幕宽度小于 640px 时，调整 Flexbox 的属性以实现第四个元素移动到最前面的效果，而不要改动第一个元素的边框颜色与高度实现效果图。
>  - 思考 Flexbox 布局和网格布局的异同，以及分别适用于什么样的场景。可以搜索一下别人的结论，不过要保持思辨的态度，不可直接接受别人的观点。
>  - HTML 及 CSS 代码结构清晰、规范


 [Demo][45] | [Source][46]

 **任务总结**

  - Flex 布局强而有力的布局方式，在很少代码量的情况下结合 `@media` 实现自适应的布局。
  - 加上浏览器前缀 `-webkit-` 。注意某些过时的浏览器仅支持旧版 Flexbox 语法。新版 Flexbox 在国内并未得到很高的支持度（移动设备上）。
  - `flex-flow` 是 `flex-direction` 和 `flex-wrap` 的结合属性，定义主轴的排列方向和换行方式。
  - 注意，设为 Flex 布局以后，子元素的 `float`、`clear` 和 `vertical-align` 属性将失效。

**参考资料**

>  - [Flexbox详解：了解 Flexbox 属性的含义][47]
>  - [图解 CSS3 Flexbox 属性：看完这两篇，对 Flexbox 的了解就够了，多实践一下，理解会更深刻][48]
>  - [Flexbox——快速布局神器][49]
>  - [使用 CSS 弹性盒][50]
>  - [MDN flex属性][51]


----------

## 任务十一：移动Web页面布局实践

**任务描述**

>  - 实现与 [设计图][52] 一致的移动端Web页面

**任务注意事项**

>  - 本任务只涉及 HTML 及 CSS
>  - 实现的页面和设计图在iOS Safari，微信，Android浏览器中均基本一致
>  - HTML 及 CSS 代码结构清晰、规范
>  - 尝试在适合的地方使用CSS 3中的flex布局 有能力的同学可以在实现一遍后尝试用less, sass或者stylus等再实现一次

[Demo][53] | [Source][54]

 **任务总结**

 - 引入 [flexible.js][55] 移动端自适应方案来处理不同屏幕下CSS像素与物理像素不对应的问题。CSS `rem` 单位相对于 `<html>` 根元素来做字体大小计算，手动或自动把 `px` 单位转成 `rem` ，字体依然使用 `px` 单位。
 - Flexible.js 会将设计稿宽度分成 100份，每10份为 `1rem`。`1rem` 为设计稿的1/10 宽度，也是 `html` 根元素的字体大小。（1000px的设计稿，1rem = 100px）
 - Flexible.js 对字体的自适应，用 CSS属性选择器来 `data-dpr` 判断属性值来适应高PPI的移动设备。

 - > 如无特殊情况，width/height/padding/margin都使用`rem`，border-width和font-size使用px —— 大漠

 - 对重复内容的行列使用 Flex布局能减少非常多的代码量。
 - 对 `wrapper` 进行 `max-width` 设定为 `100rem` 防止宽屏显示器下拉伸无法达到设计稿要求。

**参考资料**

>  - [MDN:手机网页开发][56]
>  - [MDN:在移动浏览器中使用viewport元标签控制布局][57]
>  - [移动前端开发和 Web 前端开发的区别是什么][58]
>  - [Alloyteam移动开发规范概述][59]
>  - [手机/移动前端开发需要注意的20个要点][60]
>  - [w3cplus响应式技术资源][61]
>  - [浅谈移动Web开发][62]
>  - [Alloyteam Mars][63]
>  - [移动WEB开发入门][64]
>  - [移动开发资源集合][65]
>  - [The Mobile Web Handbook][66]
>  - [MobileWeb 适配总结][67]
>  - [移动前端不得不了解的html5 head 头标签][68]


## 任务十二：学习CSS 3的新特性

**任务描述**

>  - 实现 [示例图][69] 中的几个例子
>  - 实现单双行列不同颜色，且前三行特殊表示的表格
>  - 实现正常状态和focus状态宽度不一致的input文本输入框，且鼠标焦点进入输入框时，宽度的变化以动画呈现
>  - 不使用JavaScript，实现一个Banner图轮流播放的效果，且点击右下角的1，2，3可以切换到对应Banner图片

**任务注意事项**

>  - 本任务只涉及 HTML 及 CSS
>  - HTML 及 CSS 代码结构清晰、规范
>  - 除了任务中的3个小任务，尽可能多地尝试 CSS 3 的其他新特性

[Demo][70] | [Source][71]

 **任务总结**

 - Banner 的实现是利用 锚点 `:target` 定位结合 `animation` 特性产生切换效果。
 - 注意表格内 `<table>` `<caption>` `<thead>` `<tbody>` 标签的语义化。

**参考资料**

- [《图解CSS3》][72]
- [W3School CSS3 教程][73]
- [MDN CSS 3][74]

  [1]: http://ife.baidu.com/
  [2]: http://ife.baidu.com/task/detail?taskId=3
  [3]: http://www.imagebam.com/image/aa2330499945866
  [4]: http://placehold.it
  [5]: http://misaka.im/phase_1/task_3/
  [6]: https://github.com/409915016/Baidu_IFE_2016Spring/tree/master/phase_1/task_3
  [7]: https://developer.mozilla.org/zh-CN/docs/Web/CSS/position
  [8]: https://developer.mozilla.org/en-US/docs/Web/CSS/float
  [9]: http://www.barelyfitz.com/screencast/html-training/css/positioning/
  [10]: http://zh.learnlayout.com/clearfix.html
  [11]: http://stackoverflow.com/questions/211383/which-method-of-clearfix-is-best
  [12]: http://ife.baidu.com/task/detail?taskId=4ing/tree/master/phase_1/task_3
  [13]: http://www.imagebam.com/image/a64d14500238981
  [14]: http://misaka.im/phase_1/task_4/
  [15]: https://github.com/409915016/Baidu_IFE_2016Spring/tree/master/phase_1/task_4
  [16]: http://www.w3cplus.com/css/advanced-html-css-lesson2-detailed-css-positioning.html
  [17]: https://css-tricks.com/centering-css-complete-guide/
  [18]: http://howtocenterincss.com/
  [19]: http://ife.baidu.com/task/detail?taskId=6
  [20]: http://www.imagebam.com/image/faaf1a500241027
  [21]: http://www.imagebam.com/image/e35eee500241029
  [22]: http://misaka.im/phase_1/task_6/dist/
  [23]: https://github.com/409915016/Baidu_IFE_2016Spring/tree/master/phase_1/task_6
  [24]: https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Introduction
  [25]: https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Getting_started
  [26]: http://ife.baidu.com/task/detail?taskId=7
  [27]: http://www.imagebam.com/image/90d801500241522
  [28]: http://misaka.im/phase_1/task_7/dist/
  [29]: https://github.com/409915016/Baidu_IFE_2016Spring/tree/master/phase_1/task_7
  [30]: http://ife.baidu.com/task/detail?taskId=8
  [31]: http://www.imagebam.com/image/2b231f500241705
  [32]: http://misaka.im/phase_1/task_8/dist/
  [33]: https://github.com/409915016/Baidu_IFE_2016Spring/tree/master/phase_1/task_8
  [34]: http://getbootstrap.com/
  [35]: https://getbootstrap.com/examples/grid/
  [36]: http://getbootstrap.com/2.3.2/scaffolding.html#gridSystem
  [37]: http://j4n.co/blog/Creating-your-own-css-grid-system
  [38]: http://ife.baidu.com/task/detail?taskId=9
  [39]: http://www.imagebam.com/image/7bd482500242008
  [40]: http://spritegen.website-performance.org/
  [41]: http://misaka.im/phase_1/task_9/dist/
  [42]: https://github.com/409915016/Baidu_IFE_2016Spring/tree/master/phase_1/task_9com/task/detail?taskId=9
  [43]: http://ife.baidu.com/task/detail?taskId=10
  [44]: http://www.imagebam.com/image/bf2a59500242194
  [45]: http://misaka.im/phase_1/task_10/
  [46]: https://github.com/409915016/Baidu_IFE_2016Spring/tree/master/phase_1/task_10
  [47]: https://segmentfault.com/a/1190000002910324
  [48]: https://web.tutorialonfree.com/tu-jie-css3-flexboxshu-xing/
  [49]: http://www.w3cplus.com/css3/flexbox-basics.html
  [50]: https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes
  [51]: https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex
  [52]: http://www.imagebam.com/image/b9fc43500388153
  [53]: http://misaka.im/phase_1/task_11/dist/
  [54]: https://github.com/amfe/lib-flexible
  [55]: https://developer.mozilla.org/zh-CN/docs/Web/Guide/Mobile
  [56]: https://developer.mozilla.org/zh-CN/docs/Web/Guide/Mobile
  [57]: https://developer.mozilla.org/zh-CN/docs/Mobile/Viewport_meta_tagzilla.org/zh-CN/docs/Web/Guide/Mobile
  [58]: https://www.zhihu.com/question/20269059
  [59]: http://alloyteam.github.io/Spirit/modules/Standard/
  [60]: http://sentsin.com/web/54.html
  [61]: http://www.w3cplus.com/responsive
  [62]: http://www.infoq.com/cn/articles/development-of-the-mobile-web-deep-concept
  [63]: https://github.com/AlloyTeam/Mars
  [64]: http://junmer.github.io/mobile-dev-get-started/
  [65]: https://github.com/jtyjty99999/mobileTech
  [66]: http://quirksmode.org/mobilewebhandbook/
  [67]: http://www.w3ctech.com/topic/979
  [68]: http://www.css88.com/archives/5480
  [69]: http://www.imagebam.com/image/17f00d500388155
  [70]: http://misaka.im/phase_1/task_12/dist/
  [71]: https://github.com/409915016/Baidu_IFE_2016Spring/tree/master/phase_1/task_12
  [72]: https://book.douban.com/subject/25920727/pring/tree/master/phase_1/task_12
  [73]: http://www.w3school.com.cn/css3/index.asp
  [74]: https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS3