export function Stats({ items }) {
  // console.log(items);
  const totalItems = items.length;

  if (!totalItems)
    return (
      <footer className="stats">
        <em>Start adding items to the list🚀</em>
      </footer>
    );
  const packedItems = items.filter((item) => item.packed).length;
  const percPacked =
    totalItems === 0 ? 0 : Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percPacked === 100
          ? `You got everything! Ready to go ✈️`
          : `
          🧳 You have ${totalItems} on your list, and you already packed ${" "}
          ${packedItems} (${percPacked} %)
        `}
      </em>
    </footer>
  );
}
