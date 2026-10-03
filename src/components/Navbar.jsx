import React, { useState, useEffect } from "react";
import { UtensilsCrossed, Menu as MenuIcon, X, PhoneCall } from "lucide-react";

/**
 * Navbar Component
 * - Sticky navigation with frosted glass effect on scroll.
 * - Smooth anchor links for single-page navigation.
 * - Mobile responsive drawer menu with open/close toggle.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll to apply a subtle background change and shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "About", href: "#about" },
    { label: "Chef", href: "#chef" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#home" className="brand-logo" onClick={handleLinkClick}>
          <div className="brand-icon-box">
            <UtensilsCrossed size={22} />
          </div>
          <div>
            Hotel XYZ
            <span className="brand-sub">Authentic Indian Cuisine</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="nav-links">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="nav-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Call to Action & Mobile Hamburger */}
        <div className="nav-actions">
          <a href="#contact" className="btn btn-primary" style={{ padding: "9px 20px", fontSize: "0.88rem" }}>
            <PhoneCall size={16} />
            Contact Us
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="nav-toggle-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <MenuIcon size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-drawer">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="mobile-nav-link"
              onClick={handleLinkClick}
            >
              <span>{item.label}</span>
              <span style={{ color: "var(--color-gold)", fontSize: "0.9rem" }}>→</span>
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={handleLinkClick}
            style={{ marginTop: "12px", width: "100%" }}
          >
            <PhoneCall size={18} />
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
