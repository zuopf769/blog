title: JavaScript 程序员的<br> Swift 入门指南
date: 2016-04-11 22:23:55
tags:
  - swift
  - javascript
---

通过自己已经熟悉来语言来学习新语言有利有弊，然而没有一种方法是完美的，于是乎，试试总是好的。

## 基础

### 注释

JavaScript 和 Swift 的注释方式相同：

```js
// 单行注释

/*
多行
注释
*/
```

同样几乎相同的还有分号的使用，两者都不强行要求必须使用分号。

### 变量

ES6 之前 JavaScript 只有变量一说，而 ES6 引入了 `const` 和 `let` 分别用来定义常量和带有作用域的变量。

在 Swift 中也有常量和变量的区分：

```swift
// 定义常量
let foo = "bar"
foo = "baz" // 报错无法对常量重新赋值

// 定义变量
var foo = "bar"
foo = "baz" // OK
```

### 数据类型

JavaScript 是一种弱类型的语言，你在声明变量的时候不需要指定变量类型，而 Swift 是和 C/C++ 一样的强类型语言，使用「类型标注」来进行类型声明。

```swift
let foo: String = "hello bar"
```

你也可以在声明时同时给多个常量或变量指定类型：

```swift
// 用逗号分隔，结尾写上类型
var foo, bar, baz: String
```

### 字符串

JavaScript 对如何声明字符串没有强制的限定，字符串和字符都可以用单引号 `'` 和双引号 `"` 表示，而 Swift 中必须都使用双引号。

```swift
// 直接量
let str = "I am string"
// 类似 JS 中的 new String()
let str = String("blah...")
```

### 数组

Swift 中的元组是多个任意类型值的集合，就像 JavaScript 中的数组。

```swift
let status = (404, "not found")
```

## 控制流
