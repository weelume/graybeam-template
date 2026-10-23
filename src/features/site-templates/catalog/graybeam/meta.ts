import type { SiteTemplate } from '../../types'
export const graybeamTemplate: SiteTemplate = { ...{
  "id": "graybeam",
  "name": "Graybeam · 透明报价与建筑施工",
  "localizedNames": {
    "en": "Graybeam · Builders & transparent estimates"
  },
  "sceneId": "corporate-site",
  "listed": false,
  "tags": [
    "建筑施工",
    "工程蓝",
    "透明报价",
    "项目对比",
    "中英文",
    "PC / iPad / H5"
  ],
  "summary": "29 页建筑施工官网：42 项费用指南、4 类服务、8 个改造案例、6 篇建造文章、团队与演示询价表单。",
  "accentColor": "#5291ff",
  "cover": "/templates/graybeam/screenshots/desktop-home.webp",
  "screenshots": [
    {
      "src": "/templates/graybeam/screenshots/desktop-home.webp",
      "alt": "Graybeam desktop home",
      "device": "desktop",
      "width": 1440,
      "height": 1000
    },
    {
      "src": "/templates/graybeam/screenshots/desktop-services.webp",
      "alt": "Graybeam desktop services",
      "device": "desktop",
      "width": 1440,
      "height": 1000
    },
    {
      "src": "/templates/graybeam/screenshots/desktop-journal.webp",
      "alt": "Graybeam desktop journal",
      "device": "desktop",
      "width": 1440,
      "height": 1000
    },
    {
      "src": "/templates/graybeam/screenshots/desktop-contact.webp",
      "alt": "Graybeam desktop contact",
      "device": "desktop",
      "width": 1440,
      "height": 1000
    },
    {
      "src": "/templates/graybeam/screenshots/tablet-home.webp",
      "alt": "Graybeam tablet home",
      "device": "tablet",
      "width": 834,
      "height": 1180
    },
    {
      "src": "/templates/graybeam/screenshots/tablet-services.webp",
      "alt": "Graybeam tablet services",
      "device": "tablet",
      "width": 834,
      "height": 1180
    },
    {
      "src": "/templates/graybeam/screenshots/tablet-journal.webp",
      "alt": "Graybeam tablet journal",
      "device": "tablet",
      "width": 834,
      "height": 1180
    },
    {
      "src": "/templates/graybeam/screenshots/tablet-contact.webp",
      "alt": "Graybeam tablet contact",
      "device": "tablet",
      "width": 834,
      "height": 1180
    },
    {
      "src": "/templates/graybeam/screenshots/mobile-home.webp",
      "alt": "Graybeam mobile home",
      "device": "mobile",
      "width": 390,
      "height": 844
    },
    {
      "src": "/templates/graybeam/screenshots/mobile-services.webp",
      "alt": "Graybeam mobile services",
      "device": "mobile",
      "width": 390,
      "height": 844
    },
    {
      "src": "/templates/graybeam/screenshots/mobile-journal.webp",
      "alt": "Graybeam mobile journal",
      "device": "mobile",
      "width": 390,
      "height": 844
    },
    {
      "src": "/templates/graybeam/screenshots/mobile-contact.webp",
      "alt": "Graybeam mobile contact",
      "device": "mobile",
      "width": 390,
      "height": 844
    }
  ]
}, surfaces: [{id:'site',name:'建筑施工官网',platform:'pc',locales:['zh','en'],pages:[{...{"slug":"","title":"首页","localizedTitles":{"en":"Home"}},load:()=>import('./pages/HomePage')},
{...{"slug":"about","title":"关于我们","localizedTitles":{"en":"ONE TRUCK IN 2009.22 PEOPLE TODAY."}},load:()=>import('./pages/AboutPage')},
{...{"slug":"careers","title":"加入团队","localizedTitles":{"en":"BUILD HOUSESYOU’D LIVE IN."}},load:()=>import('./pages/CareerPage')},
{...{"slug":"contact","title":"联系我们","localizedTitles":{"en":"CALL. OR WRITE.A BUILDER ANSWERS."}},load:()=>import('./pages/ContactPage')},
{...{"slug":"costs","title":"费用指南","localizedTitles":{"en":"COSTS."}},load:()=>import('./pages/ListPage')},
{...{"slug":"journal","title":"建造日志","localizedTitles":{"en":"STRAIGHT ANSWERSFROM THE SITE."}},load:()=>import('./pages/ListPage')},
{...{"slug":"journal/add-on-or-move","title":"扩建还是搬家","localizedTitles":{"en":"Add on or move? The math we walk owners through"}},load:()=>import('./pages/StoryPage')},
{...{"slug":"journal/building-on-a-sloped-lot","title":"坡地建房","localizedTitles":{"en":"Building on a sloped lot in East Tennessee"}},load:()=>import('./pages/StoryPage')},
{...{"slug":"journal/how-long-an-office-build-out-takes","title":"办公室装修工期","localizedTitles":{"en":"How long an office build-out really takes"}},load:()=>import('./pages/StoryPage')},
{...{"slug":"journal/how-to-read-a-builders-estimate","title":"读懂施工报价","localizedTitles":{"en":"How to read a builder’s estimate, line by line"}},load:()=>import('./pages/StoryPage')},
{...{"slug":"journal/kitchen-remodel-allowances","title":"厨房选材预算","localizedTitles":{"en":"Kitchen remodel allowances, explained"}},load:()=>import('./pages/StoryPage')},
{...{"slug":"journal/what-a-custom-home-costs-in-knoxville","title":"定制住宅造价","localizedTitles":{"en":"What a custom home really costs in Knoxville"}},load:()=>import('./pages/StoryPage')},
{...{"slug":"legal","title":"法律信息","localizedTitles":{"en":"LEGAL."}},load:()=>import('./pages/PolicyPage')},
{...{"slug":"privacy","title":"隐私政策","localizedTitles":{"en":"PRIVACY."}},load:()=>import('./pages/PolicyPage')},
{...{"slug":"projects","title":"项目案例","localizedTitles":{"en":"BEFORE. AFTER.THE NUMBER WE QUOTED."}},load:()=>import('./pages/ListPage')},
{...{"slug":"projects/bungalow-kitchen-fourth-and-gill","title":"1928 年厨房翻新","localizedTitles":{"en":"Kitchen in a 1928 bungalow"}},load:()=>import('./pages/StoryPage')},
{...{"slug":"projects/coffee-roastery-old-city","title":"咖啡烘焙工坊","localizedTitles":{"en":"Coffee roastery and café"}},load:()=>import('./pages/StoryPage')},
{...{"slug":"projects/dental-suite-turkey-creek","title":"牙科诊所装修","localizedTitles":{"en":"Dental suite build-out"}},load:()=>import('./pages/StoryPage')},
{...{"slug":"projects/lake-house-tellico-lake","title":"湖畔住宅","localizedTitles":{"en":"Lake house on Tellico Lake"}},load:()=>import('./pages/StoryPage')},
{...{"slug":"projects/modern-farmhouse-hardin-valley","title":"现代农舍","localizedTitles":{"en":"Modern farmhouse on a wooded lot"}},load:()=>import('./pages/StoryPage')},
{...{"slug":"projects/primary-suite-addition-fountain-city","title":"主卧套房扩建","localizedTitles":{"en":"Primary suite addition"}},load:()=>import('./pages/StoryPage')},
{...{"slug":"projects/ranch-remodel-sequoyah-hills","title":"整屋翻新","localizedTitles":{"en":"Whole-home remodel of a 1962 ranch"}},load:()=>import('./pages/StoryPage')},
{...{"slug":"projects/second-story-addition-bearden","title":"二层加建","localizedTitles":{"en":"Second-story addition"}},load:()=>import('./pages/StoryPage')},
{...{"slug":"services","title":"建造服务","localizedTitles":{"en":"FOUR KINDS OF BUILD.ONE CREW.ONE CONTRACT."}},load:()=>import('./pages/ServicePage')},
{...{"slug":"services/additions","title":"住宅扩建","localizedTitles":{"en":"More house, without moving out of yours."}},load:()=>import('./pages/ServicePage')},
{...{"slug":"services/commercial","title":"商业空间","localizedTitles":{"en":"Build-outs that open on the date in the lease."}},load:()=>import('./pages/ServicePage')},
{...{"slug":"services/custom-homes","title":"定制住宅","localizedTitles":{"en":"A custom home with the number written down first."}},load:()=>import('./pages/ServicePage')},
{...{"slug":"services/remodels","title":"翻新改造","localizedTitles":{"en":"Kitchens, baths and whole homes, priced line by line."}},load:()=>import('./pages/ServicePage')},
{...{"slug":"terms","title":"使用条款","localizedTitles":{"en":"TERMS."}},load:()=>import('./pages/PolicyPage')}]}]}
