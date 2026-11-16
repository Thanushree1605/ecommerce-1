import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header'
import Footer from './components/Footer'
import Loading from './components/Loading'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Auth from './pages/Auth'
import { fetchProducts, useFallbackCatalog } from './store/productsSlice'
import { fallbackProducts } from './services/productService'

export default function App() {
  const dispatch = useDispatch()
  const { status, error, items } = useSelector(state => state.products)
  const darkMode = useSelector(state => state.preferences.darkMode)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
  }, [darkMode])

  // Use the included sample catalog if the public API is unavailable.
  useEffect(() => {
    if (status === 'failed' && !items.length) dispatch(useFallbackCatalog(fallbackProducts))
  }, [status, items.length, dispatch])

  return <div className="app-shell"><Header/>{status === 'loading' && !items.length ? <Loading/> : <>{status === 'failed' && <div className="container api-warning">Live product data could not be loaded. Please check your connection and refresh.</div>}<Routes><Route path="/" element={<Home/>}/><Route path="/shop" element={<Shop/>}/><Route path="/product/:id" element={<ProductDetails/>}/><Route path="/cart" element={<Cart/>}/><Route path="/wishlist" element={<Wishlist/>}/><Route path="/login" element={<Auth/>}/><Route path="/register" element={<Auth/>}/><Route path="*" element={<main className="container page-shell"><h1>Page not found</h1></main>}/></Routes></>}<Footer/></div>
}
