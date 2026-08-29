# 🚌 北印校车实时看板 (BIGC School Bus Tracker)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Cloudflare](https://img.shields.io/badge/Cloudflare_Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)

这是一个轻量级、零后端的纯静态单页面网页，专为北京印刷学院（BIGC）师生打造。旨在解决日常查看密密麻麻的校车时刻表图带来的不便，实现**自动比对时间、实时倒计时提醒**的极简出行体验。

## ✨ 核心特性

- **⏳ 实时倒计时**：自动读取设备本地时间，精确计算距离下一班校车的剩余分钟数。
- **📱 响应式布局**：采用 Flexbox 与 Grid 布局，手机端自动折叠为单列上下滑动，PC/平板端自动展开为左右双列对照。
- **🧠 状态智能感知**：
  - **自动变灰**：已经发车的时刻会自动变灰并添加删除线。
  - **高亮下一班**：即将发车的时刻会在完整时间表中以显眼的蓝色/绿色气泡高亮标记。
- **⚡ 零服务器成本**：纯 HTML + CSS + JS 构建，无需任何后端数据库或构建环境，完美适配 Cloudflare Pages、GitHub Pages 或直接双击本地运行。

## 🚀 部署与使用

本项目无需编译，开箱即用。

### 方案一：Cloudflare Pages / GitHub Pages 极速部署
1. 将代码上传到 GitHub 仓库。
2. 在 Cloudflare Pages 中连接仓库（构建框架选择 `None`，构建命令和输出目录留空）或在 GitHub 中开启 GitHub Pages。
3. 点击部署即可获得专属在线访问链接。

### 方案二：本地运行或 NAS 部署
由于是纯静态单文件，直接在浏览器中双击打开 `index.html` 即可使用。

## 🛠️ 文件结构

```text
├── index.html       # 主界面及全部核心计算逻辑（包含内联 CSS 和 JS）
└── README.md        # 项目说明文档
```
