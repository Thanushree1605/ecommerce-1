import { Link } from 'react-router-dom'
import { ArrowRight, Truck, ShieldCheck, RefreshCw, Sparkles } from 'lucide-react'
import { useSelector } from 'react-redux'
import ProductGrid from '../components/ProductGrid'

export default function Home() {
  const products = useSelector(state => state.products.items)
  const featured = products.slice(0, 4)
  const categories = [
    { name: 'Electronics', slug: 'electronics', note: 'Smart everyday essentials', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800' },
    { name: 'Home decor', slug: 'home-decoration', note: 'Make room for lovely things', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800' },
    { name: 'Skincare', slug: 'skincare', note: 'A little care, every day', image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800' }
  ]
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <span className="eyebrow"><Sparkles size={15}/> THE EVERYDAY EDIT</span>
          <h1>Good things.<br/><em>Better living.</em></h1>
          <p>Discover thoughtful finds, everyday favourites and little upgrades that make a difference.</p>
          <div className="hero-buttons"><Link to="/shop" className="button button-dark">Explore the collection <ArrowRight size={17}/></Link><Link to="/shop" className="text-link">See what's new</Link></div>
          <div className="hero-note"><span className="note-avatars">✦ ✦ ✦</span><span>Loved by curious shoppers everywhere</span></div>
        </div>
        <div className="hero-art">
          <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1100" alt="Curated lifestyle fashion and accessories"/>
          <div className="hero-sticker"><span>THE</span><strong>GOOD<br/>STUFF</strong><span>starts here ↗</span></div>
          <div className="hero-caption">A considered collection · 01/26</div>
        </div>
      </section>
      <section className="benefits container">
        <div><Truck/><span><strong>Free shipping</strong><small>On orders over $75</small></span></div>
        <div><ShieldCheck/><span><strong>Secure checkout</strong><small>Shop with confidence</small></span></div>
        <div><RefreshCw/><span><strong>Easy returns</strong><small>30-day return window</small></span></div>
      </section>
      <section className="section container">
        <div className="section-heading"><div><span className="eyebrow">A GOOD PLACE TO START</span><h2>Shop by <em>mood.</em></h2></div><Link to="/shop" className="text-link">View all categories <ArrowRight size={16}/></Link></div>
        <div className="category-grid">
          {categories.map((cat, i) => <Link to={`/shop?category=${cat.slug}`} className={`category-card category-${i}`} key={cat.slug}><img src={cat.image} alt=""/><div><span>{cat.note}</span><h3>{cat.name}</h3><b>Explore ↗</b></div></Link>)}
        </div>
      </section>
      <section className="section featured-section">
        <div className="container"><div className="section-heading"><div><span className="eyebrow">HAND-PICKED FOR YOU</span><h2>Current <em>favourites.</em></h2></div><Link to="/shop" className="text-link">Shop all products <ArrowRight size={16}/></Link></div><ProductGrid products={featured}/></div>
      </section>
      <section className="editorial container"><div className="editorial-image"><img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1100" alt="Beautifully curated shop interior"/></div><div className="editorial-copy"><span className="eyebrow">LESS, BUT LOVELIER</span><h2>Find your next<br/><em>everyday favourite.</em></h2><p>We believe the best things aren't always the loudest. Browse a considered mix of useful, beautiful and just-because items.</p><Link to="/shop" className="button button-outline">Discover ShopSphere <ArrowRight size={17}/></Link></div></section>
    </>
  )
}
