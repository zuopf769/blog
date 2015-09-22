title: 创建一个 Node.js 命令行程序
date: 2015-09-23 01:52:35
layout: draft
tags:
  - node.js
  - cli
  - tutorial
categories:
  - Node.js
  - JavaScript
  - Tutorial
---
作为程序员当然会经常接触到命令行，也就是终端。命令行程序经常会显得很有用，因为可以让你避免一些复杂的图形界面操作，你只需要进行简单的交互式文本命令。当然，非程序员对此必定完全不感冒，也许从来也没打开过电脑上的终端。

本文是总结我做过的数个命令行程序的经验，以供后人唾弃。

## 思路

开始一个新东西之前必定是先想它大概的思想思路。而对于这个命令行程序，要做的就是我在终端输入文本，系统接受并处理然后反馈内容给我。

比如一个叫 `hello` 的程序，我在终端输入 `hello world`，然后系统反馈 `hello a hell world`，而如果是输入 `hello egoist` 系统则反馈 `egoist saikou!`，这里系统根据 hello 后面的内容判断要如何回答。

命令行程序也会经常进行一些条件判断，或者说是流程控制、偏好设置，这个时候需要传入一些参数作为参考，一般是以单横线 `-` 加字母或者双横线 `--` 加单词的形式出现，比如 `webpack` 这个程序的一条命令 `webpack --production` 及其缩略命令 `webpack -p`，它们拥有相同的效果，即以生产环境运行并压缩文件。

## 实现

Node.js 命令行程序当然也是一个 Node.js 模块，需要用 NPM 来进行封装管理，一个 NPM 包有包目录结构和包描述文件 `package.json` 组成。

你可以新建一个目录然后在目录下运行 `npm init` 初始化得到一个 `package.json` 文件，它大概长这样，这取决于你刚才输入的内容：

```json
{
  "name": "temp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

这里你需要注意的是 `main` 这个属性的值描述的是你的包的入口文件，当你的包需要作为一个可执行命令直接运行在命令行的时候你需要添加一个 `bin` 属性并将它的值设定为一个 Node.js 可执行文件，类似这样：

```json
{
  "name": "hello",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "bin": {
    "hello": "./bin/hello"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "MIT"
}
```

(草稿)