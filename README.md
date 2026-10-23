# Graybeam 建筑施工模板

参考 https://communicative-psychology-099138.framer.app/ ，实际为建筑施工官网。29 页、58 条中英文路由，默认中文，英文 /en。包含 42 项费用筛选、8 项目前后对比、4 类服务、6 篇建造日志、关于、招聘、联系和三类政策页。手机菜单、FAQ、可键盘操作的对比滑块和图片弹窗。表单仅本地验证，不发送、不保存，不提供真实报价、招聘、付款或预约。

## 环境与运行
Node 版本见 .nvmrc，pnpm 9.15.4。依赖均复用现有 React、Next.js、Framer Motion 工具链，不引入外部服务。pnpm install --frozen-lockfile，pnpm dev；默认 http://127.0.0.1:43328 ，PORT 可覆盖。Ctrl+C 停止。生产 pnpm build 后 pnpm start。构建须在本地 Linux 文件系统完成。

## 修改与验证
通用模块在 src/features/site-templates/catalog/graybeam：config/brand.ts 管理品牌与联系，content.ts 与 costs.json 管理中英文内容，tokens.css/theme.css 管理字体与主题，components 管理共享交互，pages 组合页面，meta.ts 注册路由。品牌注入通过 host.tsx，通用组件不依赖具体宿主。运行素材在 public/templates/graybeam，来源与 SHA256 见 sources.json。

执行 pnpm typecheck、pnpm lint、pnpm test、pnpm build；node .tpl/tools/check.mjs . 校验协议。完整交付需要真实三端截图、源码摘要匹配的验收报告和真实 Git 地址；未完成项按报告说明，不以生成文件代替验证。pnpm bundle 生成通用包及源码提交摘要。

## 限制与权利
所有价格、工期、资质、评价、职位与联系方式为示例，不构成真实施工承诺。图片商业和再分发许可未确认，listed=false、redistributionAllowed=false。正式使用前取得授权或替换素材。源码、素材和工具许可分别见 .tpl/docs/LICENSE.md。

