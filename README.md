# 🍽️ Hotel XYZ - Modern Local Indian Restaurant Website

Welcome to the **Hotel XYZ** website project! This project was built with **React**, **Vite**, and clean **Vanilla CSS** to demonstrate how to build an elegant, responsive, and well-structured restaurant website.

---

## 🚀 How to Run the Project Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18 or newer).

### Step 1: Open the Terminal in this Folder
Navigate to the project directory:
```bash
cd hotel-xyz
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to the local link shown in the terminal (usually `http://localhost:5173`).

---

## 📁 Project Folder Structure

```
hotel-xyz/
├── public/
│   └── favicon.svg               # Restaurant browser tab icon
├── src/
│   ├── components/               # Individual website sections (reusable components)
│   │   ├── Navbar.jsx            # Sticky navigation bar with mobile menu
│   │   ├── Hero.jsx              # Welcome banner, tagline, and call-to-action buttons
│   │   ├── Menu.jsx              # Food menu with category & veg/non-veg filters
│   │   ├── MenuItemCard.jsx      # Individual dish card (image, price, veg badge, description)
│   │   ├── Chef.jsx              # Profile of Head Chef Ahmed Khan
│   │   ├── About.jsx             # Story of Hotel XYZ (Est. 2010), values, and ambience
│   │   ├── Gallery.jsx           # Photo gallery of dishes, kitchen, and dining area
│   │   ├── Contact.jsx           # Address, phone, hours, and demo reservation form
│   │   └── Footer.jsx            # Footer links, social icons, and copyright
│   ├── data/                     # Central data files (easy to edit without touching UI code)
│   │   ├── menuData.js           # All food items, prices in ₹, categories, veg/non-veg tags
│   │   └── galleryData.js        # Photos for the gallery section
│   ├── App.jsx                   # Main React page assembling all components
│   ├── main.jsx                  # Vite React entrypoint
│   └── index.css                 # Complete design system (colors, layout, responsive styles)
├── index.html                    # HTML page with Google Fonts (Playfair Display & Plus Jakarta Sans)
├── package.json                  # Dependencies and scripts
└── README.md                     # Beginner guide (this file)
```

---

## ✏️ How to Customize the Website (Beginner Guide)

### 1. How to Change Food Dishes and Prices in ₹
Open `src/data/menuData.js`. Each dish is represented like this:
```javascript
{
  id: "starters-1",
  name: "Tandoori Paneer Tikka",
  category: "Starters",
  price: 240,                   // <-- Change the price here (in ₹)
  isVeg: true,                  // <-- Set to true for Veg, false for Non-Veg
  description: "Cubes of fresh cottage cheese...",
  image: "https://images.unsplash.com/...", // <-- Change image URL
  tags: ["Chef's Pick"]
}
```
- **To add a dish:** Copy an existing block, paste it inside `MENU_ITEMS`, and edit its values.
- **To delete a dish:** Remove the block.
- **To change categories:** The categories list is at the top in `MENU_CATEGORIES`.

### 2. How to Edit Chef Ahmed Khan's Profile
Open `src/components/Chef.jsx`:
- Edit the chef name, quote, biography, or culinary expertise items directly in the text.
- To use your own photo, change the `src` attribute of the `<img>` tag.

### 3. How to Edit Restaurant History & Founding Story
Open `src/components/About.jsx`:
- Edit the founding year (2010), the story paragraphs, or the 3 core values (Fresh Ingredients, Warm Hospitality, No Artificial Additives).

### 4. How to Update Address, Phone, and Opening Hours
Open `src/components/Contact.jsx`:
- Edit the address, phone number, email address, or service hours inside the `contact-details-list` and `contact-hours-box` sections.

### 5. How to Change Website Colors & Theme
Open `src/index.css` and look at the top `:root` section:
```css
:root {
  --color-cream-bg: #FAF7F2;      /* Main background */
  --color-brown-dark: #231710;    /* Dark espresso brown for headings and dark sections */
  --color-gold: #C89B3C;          /* Warm gold accents */
  --color-veg: #2E7D32;           /* Green for Vegetarian indicator */
  --color-nonveg: #C62828;        /* Red for Non-Vegetarian indicator */
}
```
Changing any of these variables will instantly update the entire website!

---

## 📱 Responsiveness
The website is fully responsive across:
- **Desktop screens** (1200px+)
- **Laptops and tablets** (768px – 1024px)
- **Mobile phones** (320px – 768px) with a slide-out hamburger navigation drawer.
