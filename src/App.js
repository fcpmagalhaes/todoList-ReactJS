import React, { useState } from "react";
import SearchBar from "./SearchBar";
import "./styles.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [listItems, setListItems] = useState([]);

  const removeItem = (item) => {
    const newList = listItems.filter((i) => i !== item);
    setListItems(newList);
  };

  const addItem = () => {
    setListItems([...listItems, newItem]);
    setNewItem("");
  };

  return (
    <div className="App">
      <SearchBar />
      <h1>Todo List</h1>

      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={() => addItem()}>Add</button>

      {!!listItems && (
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
              <button onClick={() => removeItem(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
