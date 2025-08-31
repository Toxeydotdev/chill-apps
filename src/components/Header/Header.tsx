import { Icon } from "@/components/Icons/Icon";
import { DOORDASH_URL, YELP_URL } from "@/config/links";
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
          href={YELP_URL}
          aria-label="Yelp"
          title="Yelp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="yelp" className="ext-icon" />
          <span className="ext-text">Yelp</span>
        </a>
        <a
          className="ext-link"
          href={DOORDASH_URL}
          aria-label="DoorDash"
          title="DoorDash"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="doordash" className="ext-icon" />
          <span className="ext-text">DoorDash</span>
        </a>
      </div>
    </header>
  );
};
