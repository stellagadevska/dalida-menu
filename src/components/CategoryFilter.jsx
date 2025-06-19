const CategoryFilter = ({ categories, selected, onChange }) => (
  <div className="flex flex-wrap justify-center gap-3 py-4 bg-gray-50">
    {categories.map((cat) => {
      const isActive = cat === selected;
      const className = `px-4 py-2 rounded-full border transition ${
        isActive
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-800 hover:bg-gray-100"
      }`;
      return (
        <button key={cat} onClick={() => onChange(cat)} className={className}>
          {cat}
        </button>
      );
    })}
  </div>
);

export default CategoryFilter;
