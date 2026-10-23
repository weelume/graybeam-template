'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { SiteTemplatePageProps } from '../../../types'
import { useGraybeamHost } from '../host'
import { brand } from '../config/brand'
import { nav, pick, ui } from '../content'
import '../tokens.css'
import '../theme.css'
export type PageProps = SiteTemplatePageProps
export const href = (basePath:string,slug='') => `${basePath}/${slug}`.replace(/\/$/,'') || '/'
export function Reveal({children,className=''}:{children:ReactNode;className?:string}) {
  const reduced=useReducedMotion()
  return <motion.div className={className} initial={reduced?false:{y:18}} whileInView={{y:0}} viewport={{once:true,amount:.08}} transition={{duration:.45}}>{children}</motion.div>
}
export function Shell({locale='zh',basePath,children}:{children:ReactNode}&PageProps) {
  const host=useGraybeamHost(),pathname=usePathname(),router=useRouter(),[open,setOpen]=useState(false)
  const name=host.brandName?.[locale]??brand.name[locale]
  const root=locale==='en'?basePath.replace(/\/en$/,''):basePath
  // 语言切换从挂载点截取当前页面，查询参数和锚点在点击时读取，避免水合前后 URL 不一致。
  const suffix=pathname.slice(basePath.length).replace(/^\//,'')
  const languageHref=href(locale==='en'?root:href(root,'en'),suffix)
  return <div className="graybeam" lang={locale==='zh'?'zh-CN':'en'}>
    <a className="gb-skip" href="#gb-main">{locale==='zh'?'跳至正文':'Skip to content'}</a>
    <header className="gb-header">
      <Link className="gb-brand" href={href(basePath)} aria-label={name}>{host.lightLogo?<img src={host.lightLogo} width="24" height="24" alt=""/>:<span className="gb-mark"/>}<span>{host.brandName?name:brand.wordmark}</span></Link>
      <nav className={open?'gb-nav is-open':'gb-nav'} aria-label={locale==='zh'?'主导航':'Main navigation'} id="gb-menu">
        {nav.map(n=><Link key={n.slug} href={href(basePath,n.slug)} onClick={()=>setOpen(false)} aria-current={pathname===href(basePath,n.slug)?'page':undefined}>{pick(n.label,locale)}</Link>)}
      </nav>
      <a className="gb-header-phone" href={'tel:'+brand.telephone}>{brand.phone}</a>
      <Link className="gb-button gb-outline gb-header-cta" href={href(basePath,'contact')}>{pick(ui.estimate,locale)}</Link>
      <Link className="gb-language" href={languageHref} onClick={event=>{if(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;event.preventDefault();router.push(languageHref+window.location.search+window.location.hash)}} hrefLang={locale==='en'?'zh':'en'} aria-label={locale==='zh'?'切换到英文':'Switch to Chinese'}>{locale==='en'?'中文':'EN'}</Link>
      <button className="gb-menu-toggle" aria-controls="gb-menu" aria-expanded={open} aria-label={locale==='zh'?'切换菜单':'Toggle menu'} onClick={()=>setOpen(!open)}>{open?'×':'☰'}</button>
    </header>
    <main id="gb-main">{children}</main>
    <footer className="gb-footer"><div className="gb-footer-grid">
      <div><h2>{name}</h2><p>{pick(ui.footer,locale)}</p><p>{brand.hours[locale]}</p><small>{pick(ui.demo,locale)}</small></div>
      <div><h3>{locale==='zh'?'建造服务':'Services'}</h3>{['custom-homes','additions','remodels','commercial'].map((s,i)=><Link key={s} href={href(basePath,'services/'+s)}>{locale==='zh'?['定制住宅','住宅扩建','翻新改造','商业空间'][i]:['Custom homes','Additions','Remodels','Commercial'][i]}</Link>)}</div>
      <div><h3>{locale==='zh'?'公司':'Company'}</h3>{[...nav.filter(n=>n.slug!=='services'),{slug:'journal',label:{zh:'建造日志',en:'Journal'}}].map(n=><Link key={n.slug} href={href(basePath,n.slug)}>{pick(n.label,locale)}</Link>)}</div>
      <div><h3>{locale==='zh'?'法律与联系':'Legal & contact'}</h3>{['privacy','terms','legal'].map((s,i)=><Link key={s} href={href(basePath,s)}>{locale==='zh'?['隐私政策','使用条款','法律信息'][i]:['Privacy','Terms','Legal'][i]}</Link>)}<p>{brand.address[locale]}</p><a href={'tel:'+brand.telephone}>{brand.phone}</a></div>
    </div><div className="gb-footer-bottom"><span>© {brand.year} {name}</span>{host.marketplaceHref&&<Link href={host.marketplaceHref}>{host.marketplaceLabel?.[locale]}</Link>}{host.filing}<span>{locale==='zh'?'施工与预算，白纸黑字':'Built to the written number.'}</span></div><div className="gb-wordmark" aria-hidden="true">{host.brandName?name:brand.wordmark}</div></footer>
    {host.marketplaceHref&&<Link className="gb-market" href={host.marketplaceHref} aria-label={host.marketplaceAriaLabel?.[locale]}>{host.lightLogo&&<img src={host.lightLogo} alt="" width="24" height="24"/>}<span>{name}</span></Link>}
    <div className="gb-mobile-bar"><a href={'tel:'+brand.telephone}>{locale==='zh'?'致电':'Call'}</a><Link href={href(basePath,'contact')}>{pick(ui.estimate,locale)}</Link></div>
  </div>
}
