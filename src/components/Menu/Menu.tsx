import "./Menu.css";

export const Menu = () => {
  const popularDishes = [
    {
      name: "Carne Asada",
      description: "Grilled marinated beef with authentic Mexican spices",
      price: "$16.99",
      emoji: "🥩",
    },
    {
      name: "Ground Beef Taco",
      description:
        "Traditional soft or hard shell taco with seasoned ground beef",
      price: "$3.99",
      emoji: "🌮",
    },
    {
      name: "Chicken Enchiladas",
      description:
        "Rolled tortillas filled with chicken and topped with our special sauce",
      price: "$13.99",
      emoji: "🌯",
    },
    {
      name: "Spinach Enchiladas",
      description: "Fresh spinach enchiladas with cheese and green sauce",
      price: "$12.99",
      emoji: "🥬",
    },
    {
      name: "Quesadilla",
      description:
        "Grilled tortilla filled with cheese and your choice of meat",
      price: "$9.99",
      emoji: "🧀",
    },
    {
      name: "Taco Salad",
      description:
        "Fresh lettuce, tomatoes, cheese, and your choice of meat in a crispy shell",
      price: "$11.99",
      emoji: "🥗",
    },
  ];

  const menuCategories = [
    {
      name: "Appetizers",
      items: [
        "Guacamole & Chips",
        "Queso Fundido",
        "Nachos Supreme",
        "Jalapeño Poppers",
      ],
    },
    {
      name: "Tacos",
      items: ["Ground Beef", "Chicken", "Carnitas", "Fish", "Vegetarian"],
    },
    {
      name: "Burritos",
      items: [
        "California Burrito",
        "Bean & Rice",
        "Carnitas",
        "Chicken Fajita",
      ],
    },
    {
      name: "Enchiladas",
      items: ["Chicken", "Beef", "Cheese", "Spinach", "Combination"],
    },
    {
      name: "Beverages",
      items: [
        "Horchata",
        "Aguas Frescas",
        "Mexican Sodas",
        "Coffee",
        "Soft Drinks",
      ],
    },
  ];

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <h2>Our Menu</h2>
        <p className="menu-intro">
          Discover our authentic Mexican cuisine made with fresh ingredients and
          traditional recipes
        </p>

        <div className="popular-dishes">
          <h3>Popular Dishes</h3>
          <div className="dishes-grid">
            {popularDishes.map((dish, index) => (
              <div key={index} className="dish-card">
                <div className="dish-emoji">{dish.emoji}</div>
                <h4>{dish.name}</h4>
                <p>{dish.description}</p>
                <span className="price">{dish.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="menu-categories">
          <h3>Full Menu Categories</h3>
          <div className="categories-grid">
            {menuCategories.map((category, index) => (
              <div key={index} className="category-card">
                <h4>{category.name}</h4>
                <ul>
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="menu-note">
          <p>
            <strong>Note:</strong> This is a sample menu. Please call us at{" "}
            <a href="tel:+14252351311">(425) 235-1311</a> for current prices and
            full menu items.
          </p>
        </div>
      </div>
    </section>
  );
};
