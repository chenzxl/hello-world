## grid
>栅格 沿用bootstarp 将区域分为12等分进行布局，

<div>
  <Row>
    <Col span="1">1</Col>
    <Col span="1">2</Col>
    <Col span="1">3</Col>
    <Col span="1">4</Col>
    <Col span="1">5</Col>
    <Col span="1">6</Col>
    <Col span="1">7</Col>
    <Col span="1">8</Col>
    <Col span="1">9</Col>
    <Col span="1">10</Col>
    <Col span="1">11</Col>
    <Col span="1">12</Col>
  </Row>
  <Row>
    <Col span="4">4</Col>
    <Col span="8">8</Col>
  </Row>
  <Row>
    <Col span="6">6</Col>
    <Col span="6">6</Col>
  </Row>
  <Row>
    <Col span="3">col-3</Col>
    <Col span="3">col-3</Col>
    <Col span="3" offset="3">col-3 offset-3</Col>
  </Row>
</div>

```html
  <Row>
    <Col span="1">1</Col>
    <Col span="1">2</Col>
    <Col span="1">3</Col>
    <Col span="1">4</Col>
    <Col span="1">5</Col>
    <Col span="1">6</Col>
    <Col span="1">7</Col>
    <Col span="1">8</Col>
    <Col span="1">9</Col>
    <Col span="1">10</Col>
    <Col span="1">11</Col>
    <Col span="1">12</Col>
  </Row>
  <Row>
    <Col span="4">4</Col>
    <Col span="8">8</Col>
  </Row>
  <Row>
    <Col span="6">6</Col>
    <Col span="6">6</Col>
  </Row>
  <Row>
    <Col span="3">col-3</Col>
    <Col span="3">col-3</Col>
    <Col span="3" offset="3">col-3 offset-3</Col>
  </Row>
```


## 使用flex
>Row组件有对fflex的css相关参数进行了封装


***Row***
| 属性                 | 说明    | 值   |
|:---------------------|:-------|:-------|
| type | 决定是否'flex'或'grid'| 默认为grid,grid时除className以下参数无效 |
| direction | 属性决定主轴的方向（即项目的排列方向）。| row目前仅支持水平 |
| wrap | 是否换行| nowrap（默认）：不换行，wrap：换行，第一行在上方。wrap-reverse：换行，第一行在下方。 |
| align | 定义项目在交叉轴上如何对齐| flex-start  flex-end  center  baseline  stretch; |
| justify | 定义了项目在主轴上的对齐方式。| flex-start  flex-end  center  space-between  space-around |
| className | 添加class名| classNameD |

***Col***


| 属性                 | 说明    | 值   |
|:---------------------|:-------|:-------|
| size | 栅格布局，请参见boostartp栅格参数不同尺寸 | 'xs','sm','md','lg' |
| span | 列数 | 数字或字符数字 type为flex时，属性为flex值|
| offset | 偏移 | 数字或字符数字 |
| order | 定义项目的排列顺序。数值越小，排列越靠前，默认为0。 | Number,String |
| flex | 栅格布局，请参见boostartp栅格参数不同尺寸 | 'xs','sm','md','lg' |
| basis | 栅格布局，请参见boostartp栅格参数不同尺寸 | 'xs','sm','md','lg' |
| align | 定义子项目在交叉轴上如何对齐| flex-start  flex-end  center  baseline  stretch; |

<!-- <Icon type="ion-ionic"></Icon>
<Icon type="ion-ionic" size="20" color="red"></Icon>
<Icon type="ion-ionic" color="#cccc"></Icon>



```html
  <Icon type="ion-ionic"></Icon>
  <Icon type="ion-ionic" size="20" color="red"></Icon>
  <Icon type="ion-ionic" color="#cccc"></Icon>
```

<table class="ifast-table bordered">
    <thead>
      <tr>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>type</td>
        <td>图标的名称</td>
        <td>String</td>
        <td>无</td>
      </tr>
      <tr>
        <td>size</td>
        <td>图标的大小，单位是px</td>
        <td>Number  String</td>
        <td>无</td>
      </tr>
      <tr>
        <td>color</td>
        <td>图标的颜色</td>
        <td>String</td>
        <td>无</td>
      </tr>
    </tbody>
  </table>
<iframe src="https://chenzxl.github.io/ifastIconDome/index.html" style="width:722px;height:500px;border:0px;p"></iframe> -->