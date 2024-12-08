import React from 'react'

const Nav = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-black text-white">
    <select className="bg-gray-800 text-white p-2 rounded">
      <option>Newest</option>
      <option>Oldest</option>
    </select>
    <select className="bg-gray-800 text-white p-2 rounded">
      <option>Default</option>
      <option>Custom</option>
    </select>
  </div>

  )
}

export default Nav