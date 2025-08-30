import { Link } from "@tanstack/react-router";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="brand-row">
        <div className="logo">
          <Link to="/" className="logo-link">
            <h1>La Fuente</h1>
            <span className="tagline">Authentic Mexican Cuisine in Renton</span>
          </Link>
        </div>
        <nav className="nav">
          <Link
            to="/"
            className="nav-link"
            activeProps={{ className: "nav-link active" }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="nav-link"
            activeProps={{ className: "nav-link active" }}
          >
            Menu
          </Link>
        </nav>
      </div>
      <div className="ext-links" aria-label="Ordering and reviews">
        <a
          className="ext-link"
          href="#"
          aria-label="Yelp (placeholder)"
          title="Yelp (placeholder)"
        >
          Yelp
        </a>
        <a
          className="ext-link"
          href="#"
          aria-label="DoorDash (placeholder)"
          title="DoorDash (placeholder)"
        >
          DoorDash
        </a>
      </div>
    </header>
  );
};
