export default function Item({ item, deleteItem, toggleItem }) {
  return (
    <li>
      <input
        type='checkbox'
        value={item.packed}
        onChange={() => toggleItem(item.id)}
      />
      <span style={{ textDecoration: item.packed ? 'line-through' : '' }}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
}
