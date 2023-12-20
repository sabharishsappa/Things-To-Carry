export function Item({ item, onPackItems, onDeleteItem }) {
  return (
    <li>
      <input
        type="checkBox"
        name="isItemSelected"
        value={item.packed}
        onChange={() => onPackItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : null}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
