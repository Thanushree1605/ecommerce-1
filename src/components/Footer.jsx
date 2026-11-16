import { Link } from 'react-router-dom'
import { Instagram, Facebook, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div><Link to="/" className="brand footer-brand">shop<span>sphere</span></Link><p>Thoughtful finds for everyday living. Discover pieces you'll love to use, wear and share.</p></div>
        <div><h4>Explore</h4><Link to="/shop">Shop all</Link><Link to="/wishlist">Your wishlist</Link><Link to="/cart">Shopping bag</Link></div>
        <div><h4>Need help?</h4><a href="mailto:hello@shopsphere.example">Contact us</a><span>Shipping & returns</span><span>FAQs</span></div>
        <div><h4>Stay in the loop</h4><p>Fresh finds and good things, occasionally.</p><div className="socials"><a href="#instagram" aria-label="Instagram"><Instagram size={18}/></a><a href="#facebook" aria-label="Facebook"><Facebook size={18}/></a><a href="#top" aria-label="Back to top"><ArrowUpRight size={18}/></a></div></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 ShopSphere. Student project.</span><span>Made for good finds.</span></div>
    </footer>
  )
}
