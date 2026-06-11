"use client";

import {
  useMemo,
  useState,
  useEffect,
  useRef,
} from "react";

import { Search } from "lucide-react";
import { db } from "../../lib/firebase";

import {
  collection,
  onSnapshot,
} from "firebase/firestore"; 

import FoodCard from "../cards/FoodCard";
import ProductModal from "../modals/ProductModal";

const categories = [
  "Deals",
  "Pizza",
  "Burgers",
  "Wraps & Rolls",
  "Curley Fries",
  "Hot Wings",
  "Seafood",
  "Rice",
  "Chicken",
  "Lasagna",
  "Savory",
  "Drinks",
];

export default function MenuSection() {
  const [selectedItem, setSelectedItem] =
    useState(null);

  const [searchQuery, setSearchQuery] =
    useState("");

  const [activeCategory, setActiveCategory] =
    useState("Deals");

const [menu, setMenu] = useState([]);
const [menuLoaded, setMenuLoaded] =
  useState(false);


  const searchRef = useRef(null);
      const filteredMenu = useMemo(() => {
  return menu.filter(
    (product) =>
      `${product.title} ${
        product.description || ""
      }`
        .toLowerCase()
        .includes(
          searchQuery.toLowerCase()
        )
  );
}, [menu, searchQuery]);


  const hasResults =
    filteredMenu.length > 0;
useEffect(() => {

  const unsubscribe =
    onSnapshot(
      collection(db, "menu"),
      (snapshot) => {

       const items =
  snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
const categoryOrder = {
  Deals: 1,
  Burgers: 2,
  Pizza: 3,
  "Wraps & Rolls": 4,
  "Curley Fries": 5,
  Seafood: 6,
  Rice: 7,
  Chicken: 8,
  Savory: 9,
  Lasagna: 10,
  Drinks: 11,
};

items.sort((a, b) => {
  const categoryDiff =
    categoryOrder[a.category] -
    categoryOrder[b.category];

  if (categoryDiff !== 0) return categoryDiff;

  return (a.order || 999) - (b.order || 999);
});
console.log(items);
console.log(
  [...new Set(items.map(item => item.category))]
); 
setMenu(items);

setMenuLoaded(true);

console.log(items);
      }
    );

  return () => unsubscribe();

}, []);

  useEffect(() => {
    const handleScroll = () => {
      for (const category of categories) {
        const section =
          document.getElementById(category);

        if (!section) continue;

        const rect =
          section.getBoundingClientRect();

        if (
          rect.top <= 180 &&
          rect.bottom >= 180
        ) {
          setActiveCategory(category);

          document
            .getElementById(
              `tab-${category}`
            )
            ?.scrollIntoView({
              behavior: "smooth",
              inline: "center",
              block: "nearest",
            });

          break;
        }
      }
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <div className="bg-zinc-100 text-zinc-900 min-h-screen">
      {/* Category Tabs */}
      <div className="sticky top-[80px] z-40 bg-zinc-100 pt-4">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto bg-white rounded-2xl border border-zinc-200 shadow-sm">
          <div className="flex gap-2 py-3 min-w-max">
            {categories.map(
              (category) => (
                <button
                  id={`tab-${category}`}
                  key={category}
                  onClick={() => {
                    setActiveCategory(
                      category
                    );

                    const section =
                      document.getElementById(
                        category
                      );

                    if (section) {
                      const y =
                        section.getBoundingClientRect()
                          .top +
                        window.pageYOffset -
                        220;

                      window.scrollTo({
                        top: y,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className={`px-4 py-2 text-sm rounded-full border transition-all duration-200 font-semibold whitespace-nowrap shadow-sm ${
                    activeCategory ===
                    category
                      ? "bg-[#FFD400] text-black border-[#FFD400]"
                      : "bg-white text-zinc-700 border-zinc-200 hover:border-[#FFD400] hover:text-black"
                  }`}
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Search */}
      <div
        ref={searchRef}
        className="max-w-7xl mx-auto px-4 pt-5"
      >
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
          />

          <input
            type="text"
            placeholder="Search menu..."
            value={searchQuery}
            onChange={(e) =>
              setSearchQuery(
                e.target.value
              )
            }
            className="w-full bg-white border border-zinc-200 rounded-xl pl-11 pr-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-[#FFD400] transition shadow-sm"
          />
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-4">
        {menuLoaded && !hasResults ? (
          <div className="py-20 text-center">
            <h2 className="text-3xl font-bold text-zinc-900">
              No Products Found
            </h2>

            <p className="mt-3 text-zinc-500">
              Try searching for something
              else.
            </p>
          </div>
        ) : (
          categories.map((category) => {
            const categoryItems = filteredMenu
  .filter(
    (product) =>
      product.category === category
  )
  .sort(
    (a, b) =>
      (a.sortOrder || 999) -
      (b.sortOrder || 999)
  );

            if (
              categoryItems.length === 0
            )
              return null;

            return (
              <section
                key={category}
                id={category}
                className="mb-12"
              >
                <h2 className="text-[22px] font-bold mb-5 text-zinc-900">
                  {category}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {categoryItems.map(
                    (product) => (
                      <FoodCard
                        key={product.id}
                        product={product}
                        onCustomize={() =>
                          setSelectedItem(
                            product
                          )
                        }
                      />
                    )
                  )}
                </div>
              </section>
            );
          })
        )}
      </div>

      {/* Mobile Search Button */}
      <button
        onClick={() =>
          searchRef.current?.scrollIntoView(
            {
              behavior: "smooth",
              block: "start",
            }
          )
        }
        className="
          fixed
          bottom-24
          right-4
          h-14
          w-14
          rounded-full
          bg-[#FFD400]
          text-black
          z-50
          md:hidden
          flex
          items-center
          justify-center
          shadow-lg
        "
      >
        <Search size={22} />
      </button>

      {/* Product Modal */}
      {selectedItem && (
        <ProductModal
          item={selectedItem}
          onClose={() =>
            setSelectedItem(null)
          }
        />
      )}
    </div>
  );
}