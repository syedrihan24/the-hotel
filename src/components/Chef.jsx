import React from "react";
import { Award, Check, ChefHat, Quote } from "lucide-react";

/**
 * Chef Component
 * Dedicated profile for Head Chef Ahmed Khan (fictional).
 * Highlights culinary philosophy, expertise, and a heartfelt quote.
 */
export default function Chef() {
  const expertiseList = [
    "Traditional Clay Tandoor Roasting",
    "Slow-Dum Biryani & Rice Artistry",
    "Rich Mughlai & Awadhi Curries",
    "Hand-Ground Masalas & Secret Spice Blends",
    "Homestyle Vegetarian Delicacies",
    "Natural, Preservative-Free Marinades"
  ];

  return (
    <section id="chef" className="section" style={{ backgroundColor: "var(--color-cream-surface)" }}>
      <div className="container">
        <div className="chef-grid">
          {/* Left Column: Chef Portrait */}
          <div className="chef-image-container">
            <img
              src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80"
              alt="Chef Ahmed Khan - Head Chef at Hotel XYZ"
              className="chef-image"
              loading="lazy"
            />
            <div className="chef-experience-card">
              <h4>20+</h4>
              <p>Years of Culinary Love</p>
            </div>
          </div>

          {/* Right Column: Bio & Philosophy */}
          <div className="chef-details">
            <div className="section-tag" style={{ justifyContent: "flex-start" }}>
              <ChefHat size={16} />
              <span>Master of the Kitchen</span>
            </div>

            <h2>Chef Ahmed Khan</h2>
            <p className="chef-position">Head Chef & Culinary Director (Fictional)</p>

            <p className="chef-bio">
              With over two decades spent mastering the subtleties of regional Indian cooking,
              Chef Ahmed Khan believes that the finest meals are born from patience, respect for spices,
              and genuine warmth. Growing up around family kitchen gatherings, he learned the sacred
              balance of roasting whole spices and nurturing slow gravies to deep, soulful richness.
            </p>

            {/* Chef's Quote */}
            <div className="chef-quote-box">
              <Quote size={20} style={{ color: "var(--color-gold)", marginBottom: "8px" }} />
              <p>
                "Cooking authentic Indian food isn't about fancy shortcuts. It is about patience,
                listening to the crackle of cumin in warm ghee, and treating every guest as family
                who has arrived at our home."
              </p>
            </div>

            {/* Culinary Specialties */}
            <div>
              <h4 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "16px", color: "var(--color-brown-dark)" }}>
                Culinary Focus & Expertise
              </h4>
              <div className="chef-expertise-grid">
                {expertiseList.map((item, index) => (
                  <div key={index} className="expertise-item">
                    <span className="bullet-check">
                      <Check size={14} />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
