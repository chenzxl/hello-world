# 测试案例1
---

<HelloWorld msg="Welcome to Your Vue.js App"/>

<div  class="add">
  <p>你好</p>
</div>

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

# 测试案例2
---

<HelloWorld msg="Welcome to Your Vue.js App"/>

<div style="color:red" class="acb">
  <p>你好</p>
</div>

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


## 丢失的数

### 难度：简单

### 描述：

在数组 A 中，包含 0 到 n 的整数，其中缺失了一个数。请编写代码，以查找数组中缺失的整数。

### 样例：

array = `[4,3,2,0,5]` return 1

array = `[0,1,2,3,4,7,6]` return 5

array = `[0,1,2,3]` return 4

### 思路分析：

简单，不分析

### 代码模板：

```js
const findMissing = arr => {};
```

### 想一想再看答案

### 想一想再看答案

### 想一想再看答案

### 代码：

遍历数组长度的n+1次(包括0)，对比有没有这个值即可


```js
const findMissing = arr => {
  let num = arr.length + 1;
  for (let i = 0; i < num; i++) {
    if (arr.indexOf(i) === -1) {
      // i不在数组中 就找到这个值
      return i;
    }
  }
};
console.log('输出', findMissing([4, 3, 2, 0, 5])); //1
console.log(findMissing([0, 1, 2, 3, 4, 7, 6])); // 5
console.log(findMissing([0, 1, 2, 3])); // 4
```

### 鼓励我一下：

觉得还不错的话，给我的项目点个[star](https://github.com/OBKoro1/Brush_algorithm)吧


## 丢失的数222