export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  image?: string;
  alt?: string;
  featured?: boolean;
};

export type MenuCategory = {
  name: string;
  items: MenuItem[];
};

// NOTE: Prices/items are placeholders. Update to match your latest menu.
export const menuData: MenuCategory[] = [
  {
    name: "Appetizers",
    items: [
      {
        name: "Guacamole & Chips",
        price: "$8.99",
        description: "Fresh avocado, lime, cilantro, tomatoes, onions.",
      },
      {
        name: "Queso Dip",
        price: "$7.99",
        description: "Creamy melted cheese with a hint of spice.",
        image: "/images/placeholder.svg",
        alt: "Queso dip in a bowl with tortilla chips",
        featured: true,
      },
      {
        name: "Nachos Supreme",
        price: "$12.99",
        description: "Chips topped with beans, cheese, pico, sour cream, guac.",
        image: "/images/placeholder.svg",
        alt: "Loaded nachos with cheese and jalapeños",
        featured: true,
      },
      {
        name: "Taquitos (4)",
        price: "$10.49",
        description: "Crispy rolled tacos with salsa and sour cream.",
      },
    ],
  },
  {
    name: "Enchiladas",
    items: [
      {
        name: "Chicken Enchiladas",
        price: "$13.99",
        description: "Red or green sauce, cheese, rice, beans.",
        image: "/images/chicken-enchiladas.svg",
        alt: "Chicken enchiladas topped with sauce and cheese",
        featured: true,
      },
      { name: "Beef Enchiladas", price: "$14.49" },
      { name: "Cheese Enchiladas", price: "$12.99" },
      { name: "Spinach Enchiladas", price: "$12.99" },
    ],
  },
  {
    name: "Burritos",
    items: [
      {
        name: "Carne Asada Burrito",
        price: "$15.99",
        description: "Grilled steak, rice, beans, pico, guac.",
        image: "/images/carne-asada-burrito.svg",
        alt: "Carne asada burrito cut open showing filling",
        featured: true,
      },
      {
        name: "California Burrito",
        price: "$14.99",
        description: "Fries, carne asada, cheese, pico, crema.",
      },
      { name: "Bean & Cheese Burrito", price: "$9.99" },
      { name: "Chicken Fajita Burrito", price: "$14.49" },
    ],
  },
  {
    name: "Carnes",
    items: [
      {
        name: "Carne Asada",
        price: "$18.99",
        description: "Marinated grilled steak, rice, beans, tortillas.",
        image: "/images/placeholder.svg",
        alt: "Grilled carne asada steak on a plate",
        featured: true,
      },
      {
        name: "Carnitas",
        price: "$16.99",
        description: "Slow-cooked pork, rice, beans, tortillas.",
      },
      { name: "Chile Verde", price: "$16.49" },
      { name: "Arrachera", price: "$19.99" },
    ],
  },
  {
    name: "Pollo",
    items: [
      { name: "Pollo Asado", price: "$16.49" },
      { name: "Mole Poblano", price: "$16.99" },
      { name: "Chicken Fajitas", price: "$16.99" },
    ],
  },
  {
    name: "Mariscos",
    items: [
      {
        name: "Camarones a la Diabla",
        price: "$18.99",
        image: "/images/placeholder.svg",
        alt: "Spicy shrimp in red sauce",
        featured: true,
      },
      {
        name: "Fish Tacos (3)",
        price: "$14.99",
        image: "/images/placeholder.svg",
        alt: "Fish tacos topped with slaw and lime",
        featured: true,
      },
      { name: "Ceviche", price: "$15.99" },
    ],
  },
  {
    name: "Combos",
    items: [
      { name: "Two Enchiladas Combo", price: "$14.99" },
      { name: "Taco & Enchilada Combo", price: "$13.99" },
      { name: "Burrito Combo", price: "$14.99" },
    ],
  },
  {
    name: "Traditionals",
    items: [
      { name: "Tamales", price: "$12.99" },
      { name: "Chimichanga", price: "$13.99" },
      { name: "Chilaquiles", price: "$13.49" },
      { name: "Torta", price: "$11.99" },
    ],
  },
  {
    name: "Tostadas & Salads",
    items: [
      { name: "Tostada", price: "$9.99" },
      { name: "Taco Salad", price: "$11.99" },
      { name: "Fajita Salad", price: "$12.99" },
    ],
  },
  {
    name: "Vegetarian",
    items: [
      { name: "Veggie Burrito", price: "$11.99" },
      { name: "Cheese Enchiladas", price: "$12.49" },
      { name: "Spinach Quesadilla", price: "$11.49" },
    ],
  },
  {
    name: "Huevos & Americanos",
    items: [
      { name: "Huevos Rancheros", price: "$12.99" },
      { name: "Huevos con Chorizo", price: "$13.49" },
      { name: "Breakfast Burrito", price: "$10.99" },
    ],
  },
  {
    name: "Sides",
    items: [
      { name: "Rice", price: "$3.49" },
      { name: "Beans", price: "$3.49" },
      { name: "Sour Cream", price: "$1.49" },
      { name: "Guacamole", price: "$3.99" },
      { name: "Tortillas", price: "$1.99" },
    ],
  },
  {
    name: "Dessert",
    items: [
      {
        name: "Churros",
        price: "$6.99",
        image: "/images/churros.svg",
        alt: "Churros with cinnamon sugar and chocolate dip",
        featured: true,
      },
      { name: "Flan", price: "$6.49" },
      { name: "Fried Ice Cream", price: "$7.49" },
    ],
  },
];
