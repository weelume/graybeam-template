'use client'
import Link from 'next/link'
import costs from '../costs.json'
import { categories, pick } from '../content'
import { href, type PageProps } from './Shell'
export function CostCards({locale='zh',basePath,category,featured=false}:{category?:string;featured?:boolean}&PageProps){
  const rows=featured?costs.filter(c=>[0,1,9,10,17,19,21,27].includes(c.id)):costs.filter(c=>!category||c.category===category)
  return <div className="gb-cost-grid">{rows.map(c=><article key={c.id} className="gb-cost-card gb-glass"><h3>{pick(c.title,locale)}</h3><div><strong>{c.price}</strong><small>{pick(c.unit,locale)} · USD</small></div><p>{locale==='zh'?'包含：':'Includes: '}{pick(c.desc,locale)}</p><Link className="gb-link" href={href(basePath,'contact')+'?topic='+encodeURIComponent(pick(c.title,locale))}>{locale==='zh'?'咨询此项目':'Ask about this'} ↗</Link></article>)}</div>
}
export function Filters({locale='zh',value,onChange,includePreconstruction=false}:{value:string;onChange:(value:string)=>void;includePreconstruction?:boolean}&Pick<PageProps,'locale'>){
  return <div className="gb-filters" role="group" aria-label={locale==='zh'?'按类型筛选':'Filter by category'}>{[{id:'all',label:{zh:'全部',en:'All'}},...categories.filter(c=>includePreconstruction||c.id!=='preconstruction')].map(c=><button type="button" key={c.id} aria-pressed={value===c.id} onClick={()=>onChange(c.id)}>{pick(c.label,locale)}</button>)}</div>
}
