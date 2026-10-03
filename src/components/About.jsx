import React from "react";
import { History, ShieldCheck, Heart, Sparkles } from "lucide-react";

/**
 * About / History Component
 * Storytelling section depicting Hotel XYZ's founding in 2010 as a small family restaurant.
 * Clearly notes placeholder fictional context so beginners can customize it easily.
 */
export default function About() {
  const values = [
    {
      icon: <Sparkles size={20} />,
      title: "Fresh & Sourced Daily",
      desc: "Every vegetable, whole dairy product, and spice blend is handpicked daily from local farmers' markets."
    },
    {
      icon: <Heart size={20} />,
      title: "Warm Homestyle Hospitality",
      desc: "True to the Indian spirit of 'Atithi Devo Bhava' (Guest is God), we welcome each patron with heartfelt smiles."
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Zero Artificial Additives",
      desc: "We never use artificial colors or commercial flavor enhancers—only raw spices, simmered stocks, and fresh ghee."
    }
  ];

  return (
    <section id="about" className="section section-dark">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Story & Values */}
          <div className="about-content">
            <div className="section-tag" style={{ justifyContent: "flex-start" }}>
              <History size={16} />
              <span>Our Story & Roots (Est. 2010)</span>
            </div>

            <h2>From a 6-Table Eatery to a Local Community Staple</h2>

            <p className="about-intro-highlight">
              In 2010, Hotel XYZ opened its doors as an unassuming family-run diner with just
              six wooden tables and a single earthen clay tandoor.
            </p>

            <p className="about-story-p">
              Driven by our grandmother’s secret spice recipes and an unyielding commitment to honest,
              generous portions, word quickly spread across the neighborhood. Over the years, our dining
              room grew, but our philosophy remained unchanged: serve clean, deeply flavorful Indian
              comfort food that feels like a warm hug at the end of a long day.
            </p>

            {/* Restaurant Core Values */}
            <div className="values-list">
              {values.map((v, i) => (
                <div key={i} className="value-item">
                  <div className="value-icon-box">{v.icon}</div>
                  <div className="value-text">
                    <h4>{v.title}</h4>
                    <p>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ fontStyle: "italic", fontSize: "0.85rem", color: "#A89A8E" }}>
              * Note: The history of Hotel XYZ is fictional placeholder content created for learning purposes.
            </div>
          </div>

          {/* Right Column: Restaurant Interior Image with Est. 2010 Stamp */}
          <div className="about-image-card">
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=80"
              alt="Hotel XYZ warm rustic dining interior"
              className="about-image"
              loading="lazy"
            />

            <div className="about-floating-stamp">
              <span>Established</span>
              <strong>2010</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
