const ProductCard = ({ product }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img
      src={product.Image}
      alt={product.Name}
      className="w-full h-64 object-cover"
    />
    <div className="p-4 flex flex-col h-full">
      <div className="flex justify-between items-baseline mb-2">
        <h3 className="text-xl font-semibold text-gray-900 font-serif">{product.Name}</h3>
        <p className="text-lg font-bold text-green-700">{product.Price}</p>
      </div>
      <p className="text-gray-600 text-sm mb-2">{product.Description}</p>
      <p className="text-gray-500 text-sm italic">{product.Category}</p>
    </div>
  </div>
);

export default ProductCard;
