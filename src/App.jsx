import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Chef from "./components/Chef";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/**
 * ==============================================================================
 * HOTEL XYZ - MAIN APPLICATION COMPONENT
 * ==============================================================================
 * This is the root component that brings together all sections of the website.
 * Each section is isolated in its own reusable component inside `src/components/`:
 * 
 * 1. Navbar: Sticky header with navigation links and mobile drawer.
 * 2. Hero: Welcome banner with tagline, intro, and call to action.
 * 3. Menu: Category-filtered menu items with prices, veg/non-veg tags.
 * 4. Chef: Profile of Head Chef Ahmed Khan and cooking philosophy.
 * 5. About: History of Hotel XYZ (est. 2010), values, and mission.
 * 6. Gallery: Responsive photo showcase of food, dining, and kitchen.
 * 7. Contact: Service hours, fictional address, phone, email, and demo form.
 * 8. Footer: Brand summary, links, and copyright info.
 * ==============================================================================
 */
export default function App() {
  return (
    <div className="hotel-app">
      {/* 1. Header & Navigation */}
      <Navbar />

      <main>
        {/* 2. Welcome & Hero Introduction */}
        <Hero />

        {/* 3. Handcrafted Food Menu */}
        <Menu />

        {/* 4. Head Chef Profile */}
        <Chef />

        {/* 5. Restaurant Story & Core Values */}
        <About />

        {/* 6. Visual Ambience & Dishes Gallery */}
        <Gallery />

        {/* 7. Contact Details, Hours & Reservation Form */}
        <Contact />
      </main>

      {/* 8. Footer & Social Links */}
      <Footer />
    </div>
  );
}
