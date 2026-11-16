import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Search, ShoppingBag, Heart, Menu, X, Sun, Moon, Store } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartCount } from '../store/cartSlice'
import { toggleTheme } from '../store/preferencesSlice'

export default function Header() {
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const count = useSelector(selectCartCount)
  const darkMode = useSelector(state => state.preferences.darkMode)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submitSearch = e => {
    e.preventDefault()
    navigate(`/shop?search=${encodeURIComponent(query)}`)
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="announcement">A little something good — free shipping on orders over $75</div>
      <div className="header-main container">
        <button className="icon-button mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={21}/> : <Menu size={21}/>}
        </button>
        <Link to="/" className="brand"><span className="brand-mark"><Store size={19}/></span> shop<span>sphere</span></Link>
        <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/shop" onClick={() => setMenuOpen(false)}>Shop all</NavLink>
          <NavLink to="/wishlist" onClick={() => setMenuOpen(false)}>Wishlist</NavLink>
        </nav>
        <form className="header-search" onSubmit={submitSearch}>
          <Search size={17}/>
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search products..." aria-label="Search products"/>
          <button type="submit">Search</button>
        </form>
        <div className="header-actions">
          <button className="icon-button theme-toggle" onClick={() => dispatch(toggleTheme())} aria-label="Toggle dark mode">
            {darkMode ? <Sun size={20}/> : <Moon size={20}/>}
          </button>
          <Link to="/wishlist" className="icon-button" aria-label="Wishlist"><Heart size={20}/></Link>
          <Link to="/cart" className="icon-button cart-link" aria-label="Shopping cart"><ShoppingBag size={20}/><span className="cart-count">{count}</span></Link>
        </div>
      </div>
    </header>
  )
}
