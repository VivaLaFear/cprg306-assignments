'use client'
import React, { use, useState } from "react"

// STILL HAVE TO MAKE THIS THING POP UP THE NEW ITEM IN A WINDOW

export default function NewItem() {
  const [quantity, setQuantity] = useState(1)
  const [name, setName] = useState("")
  const [category, setCategory] = useState("produce")

  function handleSubmit(event) {
    event.preventDefault()
    let item = { name, quantity, category }
    console.log(`The item added is: Name: ${name}, Quantity: ${quantity}, Category: ${category}`)

    setName("")
    setQuantity(1)
    setCategory("produce")
  }

  function increment() {
    if (quantity < 20)
      setQuantity(quantity + 1)
    return quantity
  }

  function decrement() {
    if (quantity > 1)
      setQuantity(quantity - 1)
    return quantity
  }
  return (
    <form onSubmit={handleSubmit}
      className="flex flex-col bg-gray-100 p-6"
    >
      <label className="">Item Name</label>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label className="">Quantity (1-20)</label>
      <input
        type="number"
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)}
      />
      <label className="">Category</label>
      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="frozen foods">Frozen Foods</option>
        <option value="canned goods">Canned Goods</option>
        <option value="beverages">Beverages</option>
        <option value="snacks">Snacks</option>
        <option value="household">Household</option>
        <option value="other">Other</option>
      </select>
      <button onClick={handleSubmit}>Submit item</button>
    </form>
  )
}
