import React from 'react'

const Sidebar = () => {
  return (
    <div className="bg-black text-white p-4">
    <input
      type="text"
      placeholder="Search Product"
      className="w-full bg-gray-800 text-white p-2 rounded mb-4"
    />
    <div>
      <h3 className="font-bold mb-2">Category</h3>
      <ul className="space-y-2">
        <li><input type="checkbox" /> Sandwiches</li>
        <li><input type="checkbox" /> Burger</li>
        {/* Add more categories */}
      </ul>
    </div>
  </div>
  )
}

export default Sidebar