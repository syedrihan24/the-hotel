/**
 * ==============================================================================
 * HOTEL XYZ - MENU DATA
 * ==============================================================================
 * This file contains all the food items shown on the website.
 * 
 * HOW TO EDIT THIS FILE:
 * 1. To change a price: Edit the `price` number (in Indian Rupees ₹).
 * 2. To change a name or description: Edit the `name` or `description` strings.
 * 3. To mark an item as Vegetarian: Set `isVeg: true`.
 * 4. To mark an item as Non-Vegetarian: Set `isVeg: false`.
 * 5. To add a new item: Copy any block between { ... }, paste it, and update details.
 * ==============================================================================
 */

export const MENU_CATEGORIES = [
  "All",
  "Starters",
  "Main Course",
  "Biryani & Rice",
  "Breads",
  "Beverages",
  "Desserts"
];

export const MENU_ITEMS = [
  // -------------------------------------------------------------
  // STARTERS
  // -------------------------------------------------------------
  {
    id: "starters-1",
    name: "Tandoori Paneer Tikka",
    category: "Starters",
    price: 240,
    isVeg: true,
    description: "Cubes of fresh cottage cheese marinated in hung curd, Kashmiri chili, and spices, roasted golden in our clay oven.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=700&q=80",
    tags: ["Chef's Pick", "Tandoor"]
  },
  {
    id: "starters-2",
    name: "Chicken Seekh Kebab",
    category: "Starters",
    price: 290,
    isVeg: false,
    description: "Spiced minced chicken skewers infused with fresh coriander, mint, ginger, and skewered over glowing charcoal embers.",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=700&q=80",
    tags: ["Popular", "Smoky"]
  },
  {
    id: "starters-3",
    name: "Hara Bhara Kebab",
    category: "Starters",
    price: 210,
    isVeg: true,
    description: "Crispy pan-fried patties made from fresh spinach, green peas, potatoes, and mild aromatic whole spices.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
    tags: ["Crispy", "Healthy"]
  },
  {
    id: "starters-4",
    name: "Amritsari Fish Fry",
    category: "Starters",
    price: 330,
    isVeg: false,
    description: "Tender river sole fillets coated in a spiced carom seed (ajwain) and gram flour batter, crisp-fried to perfection.",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=700&q=80",
    tags: ["Seafood", "Crispy"]
  },
  {
    id: "starters-5",
    name: "Crispy Masala Corn",
    category: "Starters",
    price: 180,
    isVeg: true,
    description: "Sweet corn kernels tossed with chopped onions, green chilies, chaat masala, and a splash of fresh lime.",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=700&q=80",
    tags: ["Quick Bite"]
  },

  // -------------------------------------------------------------
  // MAIN COURSE
  // -------------------------------------------------------------
  {
    id: "mains-1",
    name: "Old Delhi Butter Chicken",
    category: "Main Course",
    price: 360,
    isVeg: false,
    description: "Char-grilled boneless tandoori chicken simmered in a silky, slow-cooked tomato, butter, and cashew gravy finished with kasuri methi.",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=700&q=80",
    tags: ["Signature Dish", "Mildly Spiced"]
  },
  {
    id: "mains-2",
    name: "Dal Makhani (Slow-Cooked)",
    category: "Main Course",
    price: 250,
    isVeg: true,
    description: "Whole black lentils and kidney beans slow-simmered overnight over charcoal with churned butter and fresh cream.",
    image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&w=700&q=80",
    tags: ["Family Secret", "Comfort Food"]
  },
  {
    id: "mains-3",
    name: "Paneer Lababdar",
    category: "Main Course",
    price: 290,
    isVeg: true,
    description: "Soft cottage cheese chunks cooked in an onion-tomato reduction enriched with grated paneer, melon seeds, and fragrant spices.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80",
    tags: ["Vegetarian Delight"]
  },
  {
    id: "mains-4",
    name: "Mutton Rogan Josh",
    category: "Main Course",
    price: 420,
    isVeg: false,
    description: "Slow-braised tender goat meat cooked with Kashmiri red chilies, fennel seed powder, and rich aromatic marrow sauce.",
    image: "https://images.unsplash.com/photo-1545247181-516773cae7be?auto=format&fit=crop&w=700&q=80",
    tags: ["Traditional Recipe"]
  },
  {
    id: "mains-5",
    name: "Kadhai Mushroom Masala",
    category: "Main Course",
    price: 260,
    isVeg: true,
    description: "Fresh button mushrooms and crunchy bell peppers tossed in a rustic wok sauce pounded with coriander and black pepper.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",
    tags: ["Spicy & Tangy"]
  },

  // -------------------------------------------------------------
  // BIRYANI & RICE
  // -------------------------------------------------------------
  {
    id: "biryani-1",
    name: "Hyderabadi Dum Chicken Biryani",
    category: "Biryani & Rice",
    price: 340,
    isVeg: false,
    description: "Long-grain aged basmati rice layered with spiced chicken, caramelized onions, saffron milk, and sealed for authentic dum cooking.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80",
    tags: ["All-Time Favorite", "Dum Cooked"]
  },
  {
    id: "biryani-2",
    name: "Shahi Subz Dum Biryani",
    category: "Biryani & Rice",
    price: 270,
    isVeg: true,
    description: "Fragrant basmati rice layered with garden vegetables, paneer cubes, mint, coriander, and gentle aromatic whole spices.",
    image: "https://images.unsplash.com/photo-1642821373181-696a54913e9a?auto=format&fit=crop&w=700&q=80",
    tags: ["Vegetarian Dum"]
  },
  {
    id: "biryani-3",
    name: "Jeera Basmati Rice",
    category: "Biryani & Rice",
    price: 160,
    isVeg: true,
    description: "Fluffy steamed long-grain basmati rice tempered with roasted cumin seeds and desi ghee.",
    image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&w=700&q=80",
    tags: ["Classic Side"]
  },

  // -------------------------------------------------------------
  // BREADS (TANDOOR)
  // -------------------------------------------------------------
  {
    id: "breads-1",
    name: "Garlic Butter Naan",
    category: "Breads",
    price: 75,
    isVeg: true,
    description: "Soft leavened flatbread baked in the clay oven, generously brushed with roasted garlic butter and fresh coriander.",
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=700&q=80",
    tags: ["Clay Tandoor"]
  },
  {
    id: "breads-2",
    name: "Butter Naan",
    category: "Breads",
    price: 60,
    isVeg: true,
    description: "Classic tender Indian flatbread freshly baked against hot tandoor walls and brushed with pure butter.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
    tags: ["Fresh Baked"]
  },
  {
    id: "breads-3",
    name: "Lachha Paratha",
    category: "Breads",
    price: 65,
    isVeg: true,
    description: "Multi-layered flaky whole wheat bread baked crisp on the outside and wonderfully soft inside.",
    image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=700&q=80",
    tags: ["Whole Wheat"]
  },
  {
    id: "breads-4",
    name: "Tandoori Roti (Plain / Butter)",
    category: "Breads",
    price: 35,
    isVeg: true,
    description: "Traditional 100% whole wheat flatbread baked directly over live charcoal in our earthen oven.",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=700&q=80",
    tags: ["Healthy Choice"]
  },

  // -------------------------------------------------------------
  // BEVERAGES
  // -------------------------------------------------------------
  {
    id: "drinks-1",
    name: "Alphonso Mango Lassi",
    category: "Beverages",
    price: 130,
    isVeg: true,
    description: "Thick, creamy yogurt drink blended with sweet Alphonso mango pulp and garnished with crushed pistachios.",
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=700&q=80",
    tags: ["Refreshing"]
  },
  {
    id: "drinks-2",
    name: "Special Masala Chai",
    category: "Beverages",
    price: 60,
    isVeg: true,
    description: "Slow-brewed Assam tea leaves infused with crushed ginger, green cardamom, cloves, and whole milk.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=700&q=80",
    tags: ["House Special"]
  },
  {
    id: "drinks-3",
    name: "Fresh Lime Soda (Sweet & Salty)",
    category: "Beverages",
    price: 80,
    isVeg: true,
    description: "Freshly squeezed key limes mixed with chilled sparkling soda, rock salt, and mint leaves.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80",
    tags: ["Cooling"]
  },

  // -------------------------------------------------------------
  // DESSERTS
  // -------------------------------------------------------------
  {
    id: "dessert-1",
    name: "Warm Gulab Jamun with Rabri",
    category: "Desserts",
    price: 140,
    isVeg: true,
    description: "Melt-in-mouth reduced milk dumplings soaked in cardamom rose syrup, served alongside chilled thick rabri.",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=700&q=80",
    tags: ["Traditional"]
  },
  {
    id: "dessert-2",
    name: "Kesar Pista Rasmalai (2 pcs)",
    category: "Desserts",
    price: 150,
    isVeg: true,
    description: "Delicate flattened chenna discs steeped in sweetened, saffron-infused milk cream topped with slivered almonds and pistachios.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
    tags: ["Sweet Comfort"]
  },
  {
    id: "dessert-3",
    name: "Desi Ghee Moong Dal Halwa",
    category: "Desserts",
    price: 160,
    isVeg: true,
    description: "Rich winter delicacy prepared from yellow lentils slow-roasted in pure cow ghee and infused with cardamom and toasted nuts.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80",
    tags: ["Winter Classic"]
  }
];
