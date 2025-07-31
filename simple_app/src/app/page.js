"use client";

import { useEffect, useState } from "react";
import TodoItem from "../app/components/Todoitem";
import TodoForm from "../app/components/Todoform";

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([newTodo, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <main className=" w-[50%] justify-center items-center  mx-auto mt-12 p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl border border-blue-200">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-800 tracking-tight drop-shadow-lg">
        📝 Casual To-Do App
      </h1>
      <section className="mb-8">
        <TodoForm onAdd={addTodo} />
      </section>
      <ul className="space-y-4">
        {todos.length === 0 ? (
          <li className="text-center text-blue-400 italic py-8">
              No tasks yet. Add your first to-do!
          </li>
           
          
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleComplete}
              onDelete={deleteTodo}
            />
          ))
        )}
      </ul>
    </main>
  );
}

