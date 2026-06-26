# 冯婉怡 - 个人主页

深色主题个人作品集网站，纯 HTML/CSS/JS 实现，可直接部署到 GitHub Pages。

## 🚀 快速开始

1. 直接双击 `index.html` 即可在浏览器中预览
2. 或用 VS Code Live Server 插件打开

## 📁 项目结构

```
Personal-Homepage/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   └── main.js         # 交互脚本
├── assets/
│   └── images/         # 图片素材
│       ├── avatar.jpg      # 你的头像
│       ├── project-1.png   # 项目截图
│       ├── project-2.png
│       └── project-3.png
└── README.md
```

## 🎨 特性

- 深色主题设计，青绿色强调色
- 圆点背景装饰
- 响应式布局，适配手机端
- 滚动渐入动画
- 简洁的联系表单
- 零依赖，纯静态页面

## 📝 需要替换的内容

搜索 `🔧` 标记，替换以下信息：

1. 导航栏和 Footer 中的社交链接（GitHub、邮箱、LinkedIn）
2. 头像图片 `assets/images/avatar.jpg`
3. 项目截图 `assets/images/project-*.png`
4. 个人名字、简介
5. 技能标签列表
6. 项目名称、描述、链接
7. `js/main.js` 中的邮箱地址

## 🌐 部署到 GitHub Pages

```bash
git init
git add .
git commit -m "Initial personal homepage"
git branch -M main
git remote add origin https://github.com/你的用户名/你的用户名.github.io.git
git push -u origin main
```

然后在 GitHub 仓库 Settings → Pages → Source 选择 `main` 分支，点击 Save。
