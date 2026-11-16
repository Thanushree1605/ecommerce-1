import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Heart, ShoppingBag, Star, Truck, ShieldCheck } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/cartSlice'
import { toggleWishlist } from '../store/wishlistSlice'
import Loading from '../components/Loading'

export default function ProductDetails() {
  const { id } = useParams()
  const product = useSelector(state => state.products.items.find(p => String(p.id) === id))
  const [activeImage, setActiveImage] = useState(0)
  const dispatch = useDispatch()
  const saved = useSelector(state => state.wishlist.items.some(item => item.id === product?.id))
  if (!product) return <main className="container page-shell"><Loading/><Link to="/shop" className="text-link">Back to shop</Link></main>
  const images = product.images?.length ? product.images : [product.thumbnail]
  return (
    <main className="container page-shell">
      <Link to="/shop" className="back-link"><ArrowLeft size={16}/> Back to shop</Link>
      <div className="detail-layout">
        <div className="detail-gallery"><div className="detail-main-image"><img src={images[activeImage]} alt={product.title}/></div><div className="thumbnail-row">{images.slice(0,4).map((image,i)=><button className={activeImage === i ? 'active' : ''} onClick={() => setActiveImage(i)} key={image}><img src={image} alt={`${product.title} view ${i+1}`}/></button>)}</div></div>
        <div className="detail-copy"><span className="eyebrow">{(product.category || 'collection').replaceAll('-', ' ')}</span><h1>{product.title}</h1><div className="detail-rating"><Star size={16} fill="currentColor"/> {product.rating || '4.5'} <span>·</span> {product.stock ?? 'In stock'} available</div><div className="detail-price">${Number(product.price).toFixed(2)}</div><p className="detail-description">{product.description}</p><div className="detail-actions"><button className="button button-dark" onClick={() => dispatch(addToCart(product))}><ShoppingBag size={18}/> Add to bag</button><button className={`button button-icon ${saved ? 'is-saved' : ''}`} onClick={() => dispatch(toggleWishlist(product))}><Heart size={19} fill={saved ? 'currentColor' : 'none'}/></button></div><div className="detail-promises"><div><Truck/><span><strong>Free shipping</strong><small>On orders over $75</small></span></div><div><ShieldCheck/><span><strong>Good choice guarantee</strong><small>Easy 30-day returns</small></span></div></div><div className="detail-note"><strong>A note from ShopSphere</strong><p>We choose products that bring a little more joy to the everyday. Thanks for shopping thoughtfully.</p></div></div>
      </div>
    </main>
  )
}
