import React, { useState } from "react";
import items from "./Data";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  function getCategory(category) {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItem = items.filter((item) => item.category === category);
    setMenuItems(newItem);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu</h2>
          <div className="underline"></div>
        </div>

        <Categories filterItems={getCategory} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
