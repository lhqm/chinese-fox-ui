# Chinese Fox UI

一个带有素雅/华丽双主题的 Vue3 组件库与示例文档站。

## 开发
- 安装依赖: `npm install`
- 本地开发: `npm run dev` 后打开 http://localhost:5173/ 或运行时提示端口
- 类型检查: `npm run typecheck`

## 构建
- 文档站构建: `npm run build` 输出到 `dist/`
- 预览构建产物: `npm run preview`

## GitHub Pages 自动部署
- 工作流文件: `.github/workflows/pages.yml`
- 行为: push 到 `main` 自动构建并部署到 GitHub Pages
- 访问路径:
  - 仓库名为 `username.github.io` 时，直接根路径
  - 普通仓库 `username/repo` 时路径为 `https://username.github.io/repo/`
- Vite base:
  - 已在 `vite.config.ts` 中通过 `GITHUB_PAGES` 与 `REPO_NAME` 动态设置
  - 工作流构建时自动注入这两个环境变量

## 主题切换过渡
- 采用“纸帘下落+玻璃模糊+诗句+细线进度条”的温柔过渡，避免强闪烁
- 入口位于页面右上角开关

## 以库模式构建与发布到 npm（示例）
- 构建库模式: `npm run build:lib`，产物在 `dist/` 下包含 `es/` 与 `umd`
- 打包校验: `npm pack`（生成本地 tar 包）
- 使用示例:
  ```ts
  import { createApp } from 'vue';
  import App from './App.vue';
  import ChineseFoxUI, { CButton } from 'chinese-fox-ui-lhqm';
  
  const app = createApp(App);
  app.use(ChineseFoxUI);
  app.component('CButton', CButton);
  app.mount('#app');
  ```
- 发布准备:
  - 修改 `package.json`，设置唯一的 `name`（示例使用 `chinese-fox-ui-lhqm`）
  - 设置版本号，完善 `description`、`repository`、`keywords`、`license`
  - 确保含 `peerDependencies: { vue: "^3.3.0" }`
  - 执行 `npm login` 与 `npm publish --access public`

## GitHub Actions 发布到 npm（可选）
- 新建工作流（示例脚本略），建议在 `tag` 或 `release` 时触发
- 在仓库 Secrets 添加：
  - `NPM_TOKEN`: npm 发布令牌
- 步骤通常包括：checkout → setup-node → npm ci → npm run build:lib → npm publish

## 目录结构
- `src/` 组件与示例视图
- `src/index.ts` 库模式导出入口
- `vite.config.ts` 文档站配置（含 Pages base 适配）
- `vite.lib.config.ts` 库模式构建配置
- `.github/workflows/pages.yml` GitHub Pages 自动部署

## License
- MIT
