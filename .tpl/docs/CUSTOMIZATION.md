# 修改入口

品牌与电话在 config/brand.ts；中英文文案在 content.ts、costs.json 和页面内成对文案；字体在 tokens.css，语义颜色和响应式尺寸在 theme.css；费用筛选在 components/Costs.tsx，表单与对比在 components/Blocks.tsx，导航在 components/Shell.tsx。新增页面同步 meta.ts 和 .tpl/template.json，语言路径为 / 与 /en，语言切换保留路径、查询和锚点。数据数量从数组计算。替换图片时同步来源、摘要和截图，不把参考站素材当作已授权。
