 import React from "react";
import { useState } from "react";
export default function TodoForm({ onAdd }) {
        const [ text , setText ] = useState("");
        const handleAdd = (e)=>{

        }
    return(
<div className="mb-6">
 <input  
 type ="text"
    className="border border-gray-800 rounded p-2 w-full text-cyan-500"
    placeholder="Add a new todo"
    value={text}
    onChange={(e) => setText(e.target.value)}
    >
 
    </input>
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      onClick={() => {
        if (text.trim()) {
          onAdd(text);
          setText("");
        }
      }}> Add Task </button>

</div>    
);
}