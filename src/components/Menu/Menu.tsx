import { menuData, type MenuCategory } from "@/data/menu";
import "./Menu.css";

export const Menu = () => {
  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <h2>Menu</h2>

        <div className="menu-layout">
          <aside className="menu-sidebar">
            <nav aria-label="Menu categories">
              <ul>
                {menuData.map((cat) => {
                  const id = cat.name
                    .replace(/\s+&\s+|\s+/g, "-")
                    .toLowerCase();
                  return (
                    <li key={id}>
                      <a href={`#${id}`}>{cat.name}</a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          <div className="menu-content">
            {menuData.map((category: MenuCategory) => {
              const id = category.name
                .replace(/\s+&\s+|\s+/g, "-")
                .toLowerCase();
              return (
                <section key={id} id={id} className="menu-category-block">
                  <h3 className="menu-category-title">{category.name}</h3>
                  <ul className="menu-items">
                    {category.items.map((item) => (
                      <li key={item.name} className="menu-item">
                        <div className="menu-item-row">
                          <span className="menu-item-name">{item.name}</span>
                          <span className="menu-item-price">{item.price}</span>
                        </div>
                        {item.description ? (
                          <div className="menu-item-desc">
                            {item.description}
                          </div>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
