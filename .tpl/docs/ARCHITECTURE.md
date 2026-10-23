# 架构

采用 Next.js App Router、React 和 Framer Motion，严格 TypeScript。feature 目录按品牌配置、双语内容、主题、共享交互组件、页面组合与元数据分层。独立路由通过 meta.ts 选择页面，宿主可以通过 Provider 注入品牌。无后端、数据库或外部发送，表单不产生持久化副作用。页面正文不写入基础设施代码。
