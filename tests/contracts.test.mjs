import test from 'node:test'
import assert from 'node:assert/strict'
import {readFile} from 'node:fs/promises'
import {createHash} from 'node:crypto'
const root=new URL('../',import.meta.url)
test('42 项双语费用完整且分类有序',async()=>{const costs=JSON.parse(await readFile(new URL('src/features/site-templates/catalog/graybeam/costs.json',root),'utf8'));assert.equal(costs.length,42);assert.equal(new Set(costs.map(c=>c.id)).size,42);for(const c of costs){for(const field of ['title','desc','unit']){assert.ok(c[field].zh);assert.ok(c[field].en)}assert.match(c.price,/^\$[\d,]+$/)}})
test('运行素材与登记摘要一致',async()=>{const base=new URL('public/templates/graybeam/',root),record=JSON.parse(await readFile(new URL('sources.json',base),'utf8'));for(const a of record.assets){const bytes=await readFile(new URL(a.file,base));assert.equal(createHash('sha256').update(bytes).digest('hex'),a.sha256)}})
