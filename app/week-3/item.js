export default function Item({ name, quantity, category }) {
  return (
    <li className="text-red-300 bg-slate-800 border border-blue-800">
      <ul>
        <li>{`Name: ${name}`}</li>
        <li>{`Quantity: ${quantity}`}</li>
        <li>{`Category: ${category}`}</li>
      </ul>
    </li>
  );
}