import { Contact } from "@/components/Contact/Contact";
import { Hero } from "@/components/Hero/Hero";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="single-column-layout">
        <div className="hero-section">
          <Hero />
        </div>
        <div className="contact-section-wrapper">
          <Contact />
        </div>
      </div>
    </div>
  );
};
