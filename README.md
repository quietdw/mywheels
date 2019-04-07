# JiangUI

[![Build Status](https://travis-ci.org/quietdw/mywheels.svg?branch=master)](https://travis-ci.org/quietdw/mywheels)

## 介绍

这是我在学期前端时制作的 UI 框架，希望你们喜欢。

## 开始使用

1. 添加 CSS

使用本框架前，请先在页面中引入以下样式

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

IE8 以上的浏览器支持此样式

2. 安装

```
npm i  jiangui

或

yarn add jiangui
```

3. 引入

```Javascript
import {Button} from 'jiangui'
import 'jiangui/dist/index.css'

export default {
  name: 'app',
  components: {
		'g-button':Button
  }
}
```

## 文档

[JiangUi官网](http://jiangnana.fun/mywheels/)




