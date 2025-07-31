export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="flex justify-between items-center bg-white shadow p-2 rounded">
      <span
        onClick={() => onToggle(todo.id)}
        className={`cursor-pointer flex-grow ${
          todo.completed ? "line-through text-green-400" : " text-gray-800"
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="ml-4 text-red-400 hover:text-red-700"
      >
        ✕
      </button>
    </li>
  );
}
