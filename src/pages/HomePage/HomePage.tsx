import Contact from "../../components/Contact";
import Hero from "../../components/Hero";
import "./HomePage.css";

const HomePage = () => {
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

export default HomePage;
