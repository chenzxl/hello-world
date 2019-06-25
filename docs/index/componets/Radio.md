## Radio单选框
> radio单选框 基本组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。

基本使用使用RadioGroup实现一组互斥的选项组。在组合使用时，Radio 使用 label 来自动判断。每个 Radio 的内容可以自定义，如不填写则默认使用 label 的值。



<div id="radio-box">
    <!-- <myContainer> -->
        <RadioGroup v-model="phone">
            <Radio label="apple">
                <Icon type="add"></Icon>
                <span>Apple</span>
            </Radio>
            <Radio label="android">
                <Icon type="add"></Icon>
                <span>Android</span>
            </Radio>
            <Radio label="windows">
                <Icon type="add"></Icon>
                <span>Windows</span>
            </Radio>
        </RadioGroup>
    <!-- </myContainer> -->
</div>

```html
    <template>
        <RadioGroup v-model="phone">
            <Radio label="apple">
                <Icon type="add"></Icon>
                <span>Apple</span>
            </Radio>
            <Radio label="android">
                <Icon type="add"></Icon>
                <span>Android</span>
            </Radio>
            <Radio label="windows" :disabled="true">
                <Icon type="add"></Icon>
                <span>Windows</span>
            </Radio>
        </RadioGroup>
    </template>
  <script>
    import {Radio,RadioGroup} from './components/radio/radio';
    export default {
        name: 'myRadio',
        componets:{Radio,RadioGroup},
        data () {
            return {
            phone: 'android'
            }
        }
    }
 </script>
```

## 不可用 
> 通过设置disabled:true属性来禁用单选框。

<div>
    <RadioGroup v-model="phone">
        <Radio label="apple">
            <Icon type="add"></Icon>
            <span>Apple</span>
        </Radio>
        <Radio label="android">
            <Icon type="add"></Icon>
            <span>Android</span>
        </Radio>
        <Radio label="windows" :disabled="true">
            <Icon type="add"></Icon>
            <span>Windows</span>
        </Radio>
    </RadioGroup>
</div>

``` html
    <RadioGroup v-model="phone">
        <Radio label="apple">
            <Icon type="add"></Icon>
            <span>Apple</span>
        </Radio>
        <Radio label="android">
            <Icon type="add"></Icon>
            <span>Android</span>
        </Radio>
        <Radio label="windows" :disabled="true">
            <Icon type="add"></Icon>
            <span>Windows</span>
        </Radio>
    </RadioGroup>
```
## 设置垂直方向 
>设置属性 vertical 可以垂直显示.

<div>
 <RadioGroup v-model="phone" :vertical="true">
        <Radio label="apple">
            <Icon type="add"></Icon>
            <span>Apple</span>
        </Radio>
        <Radio label="android">
            <Icon type="add"></Icon>
            <span>Android</span>
        </Radio>
        <Radio label="windows">
            <Icon type="add" ></Icon>
            <span>Windows</span>
        </Radio>
    </RadioGroup>
    <RadioGroup v-model="phone" :vertical="true" type="button">
        <Radio label="apple">
            <Icon type="add"></Icon>
            <span>Apple</span>
        </Radio>
        <Radio label="android">
            <Icon type="add"></Icon>
            <span>Android</span>
        </Radio>
        <Radio label="windows">
            <Icon type="add" ></Icon>
            <span>Windows</span>
        </Radio>
    </RadioGroup>
</div>

``` html
    <RadioGroup v-model="phone" :vertical="true">
           ....
    </RadioGroup>
    button按钮类型
    <RadioGroup v-model="phone" :vertical="true" typpe="button">
           ....
    </RadioGroup>
```

## 设置按钮样式和大小
>设置属性type='button',即可以按钮组形式显示，设置size="lg",默认sm

<div  class="clearfix radio-box">
    <RadioGroup v-model="animal" type="button" size="lg">
        <Radio label="金斑蝶"></Radio>
        <Radio label="爪哇犀牛"></Radio>
        <Radio label="印度黑羚"></Radio>
    </RadioGroup>
</div>
<div class="clearfix mt5 radio-box">
    <RadioGroup v-model="animal" type="button">
        <Radio label="金斑蝶"></Radio>
        <Radio label="爪哇犀牛"></Radio>
        <Radio label="印度黑羚"></Radio>
    </RadioGroup>
</div>

``` html
    <RadioGroup v-model="phone"  type="button">
           ....
    </RadioGroup>

     <RadioGroup v-model="phone"  size="lg">
           ....
    </RadioGroup>
```

## API
>RadioGroup

| 属性                 | 说明    | 默认值   |
|:---------------------|:-------|:-------|
| value    | 指定当前选中的项目数据。可以使用 v-model 双向绑定数据	String | Number | 无 |
| size    | 单选框的尺寸，可选值为 lg、sm或者不设置 | sm |
| vertical    | 是否垂直排列，按钮样式下无效,Boolean | false |
| type    | 可选值为 button 或不填，为 button 时使用按钮样式 String|  |

>Radio

| 属性                 | 说明    | 默认值   |
|:---------------------|:-------|:-------|
| value    | 指定当前选中的项目数据。可以使用 v-model 双向绑定数据	String | Number | 无 |
| label    | 指定当前选项的 value 值 String |  | |
| disabled | 是否禁用当前项	 Boolean | false |
| true-value | 选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用 String, Number, Boolean类型|  |
| false-value | 选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用 String, Number, Boolean类型|  |


**RadioGroup events事件**
| 事件                 | 说明    | 
|:---------------------|:-------|
| on-change	    | 在选项状态发生改变时触发，返回当前选中的项。通过修改外部的数据改变时不会触发, |

<!-- ::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
::: -->