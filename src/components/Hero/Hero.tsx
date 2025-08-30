import { useEffect, useMemo, useState } from "react";
import "./Hero.css";

type CarouselItem = { src: string; alt: string; title: string };

const IMAGES: CarouselItem[] = [
  {
    src: "https://placehold.co/600x400/fff5e6/8b4513?text=Tacos+al+Pastor",
    alt: "Al pastor tacos with pineapple, cilantro, and onions",
    title: "Tacos al Pastor",
  },
  {
    src: "https://placehold.co/600x400/ffeef2/8a2d3c?text=Chicken+Enchiladas",
    alt: "Cheesy chicken enchiladas smothered in red sauce",
    title: "Chicken Enchiladas",
  },
  {
    src: "https://placehold.co/600x400/eef7ff/1d3557?text=Carne+Asada+Burrito",
    alt: "Large mission-style burrito cut open with rice and beans",
    title: "Carne Asada Burrito",
  },
  {
    src: "https://placehold.co/600x400/f0fff4/2f6f31?text=Chips+%26+Guac",
    alt: "Fresh tortilla chips with salsa and guacamole",
    title: "Chips, Salsa & Guac",
  },
  {
    src: "https://placehold.co/600x400/f7f1ff/5a189a?text=Churros",
    alt: "Crispy cinnamon-sugar churros with chocolate dip",
    title: "Churros",
  },
  {
    src: "https://placehold.co/600x400/ebf8ff/0b7285?text=House+Margarita",
    alt: "Classic lime margarita with a salted rim",
    title: "House Margarita",
  },
];

const VISIBLE = 3;

export const Hero = () => {
  const [index, setIndex] = useState(0); // starting item index
  const pageCount = useMemo(() => Math.ceil(IMAGES.length / VISIBLE), []);
  const currentPage = Math.floor(index / VISIBLE);

  useEffect(() => {
    const id = setInterval(() => {
      // advance by one to keep motion smooth
      setIndex((i) => (i + 1) % IMAGES.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="hero"
      style={{
        background: "transparent",
        minHeight: "auto",
        padding: "0",
        margin: "0",
        maxWidth: "none",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <div
        className="carousel"
        aria-roledescription="carousel"
        aria-live="polite"
      >
        <div className="carousel-grid" role="list" aria-label="Menu highlights">
          {Array.from({ length: VISIBLE }).map((_, j) => {
            const item = IMAGES[(index + j) % IMAGES.length];
            const key = `${item.title}-${j}`;
            return (
              <figure className="card" key={key} role="listitem">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="card-image"
                  loading="lazy"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    if (!img.src.includes("placehold.co")) {
                      img.src = `https://placehold.co/600x400?text=${encodeURIComponent(
                        item.title
                      )}`;
                    }
                  }}
                />
                <figcaption className="card-caption">{item.title}</figcaption>
              </figure>
            );
          })}
        </div>

        <div
          className="carousel-dots"
          role="tablist"
          aria-label="Carousel pages"
        >
          {Array.from({ length: pageCount }).map((_, p) => {
            const pageStart = p * VISIBLE;
            const selected = currentPage === p;
            return (
              <button
                key={p}
                role="tab"
                aria-selected={selected}
                tabIndex={selected ? 0 : -1}
                className={`dot ${selected ? "active" : ""}`}
                onClick={() => setIndex(pageStart)}
                aria-label={`Show items ${pageStart + 1} to ${Math.min(
                  pageStart + VISIBLE,
                  IMAGES.length
                )}`}
              />
            );
          })}
        </div>
      </div>

      {/* <div className="hero-actions" style={{ marginTop: "1rem" }}>
        <Link to="/menu" className="cta-button primary">
          View Menu
        </Link>
        <button className="cta-button secondary" onClick={scrollToContact}>
          Contact Us
        </button>
      </div> */}
    </section>
  );
};
