import { menuData } from "@/data/menu";
import { useEffect, useMemo, useState } from "react";
import "./Hero.css";

type CarouselItem = { src: string; alt: string; title: string };

const buildCarouselItems = (): CarouselItem[] => {
  const collected: CarouselItem[] = [];
  const featured = [] as CarouselItem[];
  const others = [] as CarouselItem[];
  for (const cat of menuData) {
    for (const item of cat.items) {
      if (item.image) {
        const c: CarouselItem = {
          src: item.image,
          alt: item.alt || item.name,
          title: item.name,
        };
        if (item.featured) featured.push(c);
        else others.push(c);
        collected.push(c);
      }
    }
  }
  const chosenItems =
    featured.length > 0 ? featured : others.length ? others : collected;
  // Fallback if no images provided
  if (chosenItems.length === 0) {
    return [
      {
        src: "/images/placeholder.svg",
        alt: "Menu item placeholder",
        title: "Menu Item",
      },
    ];
  }
  return chosenItems;
};

const IMAGES: CarouselItem[] = buildCarouselItems();

// Responsive visible count: 3 desktop, 2 tablet, 1 mobile
const getVisibleByWidth = (w: number) => (w <= 600 ? 1 : w <= 900 ? 2 : 3);

export const Hero = () => {
  const [index, setIndex] = useState(0); // starting item index
  const [visible, setVisible] = useState<number>(3);
  const pageCount = useMemo(
    () => Math.ceil(IMAGES.length / visible),
    [visible]
  );
  const currentPage = Math.floor(index / visible);

  useEffect(() => {
    const id = setInterval(() => {
      // advance by one to keep motion smooth
      setIndex((i) => (i + 1) % IMAGES.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  // Handle responsive visible count
  useEffect(() => {
    const apply = () => setVisible(getVisibleByWidth(window.innerWidth));
    apply();
    const onResize = () => {
      // Use rAF to avoid layout thrash in rapid resizes
      requestAnimationFrame(apply);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
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
          {Array.from({ length: Math.min(visible, IMAGES.length) }).map(
            (_, j) => {
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
            }
          )}
        </div>

        <div
          className="carousel-dots"
          role="tablist"
          aria-label="Carousel pages"
        >
          {Array.from({ length: pageCount }).map((_, p) => {
            const pageStart = p * visible;
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
                  pageStart + visible,
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
