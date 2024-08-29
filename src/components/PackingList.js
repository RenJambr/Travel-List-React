import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onPacked,
  onDeleteItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

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
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onPacked={onPacked}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="input" key="input">
            Sort by input order
          </option>
          <option value="description" key="description">
            Sort by description
          </option>
          <option value="packed" key="packed">
            Sort by packed status
          </option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
