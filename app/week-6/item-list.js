'use client'
import React, { useMemo, useState } from "react"
import rawItems from './items.json'

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name")
  const items = [...rawItems]


  if (sortBy === "name") {
    items.sort((a, b) => a.name.localeCompare(b.name))
  } else if (sortBy === "category") {
    items.sort((a, b) => a.category.localeCompare(b.category))
  }
  return (
    <div>
      <button
        onClick={() => setSortBy("name")}
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >Name</button>
      <button
        onClick={() => setSortBy("category")}
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >Category</button>

      <ul>
        {items.map(item => (
          <li key={item.id} className="border border-gray-400">
            <div className="">{item.name}</div>
            <div className="">Category: {item.category}</div>
            <div className="">Quantity: {item.quantity}</div>
          </li>
        ))}
      </ul>
    </div >


  )

}
