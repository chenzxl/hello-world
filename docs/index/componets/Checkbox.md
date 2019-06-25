## Checkbox复选框
>  基本组件-复选框。主要用于一组多项项选择。

**单独使用**
<div>
    <Checkbox label="twitter">
            <Icon type="logo-twitter"></Icon>
            <span>Twitter</span>
        </Checkbox>
</div>

```html
    <Checkbox label="twitter">
        <Icon type="logo-twitter"></Icon>
        <span>Twitter</span>
    </Checkbox>
```

基本使用使用CheckboxGroup实现一组互斥的选项组。在组合使用时，Checkbox 使用 label 来自动判断。每个 Checkbox 的内容可以自定义，如不填写则默认使用 label 的值。



<div class="check-box">
    <CheckboxGroup v-model="social" >
        <Checkbox label="twitter">
            <Icon type="logo-twitter"></Icon>
            <span>Twitter</span>
        </Checkbox>
        <Checkbox label="facebook">
            <Icon type="logo-facebook"></Icon>
            <span>Facebook</span>
        </Checkbox>
        <Checkbox label="github">
            <Icon type="logo-github"></Icon>
            <span>Github</span>
        </Checkbox>
        <Checkbox label="snapchat">
            <Icon type="logo-snapchat"></Icon>
            <span>Snapchat</span>
        </Checkbox>
    </CheckboxGroup>
</div>

```html
    <template>
         <CheckboxGroup v-model="social" >
            <Checkbox label="twitter">
                <Icon type="logo-twitter"></Icon>
                <span>Twitter</span>
            </Checkbox>
            <Checkbox label="facebook">
                <Icon type="logo-facebook"></Icon>
                <span>Facebook</span>
            </Checkbox>
            <Checkbox label="github">
                <Icon type="logo-github"></Icon>
                <span>Github</span>
            </Checkbox>
            <Checkbox label="snapchat">
                <Icon type="logo-snapchat"></Icon>
                <span>Snapchat</span>
            </Checkbox>
        </CheckboxGroup>
    </template>
  <script>
    import {RadioGroup,Checkbox} from './components/radio/radio';
    export default {
        name: 'myRadio',
        componets:{RadioGroup,Checkbox},
        data () {
            return {
                social: 'android'
            }
        }
    }
 </script>
```

## 不可用 
> 通过设置disabled:true属性来禁用单选框。

<div>
   <CheckboxGroup v-model="social" >
        <Checkbox label="twitter" :disabled="true">
            <Icon type="logo-twitter"></Icon>
            <span>Twitter</span>
        </Checkbox>
        <Checkbox label="facebook">
            <Icon type="logo-facebook"></Icon>
            <span>Facebook</span>
        </Checkbox>
        <Checkbox label="github">
            <Icon type="logo-github"></Icon>
            <span>Github</span>
        </Checkbox>
        <Checkbox label="snapchat">
            <Icon type="logo-snapchat"></Icon>
            <span>Snapchat</span>
        </Checkbox>
    </CheckboxGroup>
</div>

``` html
   <CheckboxGroup v-model="social" >
        <Checkbox label="twitter" :disabled="true">
            <Icon type="logo-twitter"></Icon>
            <span>Twitter</span>
        </Checkbox>
        <Checkbox label="facebook">
            <Icon type="logo-facebook"></Icon>
            <span>Facebook</span>
        </Checkbox>
        <Checkbox label="github">
            <Icon type="logo-github"></Icon>
            <span>Github</span>
        </Checkbox>
        <Checkbox label="snapchat">
            <Icon type="logo-snapchat"></Icon>
            <span>Snapchat</span>
        </Checkbox>
    </CheckboxGroup>
```

## 设置按钮样式和大小
>设置属性type='button',即可以按钮组形式显示，设置size="lg",默认sm

<div  class="clearfix checkbox-box" >
   <CheckboxGroup v-model="social" type="button" size="lg">
        <Checkbox label="twitter" :disabled="true">
            <Icon type="logo-twitter"></Icon>
            <span>Twitter</span>
        </Checkbox>
        <Checkbox label="facebook">
            <Icon type="logo-facebook"></Icon>
            <span>Facebook</span>
        </Checkbox>
        <Checkbox label="github">
            <Icon type="logo-github"></Icon>
            <span>Github</span>
        </Checkbox>
        <Checkbox label="snapchat">
            <Icon type="logo-snapchat"></Icon>
            <span>Snapchat</span>
        </Checkbox>
    </CheckboxGroup>
</div>
<div class="clearfix mt5 checkbox-box">
    <CheckboxGroup v-model="social" type="button">
        <Checkbox label="twitter" :disabled="true">
            <Icon type="logo-twitter"></Icon>
            <span>Twitter</span>
        </Checkbox>
        <Checkbox label="facebook">
            <Icon type="logo-facebook"></Icon>
            <span>Facebook</span>
        </Checkbox>
        <Checkbox label="github">
            <Icon type="logo-github"></Icon>
            <span>Github</span>
        </Checkbox>
        <Checkbox label="snapchat">
            <Icon type="logo-snapchat"></Icon>
            <span>Snapchat</span>
        </Checkbox>
    </CheckboxGroup>
</div>

``` html
     <CheckboxGroup v-model="phone"  size="lg">
           ....
    </CheckboxGroup>

     <CheckboxGroup v-model="phone"  type="button">
           ....
    </CheckboxGroup>
```

## API
>CheckboxGroup

| 属性                 | 说明    | 默认值   |
|:---------------------|:-------|:-------|
| value    | 指定当前选中的项目数据。可以使用 v-model 双向绑定数据	String | Number | 无 |
| size    | 单选框的尺寸，可选值为 lg、sm或者不设置 | sm |
| type    | 可选值为 button 或不填，为 button 时使用按钮样式 String|  |

>Checkbox

| 属性                 | 说明    | 默认值   |
|:---------------------|:-------|:-------|
| value    | 指定当前选中的项目数据。可以使用 v-model 双向绑定数据	String | Number | 无 |
| label    | 指定当前选项的 value 值 String |  | |
| disabled | 是否禁用当前项	 Boolean | false |
| true-value | 选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用 String, Number, Boolean类型|  |
| false-value | 选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用 String, Number, Boolean类型|  |

**CheckboxGroup events事件**
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