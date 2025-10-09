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
        className=""
      >Name</button>
      <button
        onClick={() => setSortBy("category")}
        className=""

      >Category</button>
    </div>
  )

}
