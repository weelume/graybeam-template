'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Shell, href, type PageProps } from '../components/Shell'
import { Heading, Compare, StoryCards } from '../components/Blocks'
import { projects, articles, pick, image, ui } from '../content'
export default function StoryPage({locale='zh',basePath}:PageProps){
  const path=usePathname().slice(basePath.length).replace(/^\//,''),isProject=path.startsWith('projects/'),stories=isProject?projects:articles,story=stories.find(s=>s.slug===path)
  if(!story)throw new Error('未注册的内容页面：'+path)
  return <Shell locale={locale} basePath={basePath}><nav className="gb-breadcrumb" aria-label={locale==='zh'?'面包屑导航':'Breadcrumb'}><Link href={href(basePath)}>{locale==='zh'?'首页':'Home'}</Link><span>/</span><Link href={href(basePath,isProject?'projects':'journal')}>{locale==='zh'?(isProject?'项目案例':'建造日志'):(isProject?'Projects':'Journal')}</Link></nav><Heading locale={locale} title={story.title} intro={story.intro}/>
    {story.before?<Compare before={story.before} after={story.image} title={pick(story.title,locale)} locale={locale}/>:<img className="gb-detail-image" src={image(story.image)} alt={pick(story.title,locale)}/>}
    <div className="gb-section gb-story-layout"><article className="gb-article">{story.sections.map((section,i)=><section key={i}><h2>{pick(section.title,locale)}</h2>{section.paragraphs.map((p,j)=><p key={j}>{pick(p,locale)}</p>)}</section>)}</article><aside className="gb-sidebar gb-glass"><p>{pick(story.intro,locale)}</p>{story.facts?.map((f,i)=><p key={i}>{pick(f,locale)}</p>)}<Link className="gb-button" href={href(basePath,'contact')}>{pick(ui.estimate,locale)} ↗</Link><Link className="gb-link" href={href(basePath,'costs')}>{pick(ui.costs,locale)}</Link><small>{pick(ui.demo,locale)}</small></aside></div><section className="gb-section"><h2 style={{marginBottom:36}}>{locale==='zh'?'继续了解':'MORE TO EXPLORE'}</h2><StoryCards locale={locale} basePath={basePath} stories={stories.filter(s=>s.slug!==story.slug).slice(0,2)}/></section>
  </Shell>
}
