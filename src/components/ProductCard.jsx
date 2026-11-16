import { Link } from 'react-router-dom'
import { Heart, ShoppingBag, Star } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/cartSlice'
import { toggleWishlist } from '../store/wishlistSlice'

const money = value => `$${Number(value).toFixed(2)}`

export default function ProductCard({ product }) {
  const dispatch = useDispatch()
  const saved = useSelector(state => state.wishlist.items.some(item => item.id === product.id))
  const price = product.price
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <Link to={`/product/${product.id}`} className="product-image-link">
          <img src={product.thumbnail || product.images?.[0]} alt={product.title} loading="lazy"/>
        </Link>
        <button className={`wishlist-button ${saved ? 'is-saved' : ''}`} onClick={() => dispatch(toggleWishlist(product))} aria-label={saved ? 'Remove from wishlist' : 'Add to wishlist'}><Heart size={18} fill={saved ? 'currentColor' : 'none'}/></button>
        <button className="quick-add" onClick={() => dispatch(addToCart(product))}><ShoppingBag size={16}/> Add to bag</button>
      </div>
      <div className="product-info">
        <span className="product-category">{(product.category || 'everyday').replaceAll('-', ' ')}</span>
        <Link to={`/product/${product.id}`} className="product-title">{product.title}</Link>
        <div className="product-meta"><strong>{money(price)}</strong><span><Star size={13} fill="currentColor"/> {product.rating || '4.5'}</span></div>
      </div>
    </article>
  )
}
