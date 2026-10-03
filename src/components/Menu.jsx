import React, { useState } from "react";
import { MENU_CATEGORIES, MENU_ITEMS } from "../data/menuData";
import MenuItemCard from "./MenuItemCard";
import { UtensilsCrossed, Leaf, Drumstick } from "lucide-react";

/**
 * Menu Component
 * - Displays all food items organized into categories:
 *   Starters, Main Course, Biryani & Rice, Breads, Beverages, Desserts.
 * - Allows users to filter by category or by Vegetarian / Non-Vegetarian.
 */
export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [dietFilter, setDietFilter] = useState("all"); // 'all' | 'veg' | 'non-veg'

  // Filter items based on selected category and dietary preference
  const filteredItems = MENU_ITEMS.filter((item) => {
    // 1. Check category match
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    // 2. Check diet match
    let matchesDiet = true;
    if (dietFilter === "veg") {
      matchesDiet = item.isVeg === true;
    } else if (dietFilter === "non-veg") {
      matchesDiet = item.isVeg === false;
    }

    return matchesCategory && matchesDiet;
  });

  return (
    <section id="menu" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <UtensilsCrossed size={16} />
            <span>Our Handcrafted Menu</span>
          </div>
          <h2>Taste the Heritage of India</h2>
          <p>
            Every recipe at Hotel XYZ is slow-cooked with freshly grounded spices,
            pure desi ghee, and time-tested culinary techniques passed through generations.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="menu-controls">
          {/* Category Tabs */}
          <div className="category-pills">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`category-pill-btn ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Veg / Non-Veg Diet Filter */}
          <div className="diet-filter-bar">
            <span style={{ color: "var(--color-text-muted)", fontSize: "0.82rem", fontWeight: 600 }}>
              Dietary:
            </span>
            <button
              type="button"
              className={`diet-filter-btn ${dietFilter === "all" ? "active" : ""}`}
              onClick={() => setDietFilter("all")}
            >
              All Items
            </button>
            <button
              type="button"
              className={`diet-filter-btn ${dietFilter === "veg" ? "active" : ""}`}
              onClick={() => setDietFilter("veg")}
              style={{ color: dietFilter === "veg" ? "var(--color-veg)" : undefined }}
            >
              <Leaf size={14} color="var(--color-veg)" />
              Pure Veg
            </button>
            <button
              type="button"
              className={`diet-filter-btn ${dietFilter === "non-veg" ? "active" : ""}`}
              onClick={() => setDietFilter("non-veg")}
              style={{ color: dietFilter === "non-veg" ? "var(--color-nonveg)" : undefined }}
            >
              <Drumstick size={14} color="var(--color-nonveg)" />
              Non-Veg
            </button>
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="menu-grid">
            {filteredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--color-text-muted)" }}>
            <p style={{ fontSize: "1.1rem" }}>No dishes found for this category and filter combination.</p>
            <button
              type="button"
              className="btn btn-outline"
              style={{ marginTop: "16px" }}
              onClick={() => {
                setSelectedCategory("All");
                setDietFilter("all");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
