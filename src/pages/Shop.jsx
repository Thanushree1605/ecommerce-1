import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import ProductGrid from '../components/ProductGrid'

export default function Shop() {
  const products = useSelector(state => state.products.items)
  const [params] = useSearchParams()
  const [category, setCategory] = useState(params.get('category') || 'all')
  const [sort, setSort] = useState('featured')
  const [search, setSearch] = useState(params.get('search') || '')
  const categories = [...new Set(products.map(p => p.category).filter(Boolean))]
  const filtered = useMemo(() => {
    let result = products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
    if (category !== 'all') result = result.filter(p => p.category === category)
    if (sort === 'low') result = [...result].sort((a,b) => a.price - b.price)
    if (sort === 'high') result = [...result].sort((a,b) => b.price - a.price)
    if (sort === 'rating') result = [...result].sort((a,b) => b.rating - a.rating)
    return result
  }, [products, category, sort, search])
  const [page, setPage] = useState(1)
  const pageSize = 12
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize))
  const visible = filtered.slice((page - 1) * pageSize, page * pageSize)
  const updateCategory = value => { setCategory(value); setPage(1) }
  return (
    <main className="container page-shell">
      <div className="page-intro"><span className="eyebrow">THE SHOP</span><h1>Find your <em>good thing.</em></h1><p>Useful, beautiful and everyday-worthy. Take a look around.</p></div>
      <div className="shop-toolbar">
        <div className="filter-label"><SlidersHorizontal size={17}/> <strong>Make it yours</strong></div>
        <input className="shop-search" value={search} onChange={e => {setSearch(e.target.value); setPage(1)}} placeholder="Search this collection..."/>
        <select value={category} onChange={e => updateCategory(e.target.value)} aria-label="Filter by category"><option value="all">All categories</option>{categories.map(c => <option key={c} value={c}>{c.replaceAll('-', ' ')}</option>)}</select>
        <select value={sort} onChange={e => setSort(e.target.value)} aria-label="Sort products"><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option><option value="rating">Top rated</option></select>
      </div>
      <div className="results-line"><span>{filtered.length} products</span><span>Thoughtfully picked for you</span></div>
      <ProductGrid products={visible}/>
      {pageCount > 1 && <div className="pagination"><button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button><span>Page {page} of {pageCount}</span><button disabled={page === pageCount} onClick={() => setPage(page + 1)}>Next</button></div>}
    </main>
  )
}
