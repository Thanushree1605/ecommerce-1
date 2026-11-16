import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProductGrid from '../components/ProductGrid'

export default function Wishlist() {
  const items = useSelector(state => state.wishlist.items)
  return <main className="container page-shell"><div className="page-intro compact-intro"><span className="eyebrow">SAVED FOR LATER</span><h1>Your <em>wishlist.</em></h1><p>A little collection of things you've got your eye on.</p></div>{items.length ? <ProductGrid products={items}/> : <div className="empty-state"><Heart size={40}/><h2>No saved finds just yet.</h2><p>Tap the heart on anything you like and it'll be here.</p><Link to="/shop" className="button button-dark">Browse products</Link></div>}</main>
}
