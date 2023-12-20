import { useState } from "react";
import Form from "./Form";
import "./../index.css";
import { Logo } from "./Logo";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleClearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to clear all the items?"
    );

    if (confirmed) setItems([]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handlePackedItems(UpdItemId) {
    setItems((items) =>
      items.map((item) =>
        item.id === UpdItemId ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleAddItems(newItem) {
    setItems((items) => [...items, newItem]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onPackItems={handlePackedItems}
        onDeleteItem={handleDeleteItems}
        onClearList={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}
