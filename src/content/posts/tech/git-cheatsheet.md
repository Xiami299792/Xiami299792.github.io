---
title: Git 常用命令速查（含几个反悔专用）
date: 2026-02-05
category: tech
tags: [Git, 工具, 版本控制]
summary: 日常真正会用到的 Git 命令，按场景分组：改错了、提交早了、分支乱了分别怎么办。
---

按「我想干什么」分类，比按字母顺序好查得多。

## 每天都在用的五条

```bash
git status              # 看现在什么状态（最常敲的一条）
git add -p              # 交互式暂存，逐块确认改了什么
git commit -m "fix: ..."  # 提交
git pull --rebase       # 拉取并把本地提交挪到最新之上
git push                # 推送
```

`git add -p` 值得单独习惯一下：它会把改动拆成小块让你逐块选，能有效避免把调试代码一起提交上去。

## 提交信息怎么写

用 Conventional Commits，一眼能看出这次改动性质：

| 前缀 | 用途 |
| --- | --- |
| `feat:` | 新功能 |
| `fix:` | 修 bug |
| `docs:` | 只改文档 |
| `refactor:` | 重构，行为不变 |
| `chore:` | 构建、依赖、杂活 |

## 反悔专用

### 改错了文件，还没 add

```bash
git restore path/to/file        # 丢弃工作区改动
git restore --staged file       # 只取消暂存，改动保留
```

### 提交信息写错了，还没 push

```bash
git commit --amend -m "新的信息"
```

### 提交早了，想再补一个文件

```bash
git add forgotten.txt
git commit --amend --no-edit
```

### 想撤销最近一次提交但保留改动

```bash
git reset --soft HEAD~1
```

`--soft` 保留暂存区，`--mixed`（默认）保留工作区，`--hard` 全丢。**`--hard` 之前先 `git stash` 或者确认一遍 `git status`。**

### 提交已经 push 上去了

不要 `reset` 后强推，用 `revert` 生成一个反向提交：

```bash
git revert <commit-hash>
```

## 分支乱了怎么办

```bash
git branch -vv                 # 看本地分支和上游的对应关系
git log --oneline --graph --all  # 图形化看历史
git switch -c fix/xxx          # 从当前位置开新分支
```

`git reflog` 是最后的安全网——只要提交过，哪怕分支被删了也能找回来：

```bash
git reflog
git switch -c rescue <hash>
```

## 几个配置，一次性设好

```bash
git config --global pull.rebase true
git config --global init.defaultBranch main
git config --global core.autocrlf input   # Windows 换行符
```

最后一条在 Windows 上尤其重要，不然会莫名出现整文件 diff。
