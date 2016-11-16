---
title: 用 micro 和 now 创建 web 微服务
subtitle: microservice done right.
date: 2016-11-16 13:26:07
tags:
  - zeit
  - micro
  - now
---

## <span>Web 微服务</span>

微服务简而言之就是拆分业务，降低应用复杂度，提高可维护性和模块化。

比如一个电子商务网站主要由前端、支付系统、用户系统、销售系统、派送系统组成。当没有微服务话的时候，一个新加入开发的程序员可能会难以下手，因为很难在短时间理清各个系统之间的关系，你甚至怕一修改代码整个系统都崩溃难以 debug.

微服务化对此带来的好处是：

- 可以快速加入开发，你只需要搞清楚你需要修改的子服务的逻辑
- 你可以选择最适合该服务的技术，不用顾及牵扯到整个系统，比如最适合的语言和框架
- 更方便测试
- 开发环境更轻量，因为毕竟不需要让整个系统都运行起来

## <span>micro</span>

你可能用过 node.js 的 `http` 模块架设过 web 服务，也可能使用过更 high level 的 Express 和 Koa 等基于中间层的 web 框架。

相比之下，micro:

- 不用手动编译，直接支持 `async/await` 语法

micro 的命令行工具使用 [async-to-gen](https://github.com/leebyron/async-to-gen) 模块自动在 require 的时候编译 `async/await` 到 generator，让你无缝地在当前的 node.js 版本中运行。

- 
