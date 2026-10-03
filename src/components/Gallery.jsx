import React from "react";
import { GALLERY_ITEMS } from "../data/galleryData";
import { Camera } from "lucide-react";

/**
 * Gallery Component
 * Displays a responsive grid of restaurant photos:
 * - Restaurant interior & dining room
 * - Sizzling food dishes
 * - Chef & kitchen moments
 * Subtle zoom hover effect and overlay caption.
 */
export default function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Camera size={16} />
            <span>Moments & Flavors</span>
          </div>
          <h2>Inside Hotel XYZ</h2>
          <p>
            Glimpses of our comforting dining room, crackling tandoor hearths,
            and freshly plated culinary creations.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.id} className="gallery-card">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                onError={(e) => {
                  // Fallback image if network fails
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="gallery-overlay">
                <span className="gallery-badge">{item.category}</span>
                <h4 className="gallery-title">{item.title}</h4>
                <p className="gallery-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
