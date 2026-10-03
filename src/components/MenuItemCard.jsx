import React, { useState } from "react";

/**
 * MenuItemCard Component
 * Displays a single food item with:
 * - Dish picture (with fallback placeholder if an image fails to load)
 * - Indian Veg / Non-Veg indicator badge
 * - Dish name and category
 * - Description
 * - Price formatted in Indian Rupees (₹)
 */
export default function MenuItemCard({ item }) {
  // Fallback state if an external image link is ever blocked or broken
  const [imgSrc, setImgSrc] = useState(item.image);

  const handleImageError = () => {
    // Elegant fallback SVG placeholder
    setImgSrc(
      "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&w=600&q=80"
    );
  };

  return (
    <article className="menu-card">
      <div className="menu-card-img-wrapper">
        <img
          src={imgSrc}
          alt={item.name}
          className="menu-card-img"
          loading="lazy"
          onError={handleImageError}
        />

        <div className="menu-card-badges">
          {/* Veg / Non-Veg Indicator */}
          <div
            className={`diet-badge ${item.isVeg ? "veg" : "non-veg"}`}
            title={item.isVeg ? "Pure Vegetarian" : "Non-Vegetarian"}
          >
            <span className="diet-dot" />
          </div>

          {/* Dish Tag (e.g., Signature Dish, Chef's Pick) */}
          {item.tags && item.tags.length > 0 && (
            <span className="menu-item-tag">{item.tags[0]}</span>
          )}
        </div>
      </div>

      <div className="menu-card-body">
        <div className="menu-card-header">
          <h3 className="menu-card-title">{item.name}</h3>
          <div className="menu-card-price">₹{item.price}</div>
        </div>

        <p className="menu-card-desc">{item.description}</p>

        <div className="menu-card-footer">
          <span className="category-tag">{item.category}</span>
          <span style={{ color: item.isVeg ? "var(--color-veg)" : "var(--color-nonveg)", fontWeight: 600 }}>
            {item.isVeg ? "Vegetarian" : "Non-Vegetarian"}
          </span>
        </div>
      </div>
    </article>
  );
}
