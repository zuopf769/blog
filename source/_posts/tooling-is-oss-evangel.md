title: tooling 是开源爱好者的福音
subtitle: tooling 在手， iife, umd, commonjs, es6 格式无忧
date: 2016-02-22 23:36:24
tags:
  - webpack
  - javascript
  - tooling
---

Webpack 非常好，你可以用它来给你的网页应用打包前端(iife 格式)文件，也可以用来打包一个你想复用的 JS 库(commonjs/umd 格式)，并且在其中使用最新的 ES6 特性和 ES6 模块功能。

假设你是个 GitHub 活跃分子(我猜你本来就是)，经常在 NPM 上发布一些自己写的模块吧? 当你作为一个高产出的 library author 的时候你可能就不那么愿意在每个项目中丢一堆 Webpack 的配置文件，DRY(Don't repeat yourself) 是你的原则。

## 前端 bundle

Webpack 默认打包的就是 iife 格式
