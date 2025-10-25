'use client'
import React, { useMemo, useState } from "react"

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name")
  const itemsToSort = [...items];


  if (sortBy === "name") {
    itemsToSort.sort((a, b) => a.name.localeCompare(b.name))
  } else if (sortBy === "category") {
    itemsToSort.sort((a, b) => a.category.localeCompare(b.category))
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
        {itemsToSort.map(item => (
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
