import { Link } from "@tanstack/react-router";
import "./Hero.css";

const Hero = () => {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="hero" 
      style={{ 
        background: 'transparent', 
        minHeight: 'auto', 
        padding: '0',
        margin: '0',
        maxWidth: 'none',
        flexDirection: 'column',
        textAlign: 'center'
      }}
    >
      <div className="hero-content" style={{ maxWidth: 'none' }}>
        <h1>Welcome to La Fuente</h1>
        <h2>Authentic Mexican Cuisine in Renton</h2>
        <p>
          Experience the rich flavors and traditions of Mexico with our
          carefully crafted dishes made from the finest ingredients.
        </p>
        <div className="hero-stats">
          <div className="stat">
            <span className="rating">★★★</span>
            <span className="text">3.3/5 Stars</span>
          </div>
          <div className="stat">
            <span className="reviews">139</span>
            <span className="text">Reviews</span>
          </div>
          <div className="stat">
            <span className="price">$$</span>
            <span className="text">Affordable</span>
          </div>
        </div>
        <div className="hero-actions">
          <Link to="/menu" className="cta-button primary">
            View Menu
          </Link>
          <button className="cta-button secondary" onClick={scrollToContact}>
            Contact Us
          </button>
        </div>
      </div>
      <div 
        className="hero-image" 
        style={{ 
          minHeight: '150px', 
          marginTop: '1rem' 
        }}
      >
        <div 
          className="food-placeholder" 
          style={{ fontSize: '3rem' }}
        >
          🌮 🌯 🥗
        </div>
      </div>
    </section>
  );
};

export default Hero;
