# 🚌 北印校车实时看板 (BIGC School Bus Tracker)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![PWA](https://img.shields.io/badge/PWA-Ready-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare_Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)

这是一个轻量级、零后端的静态网页应用（PWA），专为北京印刷学院（BIGC）师生打造。旨在解决日常查看密密麻麻的校车时刻表图带来的不便，实现**自动比对时间、倒计时提醒、离线可用**的极简出行体验。

## ✨ 核心特性

- **⏳ 实时倒计时**：自动读取设备本地时间，精确计算距离下一班校车的剩余分钟数。
- **📱 响应式布局**：采用 Flexbox 与 Grid 布局，手机端自动折叠为单列上下滑动，PC/平板端自动展开为左右双列对照。
- **🧠 状态智能感知**：
  - **自动变灰**：已经发车的时刻会自动变灰并添加删除线。
  - **高亮下一班**：即将发车的时刻会在完整时间表中以显眼的蓝色气泡高亮标记。
  - **周末过滤**：自动识别系统日期的双休日，展示节假日无车提示。
- **✈️ PWA 离线支持**：支持添加到手机桌面作为独立 App 运行，配合 Service Worker 缓存，即使在校园内**完全断网**的情况下依然能精准倒计时。
- **⚡ 零服务器成本**：纯 HTML + CSS + JS 构建，无需任何后端数据库或运行环境，完美适配 Cloudflare Pages 一键免费部署。

## 🚀 部署与使用

本项目无需编译，开箱即用。

### 方案一：Cloudflare Pages 极速部署（推荐）
1. Fork 本仓库，或直接在你的 Cloudflare 控制台中连接到此 GitHub 仓库。
2. 在 Cloudflare Pages 中创建新项目。
3. 构建框架选择 `None`，构建命令和输出目录**留空**。
4. 点击部署，等待 10 秒钟即可获得属于你的专属链接。

### 方案二：本地运行或 NAS 部署
由于是纯静态文件，你可以直接在浏览器中双击打开 `index.html`，或者将其放置在任何支持静态文件托管的服务器/NAS（如 Nginx、Apache、Caddy）中运行。

## 🛠️ 文件结构

```text
├── index.html       # 主界面及核心计算逻辑（包含内联 CSS 和 JS）
├── manifest.json    # PWA 配置文件（定义应用名称、颜色、显示模式）
├── sw.js            # Service Worker 脚本（实现静态文件缓存与离线访问）
├── icon-192.png     # PWA 图标 (192x192 像素)
└── icon-512.png     # PWA 图标 (512x512 像素)
