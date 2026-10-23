'use client'
import Link from 'next/link'
import { useState, useRef, useEffect, type FormEvent } from 'react'
import { brand } from '../config/brand'
import { image, pick, copy, ui, homeFaq, type Copy, type Story } from '../content'
import type { TemplateLocale } from '../../../types'
import { href, Reveal, type PageProps } from './Shell'
export function Heading({title,intro,kicker,locale='zh'}:{title:Copy;intro?:Copy;kicker?:Copy;locale?:TemplateLocale}) {
  return <div className="gb-heading">{kicker&&<p className="gb-eyebrow">{pick(kicker,locale)}</p>}<h1>{pick(title,locale)}</h1>{intro&&<p className="gb-lead">{pick(intro,locale)}</p>}</div>
}
export function FAQ({locale='zh',items=homeFaq}:{locale?:TemplateLocale;items?:typeof homeFaq}){
  return <section className="gb-section gb-faq"><div><p className="gb-eyebrow">FAQ</p><h2>{locale==='zh'?'问题，\n都可以问':'QUESTIONS.'}</h2><p>{locale==='zh'?'首次勘察时最常听到的四个问题。':'The four we hear at every first site walk.'}</p></div><div>{items.map((item,i)=><details key={i}><summary>{pick(item.q,locale)}<span aria-hidden="true">+</span></summary><p>{pick(item.a,locale)}</p></details>)}</div></section>
}
export function ContactForm({locale='zh',topic=''}:{locale?:TemplateLocale;topic?:string}){
  const [status,setStatus]=useState(''),[errors,setErrors]=useState<Record<string,string>>({})
  const submit=(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault(); const form=event.currentTarget, values=new FormData(form), next:Record<string,string>={}
    for(const name of ['name','phone','type','address','message'])if(!String(values.get(name)??'').trim())next[name]=locale==='zh'?'请填写此项':'This field is required'
    const phone=String(values.get('phone')??''),digits=phone.replace(/\D/g,'');if(phone.trim()&&(!/^[+()\d\s.-]{7,24}$/.test(phone)||digits.length<7||digits.length>15))next.phone=locale==='zh'?'请输入有效联系电话':'Enter a valid phone number'
    setErrors(next)
    if(Object.keys(next).length){setStatus(locale==='zh'?'请检查标出的字段':'Please check the highlighted fields');form.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)?.focus();return}
    // 演示表单没有网络、邮件或存储适配；成功仅表示本地字段校验完成。
    setStatus(locale==='zh'?'本地校验通过。演示信息未发送、未保存。':'Validation passed. Demo information was not sent or saved.')
  }
  const fields=[['name',copy('姓名','Name')],['phone',copy('电话','Phone')],['address',copy('项目地址或地块','Project address or lot')]] as const
  return <form className="gb-form gb-glass" onSubmit={submit} noValidate><h3>{locale==='zh'?'说说您的项目':'Tell us about the project'}</h3><p className="gb-form-note">{pick(ui.formNote,locale)}</p>
    {fields.slice(0,2).map(([name,label])=><label key={name}>{pick(label,locale)}<input name={name} type={name==='phone'?'tel':'text'} required autoComplete={name==='name'?'name':'tel'} aria-invalid={!!errors[name]} aria-describedby={errors[name]?`gb-${name}-error`:undefined}/>{errors[name]&&<small className="gb-error" id={`gb-${name}-error`}>{errors[name]}</small>}</label>)}
    <label>{locale==='zh'?'项目类型':'Project type'}<select name="type" required aria-invalid={!!errors.type} aria-describedby={errors.type?'gb-type-error':undefined} defaultValue=""><option value="">{locale==='zh'?'请选择':'Please select'}</option>{['custom-homes','additions','remodels','whole-home','commercial','not-sure'].map((v,i)=><option key={v} value={v}>{locale==='zh'?['定制住宅','住宅扩建','厨房或浴室改造','整屋翻新','商业空间','尚未确定'][i]:['Custom home','Addition','Kitchen or bath remodel','Whole-home remodel','Commercial build-out','Not sure yet'][i]}</option>)}</select>{errors.type&&<small id="gb-type-error" className="gb-error">{errors.type}</small>}</label>
    <label>{pick(fields[2][1],locale)}<input name="address" required autoComplete="street-address" aria-invalid={!!errors.address} aria-describedby={errors.address?'gb-address-error':undefined}/>{errors.address&&<small id="gb-address-error" className="gb-error">{errors.address}</small>}</label>
    <label>{locale==='zh'?'项目概况（面积、时间、预算）':'Tell us about the project (size, timing, budget)'}<textarea name="message" rows={4} required defaultValue={topic} aria-invalid={!!errors.message} aria-describedby={errors.message?'gb-message-error':undefined}/>{errors.message&&<small id="gb-message-error" className="gb-error">{errors.message}</small>}</label>
    <label className="gb-check"><input type="checkbox" name="drawings"/>{locale==='zh'?'我已有建筑师图纸':'I already have drawings from an architect'}</label>
    <button className="gb-button" type="submit">{locale==='zh'?'校验演示请求':'Validate demo request'} <span aria-hidden="true">↗</span></button><p className="gb-form-status" role="status" aria-live="polite">{status}</p>
  </form>
}
export function Estimate({locale='zh',topic=''}:{locale?:TemplateLocale;topic?:string}){
  return <section className="gb-section gb-estimate" id="estimate"><Reveal><p className="gb-eyebrow">{locale==='zh'?'从现场开始':'START WITH A SITE WALK'}</p><h2>{locale==='zh'?'说清项目\n拿到书面报价':'TELL US THE PROJECT.\nGET A WRITTEN NUMBER.'}</h2><p>{locale==='zh'?'一个工作日内回电，一周内预约现场勘察，勘察后 10 个工作日内提供逐项预算。以下为演示流程。':'A call back within one business day, a site walk within the week, an itemized estimate within 10 business days. Demonstration process.'}</p><div className="gb-stats">{[['1',copy('工作日内回电','day to call back')],['10',copy('工作日报价','days to estimate')],['$0',copy('现场勘察','for the site walk')]].map(([n,label])=><div key={String(n)}><strong>{String(n)}</strong><span>{pick(label as Copy,locale)}</span></div>)}</div><p>{locale==='zh'?'想先聊聊？':'Rather talk?'}</p><a className="gb-phone" href={'tel:'+brand.telephone}>{brand.phone}</a></Reveal><ContactForm locale={locale} topic={topic}/></section>
}
export function StoryCards({stories,locale='zh',basePath}:PageProps&{stories:Story[]}){
  return <div className="gb-card-grid">{stories.map((story,i)=><Reveal key={story.slug}><Link className="gb-story-card" href={href(basePath,story.slug)}><div className="gb-image-wrap"><img loading="lazy" src={image(story.image)} alt={pick(story.title,locale)}/><span className="gb-image-number">{String(i+1).padStart(2,'0')}</span></div><div className="gb-card-caption"><h3>{pick(story.title,locale)}</h3><span aria-hidden="true">↗</span></div><p>{pick(story.intro,locale)}</p></Link></Reveal>)}</div>
}
export function Compare({before,after,title,locale='zh'}:{before:string;after:string;title:string;locale?:TemplateLocale}){
  const [position,setPosition]=useState(50),[expanded,setExpanded]=useState(false),dialog=useRef<HTMLDialogElement>(null),trigger=useRef<HTMLButtonElement>(null)
  useEffect(()=>{if(expanded)dialog.current?.showModal();else if(dialog.current?.open)dialog.current.close()},[expanded])
  return <><div className="gb-compare"><img src={image(before)} alt={title+' · '+pick(ui.before,locale)}/><img className="gb-compare-after" style={{clipPath:`inset(0 0 0 ${position}%)`}} src={image(after)} alt={title+' · '+pick(ui.after,locale)}/><span className="gb-before-label">{pick(ui.before,locale)}</span><span className="gb-after-label">{pick(ui.after,locale)}</span><div className="gb-divider" style={{left:position+'%'}}/><label className="gb-range-label">{locale==='zh'?'拖动查看改造前后':'Drag to compare before and after'}<input type="range" min="0" max="100" value={position} onChange={e=>setPosition(Number(e.target.value))}/></label><button ref={trigger} className="gb-expand" aria-label={locale==='zh'?'放大项目图片':'Enlarge project image'} onClick={()=>setExpanded(true)}>⤢</button></div><dialog className="gb-dialog" ref={dialog} onCancel={()=>setExpanded(false)} onClose={()=>{setExpanded(false);trigger.current?.focus()}}><button onClick={()=>setExpanded(false)} aria-label={locale==='zh'?'关闭图片':'Close image'}>×</button><img src={image(after)} alt={title}/><p>{title} · {pick(ui.after,locale)}</p></dialog></>
}
