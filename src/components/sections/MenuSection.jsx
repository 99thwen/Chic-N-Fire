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
import SkeletonCard from "../cards/SkeletonCard";
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
  "Fried Items",
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
      `${product.title} ${product.description || ""}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
  );
}, [menu, searchQuery]);
const hasResults = filteredMenu.length > 0;

useEffect(() => {

  const startTime = performance.now();

  const unsubscribe =
    onSnapshot(
      collection(db, "menu"),
      (snapshot) => {

        console.log(
          "Firestore load:",
          Math.round(performance.now() - startTime),
          "ms"
        );

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
  "Hot Wings": 9,
  "Fried Items": 10,
  Savory: 11,
  Lasagna: 12,
  Drinks: 13,
};

items.sort((a, b) => {
  const categoryDiff =
    categoryOrder[a.category] -
    categoryOrder[b.category];

  if (categoryDiff !== 0) return categoryDiff;

  return (a.order || 999) - (b.order || 999);
});

setMenu(items);
setMenuLoaded(true);
console.log("Items loaded:", items.length);

      }   // closes (snapshot) => {
    );     // closes onSnapshot()

  return () => unsubscribe();

}, []);

useEffect(() => {
  const handleScroll = () => {
    let closestCategory = null;
    let closestDistance = Infinity;

    categories.forEach((category) => {
      const section =
        document.getElementById(category);

      if (!section) return;

      const distance = Math.abs(
        section.getBoundingClientRect().top - 220
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestCategory = category;
      }
    });

    if (closestCategory) {
      setActiveCategory(closestCategory);

      document
        .getElementById(
          `tab-${closestCategory}`
        )
        ?.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
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
          <div className="max-w-7xl mx-auto px-4 overflow-x-hidden scrollbar-hide bg-white rounded-2xl border border-zinc-200 shadow-sm">
            <div className="flex gap-2 py-3 min-w-max scrollbar-hide">
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
      {/* Products */}
<div className="max-w-7xl mx-auto px-4 pt-8 pb-4">

  {!menuLoaded ? (

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
  {Array.from({ length: 9 }).map((_, index) => (
    <SkeletonCard key={index} />
  ))}
</div>
  ) : (
    menuLoaded && !hasResults ? (
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
key={`${product.category}-${product.id}`}
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

                  
        )
      )}

</div>

      {/* Mobile Search Button */}
      <button
      aria-label="Search Menu"
  title="Search Menu"
       onClick={() => {
  searchRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  setTimeout(() => {
    searchRef.current
      ?.querySelector("input")
      ?.focus();
  }, 500);
}}
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