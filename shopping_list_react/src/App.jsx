import { useState } from "react";
import Header from "./components/Header";
import ShoppingForm from "./components/ShoppingForm";
import GroceryList from "./components/GroceryList";
import Footer from "./components/Footer";

const groceryItems = [];

export default function App() {
  const [items, setItems] = useState(groceryItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => item.id === id ? {...item, checked: !item.checked } : item));
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">

      <Header />

      <ShoppingForm onAddItem={handleAddItem} />

      <GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems} />

      <Footer items={items} />

    </div>
  );
}
