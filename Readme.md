原生js简单轮播图
==========================
轮播原理
-----------
一系列相等的图片平铺(float:left)，利用css布局只显示一张图片(overflow: hidden)，其余的隐藏。使用偏移量(left:-967px)来显示不同的图片。


####Html布局

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