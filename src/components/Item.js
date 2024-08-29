export default function Item({ item, onPacked, onDeleteItem }) {
  return (
    <li>
      <input type="checkbox" onChange={() => onPacked(item.id)}></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
