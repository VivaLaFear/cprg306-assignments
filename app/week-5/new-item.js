'use client'
import React, { use, useState } from "react"


export default function NewItem() {
  const [quantity, setQuantity] = useState(1)
  const [name, setName] = useState("")
  const [category, setCategory] = useState("produce")

  function handleSubmit(event) {
    event.preventDefault()
    let item = { name, quantity, category }
    console.log(`The item added is: Name: ${name}, Quantity: ${quantity}, Category: ${category}`)
    alert(`Item added:
    Name: ${name}
    Quantity: ${quantity}
    Category: ${category}`)

    setShowPreview(true)
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
        required
        className="block w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 outline-none ring-offset-2 focus:border-slate-300 focus:ring-2 focus:ring-slate-300
"
      />
      <label className="">Quantity (1-20)</label>
      <input
        type="number"
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)}
        required
        className="block w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 outline-none ring-offset-2 focus:border-slate-300 focus:ring-2 focus:ring-slate-300"></input>
      <label className="">Category</label>
      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        required
        className="block w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 outline-none ring-offset-2focus:border-slate-300 focus:ring-2 focus:ring-slate-300"
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
