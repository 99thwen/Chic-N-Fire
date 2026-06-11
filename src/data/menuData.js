const pizzaFlavors = [
  "Chick'n'Fire Premium",
  "Chick'n'Fire Spanish",
  "Chick'n'Fire Kabab Pizza",
  "Chick'n'Fire Crown Crust",
  "Chick'n'Fire Special",
  "Calzone Pizza",
  "Chicken BBQ",
  "Special Fish Pizza",
  "Jalapeno Pizza",
  "Chicken Supreme",
  "Chick'n'Fire Choice",
  "Chick'n'Fire Deep Dish",
  "Hot and Spicy",
  "Chicken Tikka",
  "Chicken Fajita",
  "Chicken Cheese",
  "Veggie Lover",
  "Cheese Lover",
  "Chick'n'Fire Creamy Melt",
  "Lebanese Pizza",
];

const drinkFlavors = [
  "Pepsi",
  "7UP",
  "Mountain Dew",
];

export const menuData = [

{
  id: 1,
  category: "Deals",
  title: "Pizza Deal 1",
  description:
    "Medium Special Pizza, 2 Zinger Burgers, 2 Regular Fries and 1.5L Drink.",
  price: 2450,
  image: "/foods/deal1.webp",
 available: true,
 order: 5, 
  pizzaVariations: pizzaFlavors,
  drinkVariations: drinkFlavors,
},

{
  id: 2,
  category: "Deals",
  title: "Pizza Deal 2",
  description:
    "Medium Special Pizza, Medium Supreme Pizza and 1.5L Drink.",
  price: 2450,
  image: "/foods/deal2.webp",
 available: true,
 order: 6, 
  pizza1Variations: pizzaFlavors,
  pizza2Variations: pizzaFlavors,
   drinkVariations: drinkFlavors,
},

{
  id: 3,
  category: "Deals",
  title: "Pizza Deal 3",
  description:
    "Large Special Pizza, Small Chicken Tikka Pizza and 1.5L Drink.",
  price: 2490,
  image: "/foods/deal3.webp",
 available: true,
 order: 7, 
     pizza1Variations: pizzaFlavors,
  pizza2Variations: pizzaFlavors,
  drinkVariations: drinkFlavors,
},


{
  id: 4,
  category: "Deals",
  title: "Student Deal",
  description:
    "Small Supreme Pizza, 2 Zinger Burgers and 2 Regular Drinks.",
  price: 1860,
  image: "/foods/deal4.webp",
 available: true,
 order: 8, 
 pizzaVariations: pizzaFlavors,
drink1Variations: drinkFlavors,
drink2Variations: drinkFlavors,
},

{
  id: 5,
  category: "Deals",
  title: "Zinger Meal",
  description:
    "Crispy Zinger Burger served with Regular Fries and a Drink.",
  price: 740,
  image: "/foods/deal5.webp",
 available: true,
 order: 12, 
  drinkVariations: [
    "Pepsi",
    "7UP",
    "Mountain Dew",
  ],
},

{
  id: 6,
  category: "Deals",
  title: "Steam Zinger Meal",
  description:
    "Steam Zinger Burger served with Regular Fries and a Drink.",
  price: 740,
  image: "/foods/deal6.webp",
 available: true,
 order: 14, 
  drinkVariations: drinkFlavors,
},

{
  id: 7,
  category: "Deals",
  title: "WOW Meal 1",
  description: "Zinger Burger, Chicken Piece and a Refreshing Drink.",
  price: 830,
  image: "/foods/meal1.webp",
   available: true,
   order: 9, 
   drinkVariations: drinkFlavors,
},
{
  id: 8,
  category: "Deals",
  title: "WOW Meal 2",
  description: "Zinger Burger, Chicken Piece, Regular Fries and a Refreshing Drink.",
  price: 990,
  image: "/foods/meal2.webp",
   available: true,
   order: 10, 
  drinkVariations: drinkFlavors,
},
{
  id: 9,
  category: "Deals",
  title: "WOW Meal 3",
  description: "3 Chicken Pieces served with a Regular Drink.",
  price: 850,
   available: true,
   order: 11, 
  image: "/foods/meal3.webp",
  drinkVariations: drinkFlavors,
},

{
  id: 10,
  category: "Deals",
  title: "Special Meal",
  description: "Special Burger served with Regular Fries and a Drink.",
  price: 920,
   available: true,
  image: "/foods/meal4.webp",
  order: 15, 
  drinkVariations: drinkFlavors,
},
{
  id: 11,
  category: "Deals",
  title: "Fire Steak Meal",
   description: "Chicken Steak Burger served with Regular Fries and a Drink.",
  price: 920,
   available: true,
   order: 16, 
  image: "/foods/meal5.webp",
  drinkVariations: drinkFlavors,
},

{
  id: 12,
  category: "Deals",
  title: "Mighty Zinger Meal",
    description: "Mighty Zinger Burger served with Regular Fries and a Drink.",
  price: 920,
   available: true,
   order: 13, 
  image: "/foods/meal6.webp",
  drinkVariations: drinkFlavors,
},

{
  id: 13,
  category: "Deals",
  title: "Tower Meal",
  description: "Tower Burger served with Regular Fries and a Drink.",
  price: 920,
   available: true,
   order: 17, 
  image: "/foods/meal7.webp",
  drinkVariations: drinkFlavors,
},
{
  id: 14,
  category: "Deals",
  title: "Crisp Cheese Burger Meal",
  description: "Crisp Cheese Burger served with Regular Fries and a Drink.",
  price: 920,
   available: true,
   order: 18, 
  image: "/foods/meal8.webp",
  drinkVariations: drinkFlavors,
},
{
  id: 15,
  category: "Deals",
  title: "Chicken Stuff Cheese Burger Meal",
    description: "Stuffed Cheese Burger served with Regular Fries and a Drink.",
  price: 890,
   available: true,
   order: 19, 
  image: "/foods/meal9.webp",
  drinkVariations: drinkFlavors,
},
{
  id: 16,
  category: "Deals",
  title: "Tikka Stuff Cheese Meal",
    description: "Tikka Stuffed Cheese Burger served with Regular Fries and a Drink.",
  price: 890,
   available: true,
   order: 20, 
  image: "/foods/meal10.webp",
  drinkVariations: drinkFlavors,
},
{
  id: 17,
  category: "Deals",
  title: "Beef Burger Meal",
    description: "Beef Burger served with Regular Fries and a Drink.",
  price: 890,
   available: true,
   order: 21, 
  image: "/foods/meal11.webp",
  drinkVariations: drinkFlavors,
},
{
  id: 18,
  category: "Deals",
  title: "Fish Meal",
  description: "Fish Burger served with Regular Fries and a Drink.",
  price: 890,
   available: true,
   order: 22, 
  image: "/foods/meal12.webp",
  drinkVariations: drinkFlavors,
},
{
  id: 19,
  category: "Deals",
  title: "Jalapeno Cheese Burger Meal",
  description: "Jalapeno Cheese Burger served with Regular Fries and a Drink.",
  price: 790,
   available: true,
   order: 23, 
  image: "/foods/meal13.webp",
  drinkVariations: drinkFlavors,
},
{
  id: 20,
  category: "Deals",
  title: "Firestone Meal",
  description: "Fire Stone Burger served with Regular Fries and a Drink.",
  price: 650,
   available: true,
   order: 24, 
  image: "/foods/meal14.webp",
  drinkVariations: drinkFlavors,
},
{
  id: 21,
  category: "Deals",
  title: "Chicken Burger Meal",
  description: "Chicken Burger served with Regular Fries and a Drink.",
  price: 680,
   available: true,
   order: 27, 
  image: "/foods/meal15.webp",
 drinkVariations: drinkFlavors,
},
{
  id: 22,
  category: "Deals",
  title: "Chicken Grill Stuff Burger Meal",
  description: "Chicken Grill Stuff Burger served with Regular Fries and a Drink.",
  price: 920,
   available: true,
   order: 25, 
  image: "/foods/meal16.webp",
  drinkVariations: drinkFlavors,
},
{
  id: 23,
  category: "Deals",
  title: "Crispy Meal",
  description: "Crispy Burger served with Regular Fries and a Drink.",
  price: 680,
   available: true,
   order: 28, 
  image: "/foods/meal17.webp",
  drinkVariations: drinkFlavors,
},
{
  id: 24,
  category: "Deals",
  title: "Tikka Meal",
  description: "Tikka Burger served with Regular Fries and a Drink.",
  price: 680,
   available: true,
   order: 29, 
  image: "/foods/meal18.webp",
  drinkVariations: drinkFlavors,
},
{
  id: 25,
  category: "Deals",
  title: "Chicken Grill Burger Meal",
  description: "Chicken Grill Burger served with Regular Fries and a Drink.",
  price: 730,
   available: true,
   order: 26, 
  image: "/foods/meal18.webp",
  drinkVariations: drinkFlavors,
},
{
  id: 26,
  category: "Deals",
  title: "Wings Deal",
  description: "10 Hot Wings served with Regular Fries and a Refreshing Drink.",
  price: 850,
   available: true,
   order: 30, 
  image: "/foods/meal19.webp",
  drinkVariations: drinkFlavors,
},
{
  id: 27,
  category: "Deals",
  title: "Fish Deal",
   description: "2 Fish Fillets served with Regular Fries and a Refreshing Drink.",
  price: 850,
   available: true,
   order: 31, 
  image: "/foods/meal20.webp",
  drinkVariations: drinkFlavors,
},
{
  id: 28,
  category: "Deals",
  title: "2 Person Deal",
  description: "2 Zinger Burgers, 2 Chicken Pieces, Large Fries and 2 Regular Drinks.",
  price: 2070,
   available: true,
   order: 1, 
  image: "/foods/meal21.webp",
  drinkVariations: drinkFlavors,
},
{
  id: 29,
  category: "Deals",
  title: "3 Person Deal",
  description: "3 Zinger Burgers, Large Fries and a 1.5L Drink.",
  price: 2070,
  order: 2, 
   available: true,
  image: "/foods/meal22.webp",
  drinkVariations: drinkFlavors,
},
{
  id: 30,
  category: "Deals",
  title: "Family Deal 1",
  description: "4 Zinger Burgers, 4 Chicken Pieces, Fries, Arabian Rice and a 1.5L Drink.",
  price: 3560,
   available: true,
   order: 3, 
  image: "/foods/meal23.webp",
  drinkVariations: drinkFlavors,
},
{
  id: 31,
  category: "Deals",
  title: "Family Deal 2",
  description: "4 Crispy Burgers, 4 Chicken Pieces, 2 Regular Fries, 8 Nuggets and a 1.5L Drink.",
  price: 3350,
   available: true,
   order: 4, 
  image: "/foods/meal24.webp",
  drinkVariations: drinkFlavors,
},



{

  id: 32,
  category: "Burgers",
  title: "Special Burger",
  description: "Signature chicken burger loaded with fresh ingredients and sauces.",
  price: 680,
   available: true,
   order: 4, 
  image: "/foods/specialburger.webp",
  

},



{

  id: 33, 
  category: "Burgers",
  title: "Stuffed Cheese Burger", 
  description: "Chicken burger filled with rich melted cheese.",
  price: 680,
   available: true,
   order: 7, 
  image: "/foods/cheeseburger.webp",
  
},

{

  id: 34, 
  category: "Burgers",
  title: "Chicken Steak Burger",
    description: "Grilled chicken steak burger served with fresh toppings.",
  price: 680,
   available: true,
   order: 6, 
  image: "/foods/chsteak.webp",
  

},

{
  id: 35, 
  category: "Burgers",
  title: "Tower Burger", 
    description: "Crispy chicken fillet stacked with fresh lettuce and sauce.",
  price: 680,
   available: true,
   order: 5, 
  image: "/foods/tower.webp",
  
},



{
  id: 36, 
  category: "Burgers",
  title: "Beef Stuffed Cheese Burger", 
    description: "Juicy beef burger stuffed with melted cheese.",
  price: 680,
   available: true,
   order: 10, 
  image: "/foods/beefstuffed.webp",
  

},



{
  id: 37, 
  category: "Burgers",
  title: "Tikka Stuffed Cheese Burger", 
    description: "Tikka-flavored chicken burger filled with creamy cheese.",
  price: 680,
   available: true,
   order: 8, 
  image: "/foods/tikkastuf.webp",
  
},

{
  id: 38,
  category: "Burgers",
  title: "Chicken Grill Stuffed Cheese Burger",
    description: "Grilled chicken burger stuffed with rich melted cheese.",
  price: 650,
   available: true,
   order: 9, 
  image: "/foods/chickenburger.webp",
 
},

{
  id: 39,
  category: "Burgers",
  title: "Crisp Cheese Burger",
    description: "Crispy chicken burger topped with melted cheese.",
  price: 650,
   available: true,
   order: 11, 
  image: "/foods/specialburger.webp",
  
},


{
  id: 40,
  category: "Burgers",
  title: "Firestone Burger",
  description: "Classic chicken burger with signature Firestone flavor.",
  price: 650,
   available: true,
   order: 18, 
  image: "/foods/firestone.webp",
 
},



{
  id: 41,
  category: "Burgers",
  title: "Mighty Zinger Burger",
  description: "Extra-large zinger burger loaded with cheese.",
  price: 650,
   available: true,
   order: 2, 
  image: "/foods/mightyzinger.webp",

},



{
  id: 42,
  category: "Burgers",
  title: "Fish Burger",
  description: "Crispy fish fillet burger served with signature sauce.",
  price: 650,
  order: 17, 
   available: true,
  image: "/foods/fishburger.webp",
 
},



{
  id: 43,
  category: "Burgers",
  title: "Steam Zinger Burger",
  description: "Steamed zinger burger with tender chicken and fresh toppings.",
  price: 650,
  order: 3, 
   available: true,
  image: "/foods/steamzinger.webp",
  
},



{
  id: 44,
  category: "Burgers",
  title: "Zinger Burger",
  description: "Crispy zinger fillet burger served with fresh lettuce and sauce.",
  price: 650,
  order: 1, 
   available: true,
  image: "/foods/zingerburger.webp",

},



{
  id: 45,
  category: "Burgers",
  title: "Jalapeno Burger",
  description: "Chicken burger topped with spicy jalapenos and sauce.",
  price: 650,
  order: 12, 
   available: true,
  image: "/foods/jalapeno.webp",

},



{
  id: 46,
  category: "Burgers",
  title: "Chicken Burger",
  description: "Classic chicken burger prepared fresh and served hot.",
  price: 650,
   available: true,
   order: 14, 
  image: "/foods/chickenburger.webp",
 
},



{
  id: 47,
  category: "Burgers",
  title: "Crispy Burger",
  description: "Crispy chicken burger with fresh vegetables and sauce.",
  price: 650,
  order: 15, 
   available: true,
  image: "/foods/crispy.webp",

},



{
  id: 48,
  category: "Burgers",
  title: "Tikka Burger",
  description: "Chicken tikka burger packed with traditional flavor.",
  price: 650,
  order: 16, 
   available: true,
  image: "/foods/tikkastuf.webp",
 
},



{
  id: 49,
  category: "Burgers",
  title: "Chicken Grill Burger",
  description: "Grilled chicken burger served with fresh toppings and sauce.",
  price: 650,
   available: true,
   order: 13, 
  image: "/foods/chgrillburger.webp",
 
},





{
  id: 50,
  category: "Pizza",
  title: "Chick'n'Fire Premium",
  description: "Loaded with double chicken, smoked veal, fresh vegetables and lots of melted cheese.",
  price: 790,
   available: true,
   order: 1, 
  image: "/foods/pizza1.webp",
variations: [
  { name: "Small", price: 790 },
  { name: "Medium", price: 1390 },
  { name: "Large", price: 1690 },
  { name: "XL", price: 2290 },
]},
{
  id: 51,
  category: "Pizza",
  title: "Chick'n'Fire Spanish",
  description: "Double chicken, creamy sauce, capsicum, onion and a generous layer of cheese.",
  price: 790,
   available: true,
   order: 3, 
  image: "/foods/pizza3.webp",
variations: [
  { name: "Small", price: 790 },
  { name: "Medium", price: 1390 },
  { name: "Large", price: 1690 },
  { name: "XL", price: 2290 },
]},
{
  id: 52,
  category: "Pizza",
  title: "Chick'n'Fire Kabab Pizza",
  description: "Spicy kabab slices, melted cheese, tomato and capsicum on a fresh baked crust.",
  price: 850,
   available: true,
   order: 12, 
  image: "/foods/kababp.webp",
  variations: [
  { name: "Small", price: 850 },
  { name: "Medium", price: 1450 },
  { name: "Large", price: 1750 },
  { name: "XL", price: 2350 },
]
},
{
  id: 53,
  category: "Pizza",
  title: "Chick'n'Fire Crown Crust",
  description: "Double chicken, double cheese, creamy white sauce and mayo drizzle.",
  price: 790,
   available: true,
   order: 5, 
  image: "/foods/crowncrust.webp",
variations: [
  { name: "Small", price: 790 },
  { name: "Medium", price: 1390 },
  { name: "Large", price: 1690 },
  { name: "XL", price: 2290 },
]},
{
  id: 54,
  category: "Pizza",
  title: "Chick'n'Fire Special",
   description: "A delicious mix of chicken, smoked veal, sausages, mushrooms and cheese.",
  price: 790,
   available: true,
   order: 2, 
  image: "/foods/pizza9.webp",
variations: [
  { name: "Small", price: 790 },
  { name: "Medium", price: 1390 },
  { name: "Large", price: 1690 },
  { name: "XL", price: 2290 },
]},
{
  id: 55,
  category: "Pizza",
  title: "Calzone Pizza",
  description: "BBQ chicken, cheese, onion, tomato and green peppers baked to perfection.",
  price: 790,
   available: true,
   order: 16, 
  image: "/foods/pizza8.webp",
variations: [
  { name: "Small", price: 790 },
  { name: "Medium", price: 1390 },
  { name: "Large", price: 1690 },
  { name: "XL", price: 2290 },
]},
{
  id: 56,
  category: "Pizza",
  title: "Chicken BBQ",
  description: "BBQ chicken, cheese, onion, tomato and green peppers baked to perfection.",
  price: 790,
   available: true,
   order: 11, 
  image: "/foods/pizza2.webp",
variations: [
  { name: "Small", price: 790 },
  { name: "Medium", price: 1390 },
  { name: "Large", price: 1690 },
  { name: "XL", price: 2290 },
]},
{
  id: 57,
  category: "Pizza",
  title: "Special Fish Pizza",
  description: "Tender fish chunks, mushrooms, olives, capsicum and rich melted cheese.",
  price: 790,
   available: true,
   order: 17, 
  image: "/foods/fishpizza.webp",
variations: [
  { name: "Small", price: 790 },
  { name: "Medium", price: 1390 },
  { name: "Large", price: 1690 },
  { name: "XL", price: 2290 },
]},
{
  id: 58,
  category: "Pizza",
  title: "Jalapeno Pizza",
  description: "Chicken, jalapenos, mushrooms, capsicum and cheese with a spicy kick.",
  price: 790,
   available: true,
   order: 14, 
  image: "/foods/jalapenopizza.webp",
variations: [
  { name: "Small", price: 790 },
  { name: "Medium", price: 1390 },
  { name: "Large", price: 1690 },
  { name: "XL", price: 2290 },
]},
{
  id: 59,
  category: "Pizza",
  title: "Chicken Supreme",
  description: "Chicken chunks, fajita chicken, sausages and fresh vegetables in every bite.",
  price: 790,
   available: true,
   order: 8, 
  image: "/foods/supreme.webp",
variations: [
  { name: "Small", price: 790 },
  { name: "Medium", price: 1390 },
  { name: "Large", price: 1690 },
  { name: "XL", price: 2290 },
]},
{
  id: 60,
  category: "Pizza",
  title: "Chick'n'Fire  Choice",
   description:
    "A satisfying combo featuring our signature chicken favorites, served fresh and packed with flavor.",
  price: 790,
   available: true,
   order: 6, 
  image: "/foods/pizza6.webp",
variations: [
  { name: "Small", price: 790 },
  { name: "Medium", price: 1390 },
  { name: "Large", price: 1690 },
  { name: "XL", price: 2290 },
]},
{
  id: 61,
  category: "Pizza",
  title: "Chick'n'Fire Deep Dish",
   description: "Beef pepperoni, sausages, extra cheese and black olives on a loaded crust.",
  price: 790,
   available: true,
   order: 7, 
  image: "/foods/deepdishp.webp",
variations: [
  { name: "Small", price: 790 },
  { name: "Medium", price: 1390 },
  { name: "Large", price: 1690 },
  { name: "XL", price: 2290 },
]},
{
  id: 62,
  category: "Pizza",
  title: "Hot and Spicy",
   description: "Spicy chicken, green chilies, mushrooms, onion and tomato with a fiery kick.",
  price: 790,
   available: true,
   order: 15, 
  image: "/foods/pizza8.webp",
variations: [
  { name: "Small", price: 790 },
  { name: "Medium", price: 1390 },
  { name: "Large", price: 1690 },
  { name: "XL", price: 2290 },
]},
{
  id: 63,
  category: "Pizza",
  title: "Chicken Tikka",
  description: "Chicken tikka, cheese, capsicum and tandoori sauce on a freshly baked crust.",
  price: 790,
   available: true,
   order: 10, 
  image: "/foods/pizza9.webp",
variations: [
  { name: "Small", price: 790 },
  { name: "Medium", price: 1390 },
  { name: "Large", price: 1690 },
  { name: "XL", price: 2290 },
]},
{
  id: 64,
  category: "Pizza",
  title: "Chicken Fajita",
  description: "Chicken, smoked veal, garlic, green peppers and onion with rich cheese.",
  price: 790,
   available: true,
   order: 9, 
  image: "/foods/fajita.webp",
variations: [
  { name: "Small", price: 790 },
  { name: "Medium", price: 1390 },
  { name: "Large", price: 1690 },
  { name: "XL", price: 2290 },
]},
{
  id: 65,
  category: "Pizza",
  title: "Chicken Cheese",
  description: "A simple combination of tender chicken, melted cheese and signature sauce.",
  price: 790,
   available: true,
   order: 20, 
  image: "/foods/chickencheesep.webp",
variations: [
  { name: "Small", price: 790 },
  { name: "Medium", price: 1390 },
  { name: "Large", price: 1690 },
  { name: "XL", price: 2290 },
]},
{
  id: 66,
  category: "Pizza",
  title: "Veggie Lover",
  description: "Fresh vegetables, sweet corn, olives, mushrooms and capsicum with cheese.",
  price: 680,
   available: true,
  image: "/foods/pizza8.webp",
  order: 19, 
 variations: [
  { name: "Small", price: 680 },
  { name: "Medium", price: 1050 },
  { name: "Large", price: 1260 },
  { name: "XL", price: 1730 },
]},
{
  id: 67,
  category: "Pizza",
  title: "Cheese Lover",
  description: "Loaded with rich melted cheese for the ultimate cheese experience.",
  price: 680,
   available: true,
   order: 18, 
  image: "/foods/pizza9.webp",
  variations: [
  { name: "Small", price: 680 },
  { name: "Medium", price: 1050 },
  { name: "Large", price: 1260 },
  { name: "XL", price: 1730 },
]
},
{
  id: 68,
  category: "Pizza",
  title: "Chick'n'Fire Creamy Melt",
   description: "Double chicken, cream cheese, capsicum and special sauce baked to perfection.",
  price: 790,
   available: true,
   order: 4, 
  image: "/foods/creamymelt.webp",
variations: [
  { name: "Small", price: 790 },
  { name: "Medium", price: 1390 },
  { name: "Large", price: 1690 },
  { name: "XL", price: 2290 },
]},
{
  id: 69,
  category: "Pizza",
  title: "Lebanese Pizza",
  description: "Chicken, rich cheese, olives and signature Lebanese-style sauce.",
  price: 790,
   available: true,
   order: 13, 
  image: "/foods/pizza5.webp",
  variations: [
  { name: "Small", price: 920 },
  { name: "Medium", price: 1450 },
]
},





{
  id: 70,
  category: "Rice",
  title: "Arabian Rice",
  description: "Aromatic Arabian-style rice seasoned with signature spices.",
  price: 300,
   available: true,
   order:7, 
  image: "/foods/arabianrice.webp",
 
},
{
  id: 71,
  category: "Rice",
  title: "Rice & Spice (3 Wings)",
  description: "Flavorful rice served with 3 crispy chicken wings.",
  price: 550,
   available: true,
   order: 8, 
  image: "/foods/rice1.webp",

},
{
  id: 72,
  category: "Rice",
  title: "Rice & Spice (3 Fish Pieces)",
  description: "Seasoned rice served with 3 crispy fish pieces.",
  price: 550,
   available: true,
   order: 9, 
  image: "/foods/rice2.webp",

},
{
  id: 73,
  category: "Savory",
  title: "Cream Chaat",
  description: "A creamy and refreshing chaat topped with flavorful ingredients.",
  price: 300,
   available: true,
   order: 10, 
  image: "/foods/creamchaat.webp",

},

{
  id: 75,
  category: "Wraps & Rolls",
  title: "Behari Roll",
  description: "Tender Behari-style chicken wrapped in a freshly made paratha.",
  price: 580,
   available: true,
   order: 11, 
  image: "/foods/behari.webp",
  
},
{
  id: 76,
  category: "Fried Items",
  title: "Chicken Chunks",
  description: "Crispy chicken chunks seasoned and fried until golden.",
  price: 500,
   available: true,
   order: 12, 
  image: "/foods/chunks.webp",

},
{
  id: 77,
  category: "Seafood",
  title: "Fish Chunks",
  description: "Tender fish chunks coated in crispy seasoned crumbs.",
  price: 740,
   available: true,
   order: 13, 
  image: "/foods/fishchunks.webp",
 
},
{
  id: 78,
  category: "Curley Fries ",
  title: "Pizza Fries",
  description: "Tender fish chunks coated in crispy seasoned crumbs.",
  price: 830,
   available: true,
   order: 14, 
  image: "/foods/pizzafries.webp",
  
},
{
  id: 79,
  category: "Wraps & Rolls",
  title: "French Roll",
  description: "Freshly prepared roll packed with flavorful fillings and sauces.",
  price: 550,
   available: true,
   order: 15, 
  image: "/foods/roll.webp",

},
{
  id: 80,
  category: "Seafood",
  title: "Fish Delight (5 Pieces)",
  description: "Five crispy fish pieces served hot and freshly prepared.",
  price: 740,
   available: true,
   order: 16, 
  image: "/foods/fish.webp",

},
{
  id: 81,
  category: "Wraps & Rolls",
  title: "French Bread",
  description: "Freshly baked bread topped with cheese and signature seasonings.",
  price: 550,
   available: true,
   order: 17, 
  image: "/foods/roll.webp",

},
{
  id: 82,
  category: "Seafood",
  title: "Fish & Chips",
  description: "Crispy fish fillets served with golden fries and dipping sauce.",
  price: 850,
   available: true,
   order: 18, 
  image: "/foods/fishchips.webp",

},

{
  id: 84,
  category: "Chicken",
  title: "Chicken Strips",
  description: "Tender chicken strips coated in a crispy golden crust.",
  price: 500,
   available: true,
   order: 19, 
  image: "/foods/strips.webp",
  
},

{
  id: 86,
  category: "Hot Wings",
  title: "Hot Wings",
   description: "Crispy chicken wings tossed in a bold spicy seasoning.",
  price: 330,
   available: true,
   order: 20, 
  image: "/foods/wings1.webp",
  variations: [
  {
    name: "5 Pieces",
    price: 330,
  },
  {
    name: "10 Pieces",
    price: 600,
  },
]
},
{
  id: 87,
  category: "Hot Wings",
  title: "Mayo Wings",
  description: "Crispy wings coated with creamy signature mayo sauce.",
  price: 350,
  order: 21, 
  image: "/foods/mayowings.webp",
   available: true,
 variations: [
   {
    name: "5 Pieces",
    price: 350,
  },
  {
  name: "10 Pieces",
  price: 630,
}
]
},
{
  id: 88,
  category: "Hot Wings",
  title: "Cheese Mayo Wings",
   description: "Juicy wings covered with creamy cheese mayo sauce.",
  price: 350,
  image: "/foods/wings3.webp",
   available: true,
   order: 22, 
 variations: [
    {
    name: "5 Pieces",
    price: 350,
  },
  {
    name: "10 Pieces",
    price: 630,
  },
]
},
{
  id: 89,
  category: "Hot Wings",
  title: "BBQ Wings",
  description: "Chicken wings glazed with smoky and flavorful BBQ sauce.",
  price: 380,
  image: "/foods/wings4.webp",
   available: true,
   order: 23, 
  variations: [
  {
    name: "5 Pieces",
    price: 300,
  },
  {
    name: "10 Pieces",
    price: 600,
  },
]
},
{
  id: 90,
  category: "Hot Wings",
  title: "Oven Baked Wings",
   description: "Tender oven-baked chicken seasoned with signature spices.",
  price: 400,
  image: "/foods/wings.webp",
   available: true,
   order: 24, 
 variations: [
  {
    name: "5 Pieces",
    price: 300,
  },
  {
    name: "10 Pieces",
    price: 600,
  },
]
  
},
{
  id: 91,
  category: "Chicken",
  title: "Chicken Piece",
  description: "Crispy fried chicken prepared fresh and served hot.",
  price: 260,
   available: true,
   order: 18,
  image: "/foods/chickenpiece.webp",
  variations: [
  {
    name: "1 Piece",
    price: 260,
  },
  {
    name: "3 Pieces",
    price: 760,
  },
  {
    name: "5 Pieces",
    price: 1260,
  },
  {
    name: "8 Pieces",
    price: 2020,
  },
]
  
},
{
  id: 92,
  category: "Chicken",
  title: "Steam Chicken Piece",
   description: "Tender steamed chicken prepared with light seasoning.",
  price: 260,
   available: true,
   order: 19,
  image: "/foods/steamed.webp",
 
},

{
  id: 94,
  category: "Fried Items",
  title: "Nuggets",
  description: "Golden chicken nuggets served crispy on the outside and tender inside.",
  price: 350,
  image: "/foods/nuggets.webp",
   available: true,
   order: 25, 
 variations: [
  {
    name: "5 Pieces",
    price: 260,
  },
  {
    name: "10 Pieces",
    price: 580,
  },
]
},
{
  id: 95,
  category: "Fried Items",
  title: "Mayo Nuggets",
  description: "Crispy nuggets served with creamy mayo flavor.",
  price: 400,
  image: "/foods/mayonuggets.webp",
   available: true,
   order: 26,
variations: [
  {
    name: "5 Pieces",
    price: 320,
  },
  {
    name: "10 Pieces",
    price: 600,
  },
]
},
{
  id: 96,
  category: "Fried Items",
  title: "Cheese Mayo Nuggets",
  description: "Chicken nuggets coated with rich cheese mayo sauce.",
  price: 450,
  image: "/foods/wings.webp",
   available: true,
   order: 27, 
variations: [
  {
    name: "5 Pieces",
    price: 320,
  },
  {
    name: "10 Pieces",
    price: 600,
  },
]

},

{
  id: 97,
  category: "Wraps & Rolls",
  title: "Chicken Cheese Bun (2 Pc)",
  description: "Soft buns stuffed with chicken and melted cheese.",
  price: 550,
  image: "/foods/buns2.webp",
   available: true,
   order: 37,
},
{
  id: 98,
  category: "Wraps & Rolls",
  title: "Beef Cheese Bun (2 Pc)",
  description: "Soft buns filled with seasoned beef and melted cheese.",
  price: 650,
  image: "/foods/buns1.webp",
   available: true,
   order: 38,
},
{
  id: 99,
category: "Lasagna",
  title: "Italian Lasagna",
   available: true,
  description:
    "Layers of pasta, rich meat sauce, creamy cheese, and Italian herbs baked to perfection.",
 price: 1050, 
  image: "/foods/starter2.webp",
  order: 39,
},
{
  id: 100,
  category: "Drinks",
  title: "Soft Drink",
  image: "/foods/drink.webp",
  available: true,
  description:
    "Refreshing chilled soft drinks served ice cold for the perfect meal companion.",
  drinkVariations: drinkFlavors,

  variations: [
    { name: "Can", price: 120 },
    { name: "500ml", price: 150 },
    { name: "1.5L", price: 250 },
  ],
  order: 1,
},
{
  id: 101,
  category: "Drinks",
  title: "Water",
  description: "Pure chilled mineral water.",
  image: "/foods/water.webp",
  available: true,
  variations: [
    { name: "500ml", price: 60 },
    { name: "1.5L", price: 120 },
  ],
  order: 2,
},
{
  id: 102,
  category: "Drinks",
  title: "Sting",
  description: "Energy drink served chilled.",
  image: "/foods/sting.webp",
  available: true,
  order: 3,
  variations: [
    { name: "Can", price: 120 },
    { name: "500ml", price: 180 },
  ],
},
{
  id: 103,
  category: "Wraps & Rolls",
  title: "Chicken Paratha Roll",
  description: "Chicken Paratha Roll.",
  price: 400,
  image: "/foods/paratharoll.webp",
  available: true,
  order: 10,
},

{
  id: 104,
  category: "Wraps & Rolls",
  title: "Fish Paratha Roll",
  description: "Fish Paratha Roll.",
  price: 400,
  image: "/foods/fishroll.webp",
  available: true,
  order: 11,
},

{
  id: 105,
  category: "Wraps & Rolls",
  title: "Kabab Paratha Roll",
  description: "Kabab Paratha Roll.",
  price: 350,
  image: "/foods/kababsh.webp",
  available: true,
  order: 12,
},

{
  id: 106,
  category: "Wraps & Rolls",
  title: "Zinger Paratha Roll",
  description: "Zinger Paratha Roll.",
  price: 400,
  image: "/foods/zingerroll.webp",
  available: true,
  order: 13,
},
{
  id: 107,
  category: "Wraps & Rolls",
  title: "Chicken Wrap",
  description: "Chicken Wrap.",
  price: 360,
  image: "/foods/wraps.webp",
  available: true,
  order: 15,
},

{
  id: 108,
  category: "Wraps & Rolls",
  title: "Fish Wrap",
  description: "Fish Wrap.",
  price: 400,
  image: "/foods/fishwrap.webp",
  available: true,
  order: 16,
},

{
  id: 109,
  category: "Wraps & Rolls",
  title: "Kabab Wrap",
  description: "Kabab Wrap.",
  price: 360,
  image: "/foods/kwrap.webp",
  available: true,
  order: 17,
},
{
  id: 110,
  category: "Wraps & Rolls",
  title: "Chicken Shawarma",
  description: "Chicken Shawarma.",
  price: 260,
  image: "/foods/shawarma.webp",
  available: true,
  order: 4, 
},

{
  id: 111,
  category: "Wraps & Rolls",
  title: "Kabab Shawarma",
  description: "Kabab Shawarma.",
  price: 280,
  image: "/foods/kababsh.webp",
  available: true,
  order: 5,
},

{
  id: 112,
  category: "Wraps & Rolls",
  title: "Fish Shawarma",
  description: "Fish Shawarma.",
  price: 280,
  image: "/foods/fishsh.webp",
  available: true,
  order: 6,
},

{
  id: 113,
  category: "Wraps & Rolls",
  title: "Chicken Garlic Shawarma",
  description: "Chicken Garlic Shawarma.",
  price: 270,
  image: "/foods/chshawarma.webp",
  available: true,
  order: 7,
},

{
  id: 114,
  category: "Wraps & Rolls",
  title: "Cheese Shawarma",
  description: "Cheese Shawarma.",
  price: 280,
  image: "/foods/cheeses.webp",
  available: true,
  order: 8,
},

{
  id: 115,
  category: "Wraps & Rolls",
  title: "Zinger Shawarma",
  description: "Zinger Shawarma.",
  price: 280,
  image: "/foods/zshawarma.webp",
  available: true,
  order: 9,
},




{
  id: 116,
  category: "Curley Fries",
  title: "Fries",
  description: "Crispy golden curley fries served hot.",
  price: 450,
  image: "/foods/fries.webp",
  available: true,
  order: 1,
},

{
  id: 117,
  category: "Curley Fries",
  title: "Mayo Fries",
  description: "Curley fries topped with creamy mayo.",
  price: 450,
  image: "/foods/mayofries.webp",  
  available: true,
  order: 2,
},

{
  id: 118,
  category: "Curley Fries",
  title: "BBQ Fries",
  description: "Curley fries loaded with smoky BBQ sauce.",
  price: 450,
  image: "/foods/bbqfries.webp",
  available: true,
  order: 3,
},

{
  id: 119,
  category: "Curley Fries",
  title: "Mayo Garlic Fries",
  description: "Curley fries topped with mayo and garlic sauce.",
  price: 450,
  image: "/foods/mayogarlicfries.webp",
  available: true,
  order: 4,
},

{
  id: 120,
  category: "Curley Fries",
  title: "Mayo Cheese Fries",
  description: "Curley fries layered with cheese and creamy mayo.",
  price: 540,
  image: "/foods/mayocheesefries.webp",
  available: true,
  order: 5,
},

{
  id: 121,
  category: "Curley Fries",
  title: "Family Fries",
  description: "Large family-size serving of crispy curley fries.",
  price: 500,
  image: "/foods/famfries.webp",
  available: true,
  order: 6,
},
];