原生js简单轮播图
==========================
轮播原理
-----------
一系列相等的图片平铺(float:left)，利用css布局只显示一张图片(overflow: hidden)，其余的隐藏。使用偏移量(left:-967px)来显示不同的图片。


###Html布局

conttainer存放所有内容，子容器list存放图片，子容器buttons存放小圆点。

```html
	<div id="container">
		<div id="list" style="left: 0px;">
			<img src="images/a1.jpg" alt="">
			<img src="images/a2.jpg" alt="">
			<img src="images/a3.jpg" alt="">
			<img src="images/a4.jpg" alt="">
			<img src="images/a5.jpg" alt="">
		</div>
		<div id="buttons">
			<span index="1" class="on"></span>
			<span index="2"></span>
			<span index="3"></span>
			<span index="4"></span>
			<span index="5"></span>
		</div>
		<a id="prev" class="arrow">&lt;</a>
        <a id="next" class="arrow">&gt;</a>
	</div>
```
`这时候你看到的页面效果应该缺少：container局部显示、图片做浮动、span和左右箭头都未显示在图片上`
`之所以将left属性设置在style.css之外，是为了list.style.left能获取到值`

####css修饰
涉及到：绝对和相对定位、overflow:hidden、z-index:[num]设置置顶
```css

*{
	margin: 0;
	padding: 0;
	text-decoration: none;
}
body{
	padding: 20px;
}
#container{
	position: relative;
    width: 967px;
    height: 330px;
    overflow: hidden;
    border:3px solid #333;
}
#list{
	position: absolute;
	z-index: 1;
	width: 6769px;
	height: 400px;
}
#list img{
	float: left;
	width: 967px;
	height: 400px;
}
#buttons{
	position: absolute;
	left: 850px;
	z-index: 2;
	bottom: 5px;
	height: 20px;
	width: 90px;
}
#buttons span{
	float: left;
	margin: 2.5px;
	width: 10px;
	height: 10px;
	border: 1px solid #fff;
	border-radius: 50%;
	background: #333;
	cursor: pointer;
}
#buttons .on{
	background:orangered;
}
.arrow{
	position:absolute;
	z-index: 2;
	top: 125px;
	font-size: 36px;
	color: #fff;
	background-color: RGBA(0, 0, 0, 0.3);
	cursor: pointer;
	text-align: center;
	line-height: 40px;
	font-weight: bold;
	width: 40px;
	height: 46px;
	display: none;
}
.arrow:hover{
	background-color: RGBA(0, 0, 0, .7);
}
#container:hover .arrow{
	display: block;
}
#prev{
	left: 20px;
}
#next{
	right: 20px;
}
```


??箭头的位置计算为什么不是一半？
span的左边浮动怎么取消？
