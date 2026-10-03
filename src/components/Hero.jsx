import React from "react";
import { Sparkles, Utensils, HeartHandshake, Award } from "lucide-react";

/**
 * Hero Component
 * - Welcoming banner with headline, tagline, and call-to-action buttons.
 * - Highlights the warm, authentic neighborhood vibe of Hotel XYZ.
 */
export default function Hero() {
  return (
    <header id="home" className="hero-section">
      <div className="hero-overlay-pattern" />

      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Text & CTAs */}
          <div className="hero-content">
            <div className="hero-pill">
              <Sparkles size={16} />
              <span>Authentic Local Indian Flavors</span>
            </div>

            <h1 className="hero-title">
              Welcome to <span className="highlight">Hotel XYZ</span>
            </h1>

            <p className="hero-subtitle">
              Delicious Food. Warm Hospitality. Memorable Moments.
            </p>

            <p className="hero-intro">
              Nestled in the heart of town since 2010, Hotel XYZ brings you the authentic, comforting
              flavors of traditional Indian home kitchens. From our charcoal-fired tandoor to aromatic,
              slow-cooked dum biryanis, every plate is prepared with love and time-honored spices.
            </p>

            {/* Action Buttons */}
            <div className="hero-cta-group">
              <a href="#menu" className="btn btn-primary">
                <Utensils size={18} />
                Explore Menu
              </a>
              <a href="#about" className="btn btn-secondary">
                <HeartHandshake size={18} />
                About Us
              </a>
            </div>

            {/* Highlights Bar */}
            <div className="hero-stats">
              <div className="stat-item">
                <h3>15+</h3>
                <p>Years of Flavor</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Traditional Dishes</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>Fresh Ingredients</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image with Floating Badge */}
          <div className="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
              alt="Hotel XYZ warm and elegant dining ambiance"
              className="hero-main-image"
              loading="eager"
            />

            <div className="hero-badge-card">
              <div className="badge-icon">
                <Award size={24} />
              </div>
              <div>
                <h4>Local Neighborhood Favorite</h4>
                <p>Loved by families & foodies since 2010</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
