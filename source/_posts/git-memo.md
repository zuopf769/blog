title: Git 备忘录
date: 2015-10-07 21:18:54
tags:
- git
categories:
- git
---

Git 的一些常用操作备忘。

## 起步

安装好 Git 之后，配置你的资料:

```bash
git config --global user.name "Your Real Name"
git config --global user.email you@email.address
```

之后生成 SSH 密钥:

```bash
ssh-keygen -C 'your@email.address' -t rsa
```

**初始化一个项目**

```bash
git init
# use ssh
git remote add origin git@github.com:username/reponame.git
# use username/password
git remote add origin https://username@password:github.com/username/reponame.git
```

**更新项目**

```bash
git add -A
git commit -m "message"
git push origin master
```

*Keep Updateing...*