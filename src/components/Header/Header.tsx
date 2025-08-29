import { Link } from "@tanstack/react-router";
import "./Header.css";

const Header = () => {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="nav-container">
        <nav className="nav">
          <Link to="/" className="nav-link">
            Visit Us
          </Link>
          <Link to="/menu" className="nav-link">
            Menu
          </Link>
          <button onClick={scrollToContact} className="nav-link contact-btn">
            Contact
          </button>
        </nav>
      </div>
      <div className="logo">
        <Link to="/" className="logo-link">
          <h1>La Fuente</h1>
          <span className="tagline">Authentic Mexican Cuisine</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
