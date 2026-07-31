import { Link } from 'react-router-dom';

// Import local product images
import tobaccoLeavesImg from '../../products/tobacco-leaves.webp';
import filtersImg from '../../products/filters.webp';
import cigarettesImg from '../../products/cigarettes.webp';
import vapesImg from '../../products/vapes.webp';
import grainsImg from '../../products/grains.webp';
import hangersImg from '../../products/hangers.webp';
import energyDrinksImg from '../../products/energy-drinks.webp';
import coversImg from '../../product-images/covers.webp';
import packagingItemsImg from '../../product-images/packaging-items.webp';
import packedItemsImg from '../../product-images/packed-items.webp';
import industrialScrapeImg from '../../product-images/industrial-scrape.png';
import usedTyresImg from '../../product-images/used-tyres.png';

const productsList = [
  {
    image: tobaccoLeavesImg,
    title: 'Tobacco Leaves',
    description: 'Premium quality raw tobacco leaves sourced globally.',
  },
  {
    image: filtersImg,
    title: 'Filters',
    description: 'High-grade filters for manufacturing and consumer use.',
  },
  {
    image: cigarettesImg,
    title: 'Cigarettes',
    description: 'A wide range of internationally recognized cigarette brands.',
  },
  {
    image: vapesImg,
    title: 'Vapes',
    description: 'Modern vaping devices and premium e-liquids.',
  },
  {
    image: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&w=800&q=80',
    title: 'Rice',
    description: 'Bulk supply of high-quality basmati, jasmine, and long-grain rice.',
  },
  {
    image: grainsImg,
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
    image: packedItemsImg,
    title: 'Packed Food',
    description: 'A diverse selection of ready-to-eat and preserved packed food items.',
  },
  {
    image: hangersImg,
    title: 'Hangers',
    description: 'Durable laundry and wardrobe hangers in various materials.',
  },
  {
    image: coversImg,
    title: 'Covers',
    description: 'Protective covers for clothing, furniture, and industrial use.',
  },
  {
    image: packagingItemsImg,
    title: 'Packaging Items',
    description: 'Cardboard boxes, bubble wrap, tapes, and bulk packaging materials.',
  },
  {
    image: '/images/Scrap.webp',
    title: 'Metal Scrap',
    description: 'Recyclable metal scrap including iron, copper, and aluminum.',
  },
  {
    image: industrialScrapeImg,
    title: 'Industrial Scrap',
    description: 'Various raw and processed scrap materials for industrial recycling.',
  },
  {
    image: '/images/tyres.webp',
    title: 'New Tyres',
    description: 'High-quality brand new tyres for cars, trucks, and heavy machinery.',
  },
  {
    image: usedTyresImg,
    title: 'Used Tyres',
    description: 'Tested and certified used tyres offering great value and performance.',
  },
  {
    image: '/images/drinks.webp',
    title: 'Soft Drinks',
    description: 'Wholesale supply of popular soft drink brands and beverages.',
  },
  {
    image: energyDrinksImg,
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
