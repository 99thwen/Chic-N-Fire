export default function Categories({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="sticky top-[80px] z-40 bg-zinc-100 pt-4">
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto bg-white rounded-2xl border border-zinc-200 shadow-sm">

        <div className="flex gap-2 py-3 min-w-max">

          {categories.map((item) => (

            <button
              key={item}
              onClick={() =>
                setSelectedCategory(item)
              }
              className={`px-4 py-2 text-sm rounded-full border transition-all duration-200 font-semibold whitespace-nowrap shadow-sm ${
                selectedCategory === item
                  ? "bg-[#FFD400] text-black border-[#FFD400]"
                  : "bg-white text-zinc-700 border-zinc-200 hover:border-[#FFD400] hover:text-black"
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