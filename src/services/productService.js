const fallbackProducts = [
  { id: 101, title: 'Studio Wireless Headphones', description: 'Immersive sound, soft memory-foam cushions and a long-lasting battery make these headphones your everyday companion.', price: 89.99, discountPercentage: 12, rating: 4.8, stock: 18, brand: 'Soundform', category: 'electronics', thumbnail: 'https://images.unsplash.com/photo-1509114397022-ed747kdf3c1f?w=700', images: ['https://images.unsplash.com/photo-1509114397022-ed747kdf3c1f?w=900'], badge: 'Bestseller' },
  { id: 102, title: 'Minimal Ceramic Vase', description: 'A sculptural ceramic vase with a matte finish. Designed to bring a quiet, considered touch to your space.', price: 34.50, discountPercentage: 0, rating: 4.6, stock: 24, brand: 'Forma Home', category: 'home-decoration', thumbnail: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=700', images: ['https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=900'], badge: 'New' },
  { id: 103, title: 'Everyday Canvas Tote', description: 'A roomy, durable canvas tote with reinforced handles and an inside pocket for the things you reach for most.', price: 24.00, discountPercentage: 10, rating: 4.7, stock: 31, brand: 'North & Co.', category: 'womens-bags', thumbnail: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=700', images: ['https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=900'] },
  { id: 104, title: 'Classic Analog Watch', description: 'A clean dial, brushed metal details and a comfortable strap. A timeless piece for every day.', price: 119.00, discountPercentage: 15, rating: 4.9, stock: 12, brand: 'Aster', category: 'mens-watches', thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700', images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900'], badge: 'Popular' },
  { id: 105, title: 'Daily Skincare Set', description: 'A simple three-step routine to cleanse, hydrate and refresh. Gentle everyday essentials.', price: 42.00, discountPercentage: 5, rating: 4.5, stock: 20, brand: 'Kind Skin', category: 'skincare', thumbnail: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=700', images: ['https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=900'] },
  { id: 106, title: 'Modern Desk Lamp', description: 'Focused, warm lighting in a compact silhouette. An easy upgrade for your work or reading corner.', price: 58.00, discountPercentage: 8, rating: 4.4, stock: 15, brand: 'Forma Home', category: 'lighting', thumbnail: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=700', images: ['https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=900'] },
  { id: 107, title: 'Leather Crossbody Bag', description: 'A versatile compact bag with an adjustable strap and thoughtful compartments for daily essentials.', price: 76.00, discountPercentage: 0, rating: 4.7, stock: 9, brand: 'North & Co.', category: 'womens-bags', thumbnail: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700', images: ['https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900'] },
  { id: 108, title: 'Portable Bluetooth Speaker', description: 'Take your favourite soundtrack anywhere with rich, balanced audio in a compact design.', price: 64.00, discountPercentage: 10, rating: 4.6, stock: 22, brand: 'Soundform', category: 'electronics', thumbnail: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=700', images: ['https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=900'] }
]

export async function getProducts() {
  const response = await fetch('https://dummyjson.com/products?limit=100')
  if (!response.ok) throw new Error('Product service is currently unavailable.')
  const data = await response.json()
  return data.products.map(product => ({
    ...product,
    images: product.images?.length ? product.images : [product.thumbnail]
  }))
}

export { fallbackProducts }
