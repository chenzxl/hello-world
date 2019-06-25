## 简要
>Fast css是仿bootstrap的样式进行编写的，如果需要使用原生标签，编写CSS样式，请参考以下文档资料，如不需要请略过

<!-- | IE        | Edge           | Firefox  | Chrome  | Safari  | Opera  |
| ------------- |:-------------:| -----:|-----:|-----:|-----:|
| 8     | ✓ | ✓ | ✓ | ✓ | ✓ | -->
<div>
  <table class="ifast-table bordered">
    <thead>
      <tr>
        <th>IE</th>
        <th>Edge</th>
        <th>Firefox</th>
        <th>Chrome</th>
        <th>Safari</th>
        <th>Opera</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>8</td>
        <td>✓</td>
        <td>✓</td>
        <td>✓</td>
        <td>✓</td>
        <td>✓</td>
      </tr>
    </tbody>
  </table>
</div>

## 栅格系统
> 栅格系统用于通过一系列的行（row）与列（column）的组合来创建页面布局

`ifast-row` 行
`ifast-col` 列 最大12列 ,sm,md,lg三种

**支持不同屏幕试配**
```css
  /* 超小屏幕（手机，小于 768px） */
  /* 没有任何媒体查询相关的代码 */

  /* 小屏幕（平板，大于等于 768px） */
  @media (min-width: @screen-sm-min) { ... }

  /* 中等屏幕（桌面显示器，大于等于 992px） */
  @media (min-width: @screen-md-min) { ... }

  /* 大屏幕（大桌面显示器，大于等于 1200px） */
  @media (min-width: @screen-lg-min) { ... }
```

<div class="ifast-row">
  <div class="ifast-col-md-6">.ifast-col-md-6</div>
  <div class="ifast-col-md-6">.ifast-col-md-6</div>
</div>

<div class="ifast-row">
  <div class="ifast-col-md-1">.ifast-col-md-1</div>
  <div class="ifast-col-md-1">.ifast-col-md-1</div>
  <div class="ifast-col-md-1">.ifast-col-md-1</div>
  <div class="ifast-col-md-1">.ifast-col-md-1</div>
  <div class="ifast-col-md-1">.ifast-col-md-1</div>
  <div class="ifast-col-md-1">.ifast-col-md-1</div>
  <div class="ifast-col-md-1">.ifast-col-md-1</div>
  <div class="ifast-col-md-1">.ifast-col-md-1</div>
  <div class="ifast-col-md-1">.ifast-col-md-1</div>
  <div class="ifast-col-md-1">.ifast-col-md-1</div>
  <div class="ifast-col-md-1">.ifast-col-md-1</div>
  <div class="ifast-col-md-1">.ifast-col-md-1</div>
</div>
<div class="ifast-row">
  <div class="ifast-col-md-2">.ifast-col-md-2</div>
  <div class="ifast-col-md-10">.ifast-col-md-10</div>
</div>

```html
  <div class="ifast-row">
  <div class="ifast-col-md-6">.ifast-col-md-6</div>
  <div class="ifast-col-md-6">.ifast-col-md-6</div>
</div>

<div class="ifast-row">
  <div class="ifast-col-md-1">.ifast-col-md-1</div>
  <div class="ifast-col-md-1">.ifast-col-md-1</div>
  <div class="ifast-col-md-1">.ifast-col-md-1</div>
  <div class="ifast-col-md-1">.ifast-col-md-1</div>
  <div class="ifast-col-md-1">.ifast-col-md-1</div>
  <div class="ifast-col-md-1">.ifast-col-md-1</div>
  <div class="ifast-col-md-1">.ifast-col-md-1</div>
  <div class="ifast-col-md-1">.ifast-col-md-1</div>
  <div class="ifast-col-md-1">.ifast-col-md-1</div>
  <div class="ifast-col-md-1">.ifast-col-md-1</div>
  <div class="ifast-col-md-1">.ifast-col-md-1</div>
  <div class="ifast-col-md-1">.ifast-col-md-1</div>
</div>
<div class="ifast-row">
  <div class="ifast-col-md-2">.ifast-col-md-2</div>
  <div class="ifast-col-md-10">.ifast-col-md-10</div>
</div>
```
**列偏移**
<div class="ifast-row">
  <div class="ifast-col-md-2">.ifast-col-md-2</div>
  <div class="ifast-col-md-8 ifast-col-md-offset-2">.ifast-col-md-8,ifast-col-md-offset-2</div>
</div>
<div class="ifast-row">
  <div class="ifast-col-md-3 ifast-col-md-offset-3">.ifast-col-md-3 ifast-col-md-offset-3</div>
  <div class="ifast-col-md-3 ifast-col-md-offset-3">.ifast-col-md-3 ifast-col-md-offset-3</div>
</div>
```html
<div class="ifast-row">
  <div class="ifast-col-md-2">.ifast-col-md-2</div>
  <div class="ifast-col-md-8 ifast-col-md-offset-2">.ifast-col-md-8,ifast-col-md-offset-2</div>
</div>
<div class="ifast-row">
  <div class="ifast-col-md-3 ifast-col-md-offset-3">.ifast-col-md-3 ifast-col-md-offset-3</div>
  <div class="ifast-col-md-3 ifast-col-md-offset-3">.ifast-col-md-3 ifast-col-md-offset-3</div>
</div>
```

## 标题
>在标题内还可以包含 small 标签或赋予 .small 类的元素，可以用来标记副标题。

<h1>h1. iFast heading<small>Secondary text</small></h1>
<h2>h2. iFast heading</h2>
<h3>h3. iFast heading</h3>
<h4>h4. iFast heading</h4>
<h5>h5. iFast heading</h5>
<h6>h6. iFast heading</h6>

``` html
<!-- 标题  small-->
<h1>h1. iFast heading<small>Secondary text</small></h1>
<h2>h2. iFast heading</h2>
<h3>h3. iFast heading</h3>
<h4>h4. iFast heading</h4>
<h5>h5. iFast heading</h5>
<h6>h6. iFast heading</h6>
``` 

## 表格


**标准类型**

<table class="ifast-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Registration Date</th>
      <th>E-mail address</th>
      <th>Premium Plan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nicky Almera</td>
      <td>September 14, 2013</td>
      <td>nicky@hotmail.com</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Edmund Wong</td>
      <td>January 11, 2014</td>
      <td>edmund@yahoo.com</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Harvinder Singh</td>
      <td>May 11, 2014</td>
      <td>harvinder@gmail.com</td>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

``` html
<table class="ifast-table">
  .....
</table>
``` 

**hover类**

<table class="ifast-table hover">
  <thead>
    <tr>
      <th>Name</th>
      <th>Registration Date</th>
      <th>E-mail address</th>
      <th>Premium Plan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nicky Almera</td>
      <td>September 14, 2013</td>
      <td>nicky@hotmail.com</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Edmund Wong</td>
      <td>January 11, 2014</td>
      <td>edmund@yahoo.com</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Harvinder Singh</td>
      <td>May 11, 2014</td>
      <td>harvinder@gmail.com</td>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

``` html
hover 类
<table class="ifast-table">
  .....
</table>
``` 
**紧缩类**

<table class="ifast-table striped">
  <thead>
    <tr>
      <th>Name</th>
      <th>Registration Date</th>
      <th>E-mail address</th>
      <th>Premium Plan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nicky Almera</td>
      <td>September 14, 2013</td>
      <td>nicky@hotmail.com</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Edmund Wong</td>
      <td>January 11, 2014</td>
      <td>edmund@yahoo.com</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Harvinder Singh</td>
      <td>May 11, 2014</td>
      <td>harvinder@gmail.com</td>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

``` html
//条纹类
<table class="ifast-table striped">
  .....
</table>
``` 
**紧缩类**

<table class="ifast-table ifast--condensed">
  <thead>
    <tr>
      <th>Name</th>
      <th>Registration Date</th>
      <th>E-mail address</th>
      <th>Premium Plan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nicky Almera</td>
      <td>September 14, 2013</td>
      <td>nicky@hotmail.com</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Edmund Wong</td>
      <td>January 11, 2014</td>
      <td>edmund@yahoo.com</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Harvinder Singh</td>
      <td>May 11, 2014</td>
      <td>harvinder@gmail.com</td>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

``` html
紧缩类
<table class="ifast-table ifast--condensed">
  .....
</table>
``` 

**带边框**

<table class="ifast-table bordered">
  <thead>
    <tr>
      <th>Name</th>
      <th>Registration Date</th>
      <th>E-mail address</th>
      <th>Premium Plan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nicky Almera</td>
      <td>September 14, 2013</td>
      <td>nicky@hotmail.com</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Edmund Wong</td>
      <td>January 11, 2014</td>
      <td>edmund@yahoo.com</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Harvinder Singh</td>
      <td>May 11, 2014</td>
      <td>harvinder@gmail.com</td>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

``` html
紧缩类
<table class="ifast-table bordered">
  .....
</table>

``` 

## 按钮
>可作为按钮使用的标签或元素a、button 或 input 元素添加按钮类（button class）即可使用 iFast 提供的样式

  <a class="ifast-btn ifast-btn-default" href="javaScript:;" role="button">Link</a>
  <button class="ifast-btn ifast-btn-default" type="submit">Button</button>
  <input class="ifast-btn ifast-btn-default" type="button" value="Input">
  <input class="ifast-btn ifast-btn-default" type="submit" value="Submit">

  ``` html
  <a class="ifast-btn ifast-btn-default" href="javaScript:;" role="button">Link</a>
  <button class="ifast-btn ifast-btn-default" type="submit">Button</button>
  <input class="ifast-btn ifast-btn-default" type="button" value="Input">
  <input class="ifast-btn ifast-btn-default" type="submit" value="Submit">

``` 

**预订样式**

<!-- Standard button -->
<button type="button" class="ifast-btn ifast-btn-default">（默认样式）Default</button>
<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
<button type="button" class="ifast-btn ifast-btn-primary">（首选项）Primary</button>
<!-- Indicates a successful or positive action -->
<button type="button" class="ifast-btn ifast-btn-success">（成功）Success</button>
<!-- Contextual button for informational alert messages -->
<button type="button" class="ifast-btn ifast-btn-info">（一般信息）Info</button>
<!-- Indicates caution should be taken with this action -->
<button type="button" class="ifast-btn ifast-btn-warning">（警告）Warning</button>
<!-- Indicates a dangerous or potentially negative action -->
<button type="button" class="ifast-btn ifast-btn-danger">（危险）Danger</button>
<!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
<button type="button" class="ifast-btn ifast-btn-link">（链接）Link</button>


``` html
  <!-- Standard button -->
  <button type="button" class="ifast-btn ifast-btn-default">（默认样式）Default</button>
  <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
  <button type="button" class="ifast-btn ifast-btn-primary">（首选项）Primary</button>
  <!-- Indicates a successful or positive action -->
  <button type="button" class="ifast-btn ifast-btn-success">（成功）Success</button>
  <!-- Contextual button for informational alert messages -->
  <button type="button" class="ifast-btn ifast-btn-info">（一般信息）Info</button>
  <!-- Indicates caution should be taken with this action -->
  <button type="button" class="ifast-btn ifast-btn-warning">（警告）Warning</button>
  <!-- Indicates a dangerous or potentially negative action -->
  <button type="button" class="ifast-btn ifast-btn-danger">（危险）Danger</button>
  <!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
  <button type="button" class="ifast-btn ifast-btn-link">（链接）Link</button>  

``` 
**尺寸**

<div class="mt5">
  <button type="button" class="ifast-btn ifast-btn-primary ifast-btn-lg">（大按钮）Large button</button>
  <button type="button" class="ifast-btn ifast-btn-default ifast-btn-lg">（大按钮）Large button</button>
</div>
<div class="mt5">
  <button type="button" class="ifast-btn ifast-btn-primary">（默认尺寸）Default button</button>
  <button type="button" class="ifast-btn ifast-btn-default">（默认尺寸）Default button</button>
</div>
<div class="mt5">
  <button type="button" class="ifast-btn ifast-btn-primary ifast-btn-sm">（小按钮）Small button</button>
  <button type="button" class="ifast-btn ifast-btn-default ifast-btn-sm">（小按钮）Small button</button>
</div>
<div class="mt5">
  <button type="button" class="ifast-btn ifast-btn-primary ifast-btn-xs">（超小尺寸）Extra small button</button>
  <button type="button" class="ifast-btn ifast-btn-default ifast-btn-xs">（超小尺寸）Extra small button</button>
</div>


``` html
  <p>
    <button type="button" class="ifast-btn ifast-btn-primary ifast-btn-lg">（大按钮）Large button</button>
    <button type="button" class="ifast-btn ifast-btn-default ifast-btn-lg">（大按钮）Large button</button>
  </p>
  <p>
    <button type="button" class="ifast-btn ifast-btn-primary">（默认尺寸）Default button</button>
    <button type="button" class="ifast-btn ifast-btn-default">（默认尺寸）Default button</button>
  </p>
  <p>
    <button type="button" class="ifast-btn ifast-btn-primary ifast-btn-sm">（小按钮）Small button</button>
    <button type="button" class="ifast-btn ifast-btn-default ifast-btn-sm">（小按钮）Small button</button>
  </p>
  <p>
    <button type="button" class="ifast-btn ifast-btn-primary ifast-btn-xs">（超小尺寸）Extra small button</button>
    <button type="button" class="ifast-btn ifast-btn-default ifast-btn-xs">（超小尺寸）Extra small button</button>
  </p>

``` 

**禁用状态**
>第一种：为 button 元素添加 disabled 属性，使其表现出禁用状态,第二种：通过为按钮的背景设置 opacity 属性就可以呈现出无法点击的效果。

<a href="javaScript:;" class="ifast-btn ifast-btn-primary ifast-btn-lg ifast-btn-disabled" style="color:#fff" role="button">disabled link</a>

<button type="button" class="ifast-btn ifast-btn-primary ifast-btn-xs" disabled="disabled">disabled button</button>


``` html
  <a href="#" class="ifast-btn ifast-btn-primary ifast-btn-lg ifast-btn-disabled" style="color:#fff" role="button">disabled link</a>
  <button type="button" class="ifast-btn ifast-btn-primary ifast-btn-xs" disabled="disabled">disabled button</button>
``` 

**不同种类开的样式**
>第一种：为 button 元素添加 disabled 属性，使其表现出禁用状态,第二种：通过为按钮的背景设置 opacity 属性就可以呈现出无法点击的效果。

<button type="button" class="ifast-btn ifast-btn-primary ifast-btn-sm outline">button</button>
<button type="button" class="ifast-btn ifast-btn-default ifast-btn-sm outline">button</button>
<button type="button" class="ifast-btn ifast-btn-info ifast-btn-sm outline">button</button>
<button type="button" class="ifast-btn ifast-btn-success ifast-btn-sm outline">button</button>
<div>
  <button type="button" class="ifast-btn ifast-btn-primary ifast-btn-sm">button</button>
  <button type="button" class="ifast-btn ifast-btn-default ifast-btn-sm">button</button>
  <button type="button" class="ifast-btn ifast-btn-info ifast-btn-sm">button</button>
  <button type="button" class="ifast-btn ifast-btn-success ifast-btn-sm">button</button>
</div>
<div class="mt5">
  <button type="button" class="ifast-btn ifast-btn-primary ifast-btn-sm pill">1</button>
  <button type="button" class="ifast-btn ifast-btn-default ifast-btn-sm pill">2</button>
  <button type="button" class="ifast-btn ifast-btn-info ifast-btn-sm pill">3</button>
  <button type="button" class="ifast-btn ifast-btn-success ifast-btn-sm pill">4</button>
</div>

<div>
、 <button type="button" class="ifast-btn ifast-btn-primary ifast-btn-sm ifast-btn-block mt5">button</button>
  <button type="button" class="ifast-btn ifast-btn-default ifast-btn-sm ifast-btn-block mt5">button</button>
  <button type="button" class="ifast-btn ifast-btn-info ifast-btn-sm ifast-btn-block mt5">button</button>
  <button type="button" class="ifast-btn ifast-btn-success ifast-btn-sm ifast-btn-block mt5">button</button>
</div>

``` html

  线型按钮
  <button type="button" class="ifast-btn ifast-btn-primary ifast-btn-sm outline">button</button>
  <button type="button" class="ifast-btn ifast-btn-default ifast-btn-sm outline">button</button>
  <button type="button" class="ifast-btn ifast-btn-info ifast-btn-sm outline">button</button>
  <button type="button" class="ifast-btn ifast-btn-success ifast-btn-sm outline">button</button>
  普通按钮
  <button type="button" class="ifast-btn ifast-btn-primary ifast-btn-sm">button</button>
  <button type="button" class="ifast-btn ifast-btn-default ifast-btn-sm">button</button>
  <button type="button" class="ifast-btn ifast-btn-info ifast-btn-sm">button</button>
  <button type="button" class="ifast-btn ifast-btn-success ifast-btn-sm">button</button>
  圆形按钮
  <button type="button" class="ifast-btn ifast-btn-primary ifast-btn-sm pill">1</button>
  <button type="button" class="ifast-btn ifast-btn-default ifast-btn-sm pill">2</button>
  <button type="button" class="ifast-btn ifast-btn-info ifast-btn-sm pill">3</button>
  <button type="button" class="ifast-btn ifast-btn-success ifast-btn-sm pill">4</button>
  长按钮
  <button type="button" class="ifast-btn ifast-btn-primary ifast-btn-sm ifast-btn-block">button</button>
  <button type="button" class="ifast-btn ifast-btn-default ifast-btn-sm ifast-btn-block">button</button>
  <button type="button" class="ifast-btn ifast-btn-info ifast-btn-sm ifast-btn-block">button</button>
  <button type="button" class="ifast-btn ifast-btn-success ifast-btn-sm ifast-btn-block">button</button>
``` 
## 按钮组

**水平排列**
 <div class="ifast-btns mt5">
    <button type="button" class="ifast-btn ifast-btn-primary ifast-btn-sm">button</button>
    <button type="button" class="ifast-btn ifast-btn-default ifast-btn-sm">button</button>
    <button type="button" class="ifast-btn ifast-btn-info ifast-btn-sm">button</button>
    <button type="button" class="ifast-btn ifast-btn-success ifast-btn-sm">button</button>
</div> 

``` html

   <div class="ifast-btns mt5">
      <button type="button" class="ifast-btn ifast-btn-primary ifast-btn-sm">button</button>
      <button type="button" class="ifast-btn ifast-btn-default ifast-btn-sm">button</button>
      <button type="button" class="ifast-btn ifast-btn-info ifast-btn-sm">button</button>
      <button type="button" class="ifast-btn ifast-btn-success ifast-btn-sm">button</button>
  </div> 
``` 

**重直排列**
 <div class="ifast-btns vertical mt5">
    <button type="button" class="ifast-btn ifast-btn-primary ifast-btn-sm">button</button>
    <button type="button" class="ifast-btn ifast-btn-default ifast-btn-sm">button</button>
    <button type="button" class="ifast-btn ifast-btn-info ifast-btn-sm">button</button>
    <button type="button" class="ifast-btn ifast-btn-success ifast-btn-sm">button</button>
</div> 

``` html

   <div class="ifast-btns vertical">
      <button type="button" class="ifast-btn ifast-btn-primary ifast-btn-sm">button</button>
      <button type="button" class="ifast-btn ifast-btn-default ifast-btn-sm">button</button>
      <button type="button" class="ifast-btn ifast-btn-info ifast-btn-sm">button</button>
      <button type="button" class="ifast-btn ifast-btn-success ifast-btn-sm">button</button>
  </div> 
``` 

### 辅助类

| class名称            | 说明    |
|:---------------------|:-------|
| `.w10,w20,w30,...w100`     | w10,w20,w30,...w100分别为10px,20px,30px ,...100px |
| `.w10p,w20p,w30p,...w100p` | w10p,w20p,w30p,...w100p分别为10%,20%,30%,...100%  |
| `text-center`              | 居中 |
| `float-left，float-right`  | 左，右浮动 |
| `clearfix`              　　| 清除浮动 |
| `p5,p10,p15,p20,p25,p30`   | padding:5,10,15,20,25,30px; |
| `pl5,pl10,pl15,pl20,pl25,pl30`   | padding-left:5,10,15,20,25,30px;(top,botton,left,right,同理) |
| `m5,m10,m15,m20,m25,m30`   | marigin:5,10,15,20,25,30px; |
| `ml5,ml10,ml15,ml20,ml25,ml30`   | marigin-left:5,10,15,20,25,30px;(top,botton,left,right,同理) | 
| `f12,f14,f16,f18,f20,f22,f24,f30,f36,f48`   | 字体大小 | 
| `fb,fn`   | 字体加粗、不加粗 | 


## 输入框

**尺寸**

>input-sm 小号 input-lg 大号 默认中号

<input type="text" class="form-control input-sm"/>
<input type="text" class="form-control mt5" />
<input type="text" class="form-control input-lg mt5"   />


``` html
  <input type="text" class="form-control input-sm"/>
  <input type="text" class="form-control"/>
  <input type="text" class="form-control input-lg"/>
``` 