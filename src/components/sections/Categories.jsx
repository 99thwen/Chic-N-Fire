export default function Categories({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="sticky top-16 z-50 bg-white border-b border-zinc-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-4 overflow-x-auto">

        <div className="flex gap-3 py-4 min-w-max">

          {categories.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(item)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition whitespace-nowrap border ${
                selectedCategory === item
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-zinc-700 border-zinc-200 hover:border-orange-500 hover:text-orange-500"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

      </div>

    </div>
  );
}