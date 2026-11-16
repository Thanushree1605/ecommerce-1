import ProductCard from './ProductCard'
export default function ProductGrid({ products }) {
  if (!products.length) return <div className="empty-state"><h3>No products found</h3><p>Try a different search or category.</p></div>
  return <div className="product-grid">{products.map(product => <ProductCard key={product.id} product={product}/>)}</div>
}
