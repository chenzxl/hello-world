## Carousel
>走马灯  常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。

## 基本用法
<div>
     <Carousel  :height="100" >
          <CarouselItem>
            <div class="demo-carousel">1</div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">2</div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">3</div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">4</div>
          </CarouselItem>
      </Carousel>
</div>

``` html
     <template>
          <Carousel v-model="value1" :height="100" >
               <CarouselItem>
                    <div class="demo-carousel">1</div>
               </CarouselItem>
               <CarouselItem>
                    <div class="demo-carousel">2</div>
               </CarouselItem>
               <CarouselItem>
                    <div class="demo-carousel">3</div>
               </CarouselItem>
               <CarouselItem>
                    <div class="demo-carousel">4</div>
               </CarouselItem>
          </Carousel>
     </template>
      <script>
          import {Carousel,CarouselItem} from './components/radio/radio';
          export default {
               name: 'myRadio',
               componets:{Carousel,CarouselItem},
               data () {
                    return {
                         value1: ''
                    }
               }
          }
     </script>
````

## 自动切换
>设置属性 autoplay 可以自动轮播，同时可以设置属性 speed 改变自动播放的速度,默认2000。

<div>
     <Carousel  :height="100" :autoplay="true">
          <CarouselItem>
            <div class="demo-carousel">1</div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">2</div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">3</div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">4</div>
          </CarouselItem>
      </Carousel>
</div>


``` html
      <Carousel v-model="value1" :height="100" :autoplay="true">
          <CarouselItem>
            <div class="demo-carousel">1</div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">2</div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">3</div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">4</div>
          </CarouselItem>
      </Carousel>
``` 


***Carousel props***
| 属性                 | 说明    | 默认值   |
|:---------------------|:-------|:-------|
| value    | 指定当前选中的项目数据。可以使用 v-model 双向绑定数据	String | Number | 无 |
| height    | 具体的高度 String 或 Number | 50 |
| loop | 是否开启循环播放 Boolean| false |
| autoplay | 是否开启自动播放 Boolean| false |
| speed | 自动切换的毫秒数 Number| 2000 |
| easing | 动画效果| ease |
| trigger | 指示器触发方式，默认click,可选hover|  |
| arrow | 切换箭头的显示，可选值为 hover（悬停），always（一直显示），never（不显示）	| hover |
| iconLeftType | 切换左箭头Icon图标，其他请选择icon图标库	| ion-ios-arrow-left |
| iconRightType | 切换左箭头Icon图标，其他请选择icon图标库	| ion-ios-arrow-right |

***Carousel event***
| 事件                 | 说明    | 
|:---------------------|:-------|
| on-change	    | 幻灯片切换时触发，目前激活的幻灯片的索引，原幻灯片的索引 |
