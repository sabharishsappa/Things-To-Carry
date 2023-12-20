import { useState } from "react";
import { Item } from "./Item";

export function PackingList({ items, onPackItems, onDeleteItem, onClearList }) {
  let sortedItems;
  const [sortBy, setSortBy] = useState("input");

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul className="">
        {sortedItems.map((item) => {
          return (
            <Item
              item={item}
              key={item.id}
              onPackItems={onPackItems}
              onDeleteItem={onDeleteItem}
            />
          );
        })}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="description">SORT BY DESCRIPTION</option>
          <option value="packed">SORT BY PACKED STATUS</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
