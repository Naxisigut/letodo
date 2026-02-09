# Vue 3 SPA 应用

一个基于 Vue 3 + Vue Router + Vite 构建的单页应用（SPA）项目模板。

## 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **Vue Router 4** - 官方路由管理器
- **Vite** - 下一代前端构建工具

## 项目结构

```
.
├── index.html          # HTML 入口文件
├── vite.config.js      # Vite 配置文件
├── package.json        # 项目依赖配置
├── src/
│   ├── main.js        # 应用入口文件
│   ├── App.vue        # 根组件
│   ├── style.css      # 全局样式
│   ├── router/
│   │   └── index.js   # 路由配置
│   └── views/
│       ├── Home.vue   # 首页组件
│       └── About.vue  # 关于页面组件
└── README.md
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

应用将在 `http://localhost:3000` 启动

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 功能特性

- ✅ 单页应用（SPA）架构
- ✅ Vue Router 路由管理
- ✅ 组件化开发
- ✅ 现代化 UI 设计
- ✅ 响应式布局

## 开发说明

- 使用 Vue 3 Composition API
- 路由配置在 `src/router/index.js`
- 页面组件位于 `src/views/` 目录
- 全局样式在 `src/style.css`

## 许可证

MIT
