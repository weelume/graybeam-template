'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Shell, type PageProps } from '../components/Shell'
import { Heading, StoryCards, Estimate, FAQ } from '../components/Blocks'
import { Filters, CostCards } from '../components/Costs'
import { articles, projects, copy, ui, pick } from '../content'
import costs from '../costs.json'
export default function ListPage({locale='zh',basePath}:PageProps){
  const pathname=usePathname(),slug=pathname.slice(basePath.length).replace(/^\//,''),[category,setCategory]=useState('all')
  const isCosts=slug==='costs',isProjects=slug==='projects',stories=isProjects?projects:articles
  const filtered=stories.filter(s=>category==='all'||s.category===category)
  return <Shell locale={locale} basePath={basePath}><Heading locale={locale} title={isCosts?copy('费用，逐项公开','COSTS.'):isProjects?copy('改造之前与之后\n还有当初的报价','BEFORE. AFTER.\nTHE NUMBER WE QUOTED.'):copy('来自施工现场\n坦诚而具体的回答','STRAIGHT ANSWERS\nFROM THE SITE.')} intro={isCosts?copy('参考最近 60 份合同的 42 项费用，包含住宅单价、常见工程起步价和前期固定收费。币种为美元，以下均为演示参考。','42 costs from the reference’s last 60 contracts. Per square foot, starting points and fixed fees. USD demonstration figures.'):isProjects?copy('八个项目，展示改造前后、施工范围与预算。项目与业主评价为参考站演示内容。','Eight projects: before and after, scope and budget. Reference projects and owner reviews are demonstration content.'):copy('关于预算、选材、地块与工期的六篇建造笔记。','Six field notes on budgets, allowances, lots and schedules.')}/>
    <section className="gb-section" style={{paddingTop:0}}>{(isCosts||isProjects)&&<Filters locale={locale} value={category} onChange={setCategory} includePreconstruction={isCosts}/>}
      <p className="gb-count" role="status">{isCosts?(category==='all'?costs:costs.filter(c=>c.category===category)).length:filtered.length} {locale==='zh'?(isCosts?'项参考费用':'篇内容'):(isCosts?'published costs':'entries')}</p>
      {isCosts?<CostCards locale={locale} basePath={basePath} category={category==='all'?undefined:category}/>:<StoryCards locale={locale} basePath={basePath} stories={filtered}/>}
      {isCosts&&<p className="gb-demo">{pick(ui.demo,locale)}</p>}
    </section>{isCosts&&<section className="gb-section"><h2>{locale==='zh'?'三种计价方式\n全部写清楚':'THREE KINDS OF NUMBER.\nALL IN WRITING.'}</h2><div className="gb-jobs" style={{marginTop:36}}>{[[copy('固定费用','FIXED'),copy('施工前的勘察、可行性与设计服务，开始前明确金额。','Site walks, feasibility and design. A fixed fee agreed before work starts.')],[copy('按平方英尺','PER SQ FT'),copy('住宅、扩建和商业空间，面积影响总价，最终以逐项报价为准。','Homes, additions and commercial spaces where size drives cost. The estimate gives the final number.')],[copy('起步价','FROM'),copy('厨房、浴室等改造，现场勘察后确认固定范围和具体价格。','Kitchen and bath starting points, followed by a fixed-scope price after the site walk.')]].map(([title,text])=><article className="gb-job gb-glass" key={title.en}><h3>{pick(title,locale)}</h3><p>{pick(text,locale)}</p></article>)}</div></section>}
    {(isCosts||isProjects)&&<Estimate locale={locale}/>} {isProjects&&<FAQ locale={locale}/>}
  </Shell>
}
