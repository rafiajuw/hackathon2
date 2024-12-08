import React from 'react'

const ProductGrid = () => {
    const products = [
      { name: "Burger", price: "$21.00", oldPrice: "$45.00", image: "/burger.png" },
      // Add more products...
    ];
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {products.map((product, index) => (
          <div key={index} className="bg-black text-white p-4 rounded">
            <img src={product.image} alt={product.name} className="rounded w-full h-40 object-cover" />
            <h3 className="mt-2">{product.name}</h3>
            <p className="line-through text-gray-400">{product.oldPrice}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    );
  };
export default ProductGrid