import React from "react";
import { useState } from "react";

export default function ToDoList() {
  const [items, setItems] = useState([
    { id: 1, text: "Learn React", done: false },
    { id: 2, text: "Build a React App", done: false },
  ]);

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      text: "Deploy to production",
      done: false,
    };

    setItems([...items, newItem]);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id != id));
  };

  const toggleDone=(id)=>{
    setItems(items.map((item)=>{
        if(item.id===id)
        {
            return {...item, done:!item.done}
        }
        return item
    }))
  }

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span style={{textDecoration:item.done?"line-through":"none"}}>{item.text}</span> 
            <button onClick={() => deleteItem(item.id)}>Remove Item</button>
            <button onClick={() => toggleDone(item.id)}>{item.done?"Undo":"Done"}</button>

          </li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}
