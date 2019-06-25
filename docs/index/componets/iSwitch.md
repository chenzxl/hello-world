## switch
>开关选择器

## 基本用法
<myiSwitch></myiSwitch>

``` html
     <iSwitch v-model="falg"></iSwitch>
```

## 尺寸
>设置size为 lg 或 sm 使用大号和小号的开关,默认为sm


<myiSwitch size="lg" :showText="false"></myiSwitch>
<myiSwitch :showText="false"></myiSwitch>

``` html
     <iSwitch v-model="falg" size="lg"></iSwitch>
```

**文字** 设置falseText和trueText

<myiSwitch   falseText="关" trueText="开" :showText="false"></myiSwitch>

``` html
     <iSwitch v-model="falg" falseText="关" trueText="开" :showText="false"></iSwitch>
```


## 不可用

<myiSwitch   falseText="关" trueText="开" :showText="false" :disabled="true"></myiSwitch>

``` html
     <iSwitch v-model="falg" :disabled="true"></iSwitch>
```


***iSwitch props***
| 属性                 | 说明    | 默认值   |
|:---------------------|:-------|:-------|
| value    | 指定当前选中的项目数据。可以使用 v-model 双向绑定数据	String | Number | 无 |
| size    | 单选框的尺寸，可选值为 lg、sm或者不设置 | sm |
| true-value | 选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用 String, Number, Boolean类型|  |
| false-value | 选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用 String, Number, Boolean类型|  |
| true-text | 自定义显示找开时的内容|  |
| false-text | 自定义显示关闭的内容|  |

***iSwitch event***
| 事件                 | 说明    | 
|:---------------------|:-------|
| on-change	    | 在状态发生改变时触发，返回当前选中的项。通过修改外部的数据改变时不会触发, |
