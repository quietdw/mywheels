# mywheels

[![Build Status](https://travis-ci.org/quietdw/mywheels.svg?branch=master)](https://travis-ci.org/quietdw/mywheels)

## 介绍

这是我在学期前端时制作的 UI 框架，希望你们喜欢。

## 开始使用

1. 添加 CSS

使用本框架前，请先在页面中引入吐下样式

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

IE8 以上的浏览器支持此样式

此外还需要设置 UI 默认样式（会在以后完善）

```css
:root {
  --button-height: 32px;
  --font-size: 14px;
  --botton-bg: #fff;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-hover-color: #666;
}
```

2. 安装

```
npm i --save mywheels-t-1-1
```

3. 引入

```Javascript
import {Button} from 'mywheels-t-1-1'
import 'mywheels-t-1-1/dist/index.css'

export default {
  name: 'app',
  components: {
		'g-button':Button
  }
}
```

4. 引入 SVG

## 文档

## 提问
