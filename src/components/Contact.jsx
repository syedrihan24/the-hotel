import React from "react";
import { MapPin, Phone, Mail, Clock, Navigation, Sparkles, CheckCircle2 } from "lucide-react";

/**
 * Contact Component
 * - Clean, informative presentation of restaurant location, hours, and direct contact details.
 * - Form and booking systems removed per request to keep it simple and focused.
 */
export default function Contact() {
  const visitorPerks = [
    "Walk-ins are always warmly welcomed",
    "Dedicated family & group dining areas",
    "Complimentary parking assistance",
    "Takeaway & parcel counter available"
  ];

  return (
    <section id="contact" className="section" style={{ backgroundColor: "var(--color-cream-surface)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MapPin size={16} />
            <span>Find & Contact Us</span>
          </div>
          <h2>Visit Hotel XYZ</h2>
          <p>
            We welcome you and your family for an authentic meal filled with comforting flavors
            and traditional hospitality. Drop by anytime during service hours!
          </p>
        </div>

        <div className="contact-cards-grid">
          {/* Card 1: Location & Directions */}
          <div className="contact-card">
            <div className="contact-card-icon-box">
              <MapPin size={28} />
            </div>
            <h3 className="contact-card-title">Our Location</h3>
            <p className="contact-card-text">
              #42, Heritage Spice Street, Near Gandhi Circle,<br />
              MG Road Area, Bengaluru, Karnataka 560001
            </p>
            <div className="contact-card-subnote">
              Landmark: Opposite the Old Town Clock Tower
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ marginTop: "18px", width: "100%" }}
            >
              <Navigation size={16} />
              Get Directions
            </a>
          </div>

          {/* Card 2: Phone & Email */}
          <div className="contact-card">
            <div className="contact-card-icon-box">
              <Phone size={28} />
            </div>
            <h3 className="contact-card-title">Direct Contact</h3>
            <p className="contact-card-text">
              Have questions about our daily menu specials or catering for private events?
            </p>
            <div className="contact-card-details">
              <div className="contact-phone-item">
                <span className="contact-label">Phone Support:</span>
                <a href="tel:+918025550199" className="contact-highlight-link">
                  +91 (080) 2555-0199
                </a>
              </div>
              <div className="contact-phone-item">
                <span className="contact-label">Direct Mobile:</span>
                <a href="tel:+919876543210" className="contact-highlight-link">
                  +91 98765 43210
                </a>
              </div>
              <div className="contact-phone-item" style={{ marginTop: "4px" }}>
                <span className="contact-label">Email:</span>
                <a href="mailto:namaste@hotelxyz-fictional.com" className="contact-highlight-link">
                  namaste@hotelxyz-fictional.com
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Dining Hours */}
          <div className="contact-card">
            <div className="contact-card-icon-box">
              <Clock size={28} />
            </div>
            <h3 className="contact-card-title">Service Hours</h3>
            <div className="contact-hours-schedule">
              <div className="hours-block">
                <strong>Monday – Friday:</strong>
                <div>Lunch: 12:00 PM – 3:30 PM</div>
                <div>Dinner: 7:00 PM – 11:00 PM</div>
              </div>
              <div className="hours-block" style={{ marginTop: "12px" }}>
                <strong>Saturday & Sunday:</strong>
                <div>All-Day Service: 12:00 PM – 11:30 PM</div>
              </div>
            </div>
            <div className="walk-in-pill">
              <Sparkles size={14} />
              <span>Walk-ins Welcome Every Day</span>
            </div>
          </div>
        </div>

        {/* Visitor Amenities Banner */}
        <div className="visitor-banner">
          <div className="visitor-banner-title">
            Dining With Us
          </div>
          <div className="visitor-perks-list">
            {visitorPerks.map((perk, index) => (
              <div key={index} className="visitor-perk-item">
                <CheckCircle2 size={18} color="var(--color-gold)" />
                <span>{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
