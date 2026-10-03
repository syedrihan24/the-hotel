import React from "react";
import { UtensilsCrossed, ArrowUp, MapPin, Phone, Mail } from "lucide-react";

/**
 * Footer Component
 * - Hotel XYZ branding & identity
 * - Quick jump navigation links
 * - Social media icon placeholders (inline clean SVGs)
 * - Copyright & learning project badge
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "6px",
                  backgroundColor: "var(--color-gold)",
                  color: "var(--color-brown-deep)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <UtensilsCrossed size={18} />
              </div>
              <h3 style={{ margin: 0 }}>Hotel XYZ</h3>
            </div>
            <div className="footer-tagline">Authentic Local Indian Cuisine</div>
            <p>
              Serving authentic local Indian cuisine since 2010. Handcrafted curries,
              slow-cooked biryanis, and warm hospitality for every family and friend who walks through our doors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#menu">Our Menu</a></li>
              <li><a href="#about">Our Story</a></li>
              <li><a href="#chef">Head Chef</a></li>
              <li><a href="#gallery">Photo Gallery</a></li>
              <li><a href="#contact">Contact & Hours</a></li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div>
            <h4 className="footer-col-title">Specialties</h4>
            <ul className="footer-links-list">
              <li><a href="#menu">Clay Tandoori Kebabs</a></li>
              <li><a href="#menu">Old Delhi Butter Chicken</a></li>
              <li><a href="#menu">Dum Biryani Specialties</a></li>
              <li><a href="#menu">Flaky Garlic Naan</a></li>
              <li><a href="#menu">Alphonso Mango Lassi</a></li>
              <li><a href="#menu">Kesar Pista Rasmalai</a></li>
            </ul>
          </div>

          {/* Social Media & Hours */}
          <div>
            <h4 className="footer-col-title">Connect With Us</h4>
            <p style={{ fontSize: "0.88rem", color: "#BDB0A4", marginBottom: "14px", lineHeight: "1.5" }}>
              Follow our daily culinary specials, behind-the-scenes tandoor videos, and community festivals.
            </p>
            <div className="footer-social-links">
              {/* Instagram */}
              <a href="#home" className="social-icon-btn" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="#home" className="social-icon-btn" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a href="#home" className="social-icon-btn" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
                </svg>
              </a>

              {/* YouTube */}
              <a href="#home" className="social-icon-btn" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                  <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Hotel XYZ (Fictional Local Restaurant). Designed for learning React & modern web design.
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            style={{
              background: "none",
              border: "none",
              color: "var(--color-gold)",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              cursor: "pointer",
              fontSize: "0.85rem",
              fontWeight: 600
            }}
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
