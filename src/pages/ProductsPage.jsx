import { Link } from 'react-router-dom';

const productsList = [
  {
    image: 'https://images.unsplash.com/photo-1579237691880-77a83d297920?auto=format&fit=crop&w=800&q=80',
    title: 'Tobacco Leaves',
    description: 'Premium quality raw tobacco leaves sourced globally.',
  },
  {
    image: 'https://images.unsplash.com/photo-1590240361324-406606869bba?auto=format&fit=crop&w=800&q=80',
    title: 'Filters',
    description: 'High-grade filters for manufacturing and consumer use.',
  },
  {
    image: 'https://images.unsplash.com/photo-1525992994464-a6984eaf8b35?auto=format&fit=crop&w=800&q=80',
    title: 'Cigarettes',
    description: 'A wide range of internationally recognized cigarette brands.',
  },
  {
    image: 'https://images.unsplash.com/photo-1534069818815-5853f937d10e?auto=format&fit=crop&w=800&q=80',
    title: 'Vapes',
    description: 'Modern vaping devices and premium e-liquids.',
  },
  {
    image: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&w=800&q=80',
    title: 'Rice',
    description: 'Bulk supply of high-quality basmati, jasmine, and long-grain rice.',
  },
  {
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?auto=format&fit=crop&w=800&q=80',
    title: 'Grains',
    description: 'Nutritious grains including wheat, barley, and oats.',
  },
  {
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80',
    title: 'Fruits',
    description: 'Fresh and preserved seasonal fruits exported worldwide.',
  },
  {
    image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=800&q=80',
    title: 'Vegetables',
    description: 'Farm-fresh vegetables handled with utmost care.',
  },
  {
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    title: 'Packed Food',
    description: 'A diverse selection of ready-to-eat and preserved packed food items.',
  },
  {
    image: 'https://images.unsplash.com/photo-1582735689309-84b256dbd5b6?auto=format&fit=crop&w=800&q=80',
    title: 'Hangers',
    description: 'Durable laundry and wardrobe hangers in various materials.',
  },
  {
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=800&q=80',
    title: 'Covers',
    description: 'Protective covers for clothing, furniture, and industrial use.',
  },
  {
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    title: 'Packaging Items',
    description: 'Cardboard boxes, bubble wrap, tapes, and bulk packaging materials.',
  },
  {
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
    title: 'Metal Scrap',
    description: 'Recyclable metal scrap including iron, copper, and aluminum.',
  },
  {
    image: 'https://images.unsplash.com/photo-1510368142345-d85f818cc634?auto=format&fit=crop&w=800&q=80',
    title: 'Industrial Scrap',
    description: 'Various raw and processed scrap materials for industrial recycling.',
  },
  {
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
    title: 'New Tyres',
    description: 'High-quality brand new tyres for cars, trucks, and heavy machinery.',
  },
  {
    image: 'https://images.unsplash.com/photo-1601614995345-42fc7d189f72?auto=format&fit=crop&w=800&q=80',
    title: 'Used Tyres',
    description: 'Tested and certified used tyres offering great value and performance.',
  },
  {
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
    title: 'Soft Drinks',
    description: 'Wholesale supply of popular soft drink brands and beverages.',
  },
  {
    image: 'https://images.unsplash.com/photo-1550985543-f47f38aee80b?auto=format&fit=crop&w=800&q=80',
    title: 'Energy Drinks',
    description: 'A wide range of stimulating energy drinks for global distribution.',
  },
];

function ProductsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Products</h1>
          <p>A diverse range of high-quality products to meet global demands.</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products section-padding bg-light">
        <div className="container">
          <div className="products-grid">
            {productsList.map((product, index) => (
              <div className="product-card" key={index}>
                <div className="product-img">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="product-content">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <Link to="/contact" className="btn btn-primary btn-sm">
                    <i className="fa-solid fa-envelope"></i> Contact
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="simple-cta" style={{ padding: '80px 0', backgroundColor: 'var(--primary-color)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '20px' }}>Interested in our products?</h2>
          <p style={{ fontSize: '1.15rem', opacity: '0.9', marginBottom: '30px' }}>
            We supply high-quality goods globally. Get in touch with our sales team today to discuss your requirements.
          </p>
          <Link to="/contact" className="btn btn-white" style={{ fontSize: '1.1rem', padding: '12px 30px' }}>
            Get a Quote Now
          </Link>
        </div>
      </section>
    </>
  );
}

export default ProductsPage;
