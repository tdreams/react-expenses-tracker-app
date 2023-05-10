import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuidv4(),
      item,
    };

    if (item) {
      setList([...list, newItem]);
      setItem("");
    }
  };

  console.log(list);

  const deleteItem = (id) => {
    setList(list.filter((el) => el.id !== id));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button>Add Item</button>
      </form>
      <div>
        {list.map((el) => {
          return (
            <div key={el.id}>
              <p>{el.item}</p>
              <button onClick={() => deleteItem(el.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
