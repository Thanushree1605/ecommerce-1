import { Link } from 'react-router-dom'
import { ArrowRight, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeFromCart, selectCartItems, selectCartTotal } from '../store/cartSlice'

export default function Cart() {
  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)
  const dispatch = useDispatch()
  const shipping = total === 0 || total >= 75 ? 0 : 6.99
  return (
    <main className="container page-shell">
      <div className="page-intro compact-intro"><span className="eyebrow">YOUR PICKS</span><h1>Your shopping <em>bag.</em></h1><p>{items.length ? 'The good things you picked out.' : 'Your bag is waiting for something lovely.'}</p></div>
      {!items.length ? <div className="empty-state cart-empty"><ShoppingBag size={42}/><h2>It's a little empty here.</h2><p>Find something that feels just right.</p><Link to="/shop" className="button button-dark">Explore the shop <ArrowRight size={17}/></Link></div> :
      <div className="cart-layout"><div className="cart-items">{items.map(item=><article className="cart-item" key={item.id}><Link to={`/product/${item.id}`} className="cart-thumb"><img src={item.thumbnail || item.images?.[0]} alt={item.title}/></Link><div className="cart-item-info"><span className="product-category">{item.category?.replaceAll('-', ' ')}</span><Link to={`/product/${item.id}`} className="product-title">{item.title}</Link><strong>${Number(item.price).toFixed(2)}</strong><div className="quantity-control"><button onClick={() => dispatch(decreaseQuantity(item.id))} aria-label="Decrease quantity"><Minus size={14}/></button><span>{item.quantity}</span><button onClick={() => dispatch(increaseQuantity(item.id))} aria-label="Increase quantity"><Plus size={14}/></button></div></div><button className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}><Trash2 size={17}/> Remove</button></article>)}</div>
      <aside className="order-summary"><h2>Order summary</h2><div><span>Subtotal</span><strong>${total.toFixed(2)}</strong></div><div><span>Shipping</span><strong>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</strong></div><div className="summary-total"><span>Total</span><strong>${(total + shipping).toFixed(2)}</strong></div><p>{total >= 75 ? 'You unlocked free shipping. Lovely!' : `Add $${(75-total).toFixed(2)} more for free shipping.`}</p><button className="button button-dark checkout-button" onClick={() => alert('This is a frontend demo. Payment checkout is not connected.')}>Continue to checkout <ArrowRight size={17}/></button><Link to="/shop" className="continue-link">Continue shopping</Link></aside></div>}
    </main>
  )
}
