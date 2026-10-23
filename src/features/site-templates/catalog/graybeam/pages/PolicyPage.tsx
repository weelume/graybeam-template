'use client'
import { usePathname } from 'next/navigation'
import { Shell, type PageProps } from '../components/Shell'
import { Heading } from '../components/Blocks'
import { copy, pick } from '../content'
const policies = {
  privacy: {title:copy('隐私政策','PRIVACY.'),intro:copy('模板演示如何说明数据用途。当前表单仅本地校验，不采集、不发送、不保存。','This template demonstrates a clear privacy notice. Its form only validates locally; it collects, sends and stores nothing.'),sections:[
    [copy('当前演示的数据处理','THIS DEMONSTRATION'),copy('姓名、电话、地址与项目描述仅存在于当前表单内存。刷新或关闭页面即丢弃，不发送邮件，不写入浏览器存储或数据库。','Name, phone, address and project notes stay in the current form memory. Refreshing or closing discards them. No email, browser storage or database is used.')],
    [copy('真实业务中的收集范围','WHAT A LIVE BUSINESS MAY KEEP'),copy('若未来接入服务，需明确列出姓名、联系电话、项目地址、照片与图纸，并只收集报价或合同所需信息。','A future live service must declare names, contact numbers, project addresses, photos and drawings, and collect only what estimates and contracts need.')],
    [copy('用途与访问权限','PURPOSE AND ACCESS'),copy('真实接入前，应说明报价、施工协调、账单和保修用途，以及造价师、项目经理、现场主管和会计的访问范围。不得出售给广告商。','Before connecting a live service, disclose estimates, scheduling, invoices and warranty purposes, and the access of estimators, project managers, superintendents and accountants. Do not sell details to advertisers.')],
    [copy('保存期限','RETENTION'),copy('参考站采用报价两年、合同与保修十年的保存期。当前演示没有持久化；真实业务必须依据当地法律制定自己的期限。','The reference describes two years for estimates and ten for contracts and warranty records. This demonstration has no persistence. A real business must set lawful retention periods.')],
    [copy('您的权利','YOUR RIGHTS'),copy('真实服务应提供查询、更正和删除渠道，明确负责人和响应时间。当前演示不持有可供查询的记录。','A live service should provide access, correction and deletion channels with a named controller and response time. This demonstration holds no records.')],
    [copy('Cookie 与追踪','COOKIES AND TRACKING'),copy('本模板未加入广告追踪、用户画像或分析 Cookie。主站自身的隐私规则由主站独立管理。','This template adds no advertising trackers, profiling or analytics cookies. A hosting application manages its own privacy rules independently.')],
  ]},
  terms:{title:copy('使用条款','TERMS.'),intro:copy('报价、合同与保修结构为演示说明，不构成真实施工要约或法律建议。','Estimates, contract and warranty structures are demonstration material, not a construction offer or legal advice.'),sections:[
    [copy('书面报价与合同','ESTIMATE AND CONTRACT'),copy('参考业务规则为逐项报价转为合同价。遇到墙后腐朽或地基岩层等不可见情况，应暂停相关施工，先取得带价格的书面变更确认。','The reference model converts the itemized estimate to a contract price. For concealed rot or rock, stop affected work and obtain a priced, written change order first.')],
    [copy('选材预算','ALLOWANCES'),copy('尚未选定的洁具与饰面应以金额列入预算。低于预算应扣减，超出预算须在订货前确认新金额。','Unselected fixtures and finishes are allowances in dollars. Deduct underspending; approve any increase before ordering.')],
    [copy('付款','PAYMENT'),copy('参考结构为签约 10% 订金，后续按地基、结构、墙板和基本竣工检查节点付款，保留 5% 至收尾完成。真实付款由签署合同约定，演示不收款。','The reference structure is a 10% deposit, draws tied to inspections and 5% held until the punch list is done. Real payments require a signed contract. This demo accepts no payments.')],
    [copy('保修','WARRANTY'),copy('参考保修为工艺饰面一年、水电暖通两年、结构地基十年。范围、起算日期、排除项与转让规则必须写入真实合同。','Reference periods are one year for workmanship, two for systems and ten for structure. Scope, start dates, exclusions and transfer terms must go into a real contract.')],
    [copy('取消','CANCELLATION'),copy('参考规则为取得许可前可取消；之后对已发生的设计、许可和订购材料按有凭据的成本结算。当前站不生成合同或订单。','The reference allows cancellation before the permit, followed by documented incurred design, permit and material costs. This site generates no contract or order.')],
    [copy('争议与反馈','COMPLAINTS'),copy('正式上线前应配置真实投诉联系人、书面反馈渠道和处理时限。模板示例联系方式不可作为真实企业承诺。','Configure real complaint contacts, written channels and response deadlines before going live. Example contact information is not a business commitment.')],
  ]},
  legal:{title:copy('法律信息','LEGAL.'),intro:copy('本页所列公司、执照与保险为演示占位。正式使用前须由真实经营主体核实替换。','Company, license and insurance details are demonstration placeholders. A real operating entity must replace and verify them before use.'),sections:[
    [copy('公司','COMPANY'),copy('Graybeam Builders 为模板演示品牌，不表示实际承接工程的法律主体。','Graybeam Builders is the demonstration brand, not a representation of a legal contractor.')],
    [copy('注册','REGISTRATION'),copy('登记编号 000000000 为占位。真实公司名称、注册地址、税务信息及登记机关应由经营者提供。','Registration 000000000 is a placeholder. The operator must provide legal name, registered address, tax details and authority.')],
    [copy('执照','LICENSES'),copy('BC-A 00000、NAT-F000000-0 为示例编号，不是认证凭证。不得使用其宣称真实施工资质。','BC-A 00000 and NAT-F000000-0 are example numbers, not credential evidence. They must not be used to claim contractor qualifications.')],
    [copy('保险','INSURANCE'),copy('100 万美元单次／200 万美元累计责任险、工伤及建筑风险险仅展示信息结构，并未核实真实保单。','The $1M per occurrence / $2M aggregate liability, workers’ compensation and builder’s risk figures illustrate the information structure. No real policy is verified.')],
    [copy('联系与监管','CONTACT AND OVERSIGHT'),copy('请在品牌配置中替换演示电话、地址和邮箱，并填写真实监管机构。表单未接入真实服务。','Replace the example phone, address and email in brand configuration, and provide the actual regulator. The form has no live service.')],
    [copy('参考素材权利','REFERENCE ASSET RIGHTS'),copy('图片来自参考站，来源与摘要随模板保存，商业和再分发许可尚未核实。正式使用前需取得授权或替换。','Images come from the reference site, with sources and hashes recorded. Commercial and redistribution rights are unverified. Obtain permission or replace them before use.')],
  ]},
}
export default function PolicyPage({locale='zh',basePath}:PageProps){const slug=usePathname().slice(basePath.length).replace(/^\//,'');if(!(slug in policies))throw new Error('未知政策页面');const policy=policies[slug as keyof typeof policies];return <Shell locale={locale} basePath={basePath}><Heading locale={locale} title={policy.title} intro={policy.intro}/><article className="gb-section gb-article" style={{paddingTop:0}}>{policy.sections.map(([title,text])=><section key={title.en}><h2>{pick(title,locale)}</h2><p>{pick(text,locale)}</p></section>)}</article></Shell>}
