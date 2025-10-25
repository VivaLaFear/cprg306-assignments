'use client'
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemData from "./items.json";
import React, { useState } from "react";




export default function Page() {

  const [items, setItems] = useState(itemData);

  function handleAddItem(newItem) {
    setItems((old) => [...old, newItem]);
  }

  return (
    <main>
      <header>
        <h1>Shopping List</h1>
      </header>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}

