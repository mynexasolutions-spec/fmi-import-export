import { Link } from 'react-router-dom';

const products = [
  {
    image: '/images/tobacco.webp',
    title: 'Tobacco Products',
    description: 'Tobacco leaves, filters, cigarettes and vapes of premium quality.',
  },
  {
    image: '/images/food-items.webp',
    title: 'Foodstuff Items',
    description: 'Rice, grains, fruits, vegetables, and a wide range of packed food.',
  },
  {
    image: '/images/laundry-packing-items.webp',
    title: 'Laundry & Packing Items',
    description: 'Hangers, covers, packaging items and more.',
  },
  {
    image: '/images/Scrap.webp',
    title: 'Scrap',
    description: 'All kinds of metal and industrial scrap materials.',
  },
  {
    image: '/images/tyres.webp',
    title: 'Tyres (Old & New)',
    description: 'High-quality new and used tyres for all vehicle types.',
  },
  {
    image: '/images/drinks.webp',
    title: 'Soft & Energy Drinks',
    description: 'A variety of soft drinks and energy drinks.',
  },
];

function Products() {
  return (
    <section className="products section-padding bg-light">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">OUR PRODUCTS</span>
          <h2>What We Import &amp; Export</h2>
          <p>A diverse range of high-quality products to meet global demands</p>
        </div>
        <div className="products-grid">
          {products.map((product, index) => (
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
  );
}

export default Products;
