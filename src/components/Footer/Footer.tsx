import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>La Fuente</h3>
            <p>Authentic Mexican cuisine in Renton, WA</p>
            <div className="social-links">
              <span>Find us on:</span>
              <a
                href="https://www.yelp.com/biz/la-fuente-renton-2"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                📍 Yelp
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <nav className="footer-nav">
              <button
                onClick={() =>
                  document
                    .getElementById("home")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Home
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("menu")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Menu
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact
              </button>
            </nav>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>
                📍 14400 SE Petrovitsky Rd
                <br />
                Renton, WA 98058
              </p>
              <p>
                📞 <a href="tel:+14252351311">(425) 235-1311</a>
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Hours</h4>
            <div className="hours-summary">
              <p>
                <strong>Mon:</strong> 12PM-9PM
              </p>
              <p>
                <strong>Tue-Sat:</strong> 11AM-9PM
              </p>
              <p>
                <strong>Sun:</strong> 11AM-8PM
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2025 La Fuente Restaurant. Website created for demonstration
            purposes.
          </p>
          <p className="disclaimer">
            This website is a demo. Please call the restaurant directly for
            current information.
          </p>
        </div>
      </div>
    </footer>
  );
};
