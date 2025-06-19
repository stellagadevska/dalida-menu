import ProductCard from './ProductCard';

const ProductList = ({ products }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {products.map((item, idx) => (
      <ProductCard key={idx} product={item} />
    ))}
  </div>
);

export default ProductList;
