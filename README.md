# deimon

🎃 Deity Demon - 一套基于 React 的 Web 前端组件库

> Deity Demon 意为神与魔，也是组件库的两个主题色

### Feature

🎉 基于 React + TS 的轻量组件
🎉 高颜值，两种主题任意切换
🎉 组件设计有想法，追求性能
🎉 组件发es包，更好地支持 TreeShaking

### Install

```

```

### Development

首先，请安装依赖

```
yarn
cd site
yarn
```

#### 1. 开发组件

该命令会打出 es 文件夹，里面存放组件的 js 代码，并且该命令会监听文件改动

```
yarn dev:es
```

#### 2. 开发样式

该命令会打出 css 文件夹，里面存放组件的 css 代码，并且该命令会监听文件改动

```
yarn dev:css
```

#### 3. 本地调试组件

通过本地运行 site 来调试组件
```
yarn dev
```

**可在 site 中写 React 代码调试组件**
通过 `import { Component } from 'PATH/TO/es'` 的方式引入组件
通过 `import 'PATH/TO/css/component.css'` 的方式引入样式

#### 4. 打包发布

```
yarn build
```
