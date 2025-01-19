import React, { useState } from "react";

interface SizeProps {
  onSizeSelect: (size: string) => void;
}

export default function Size({ onSizeSelect }: SizeProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const sizes = ["UK 2.5", "UK 3", "UK 3.5", "UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6", "UK 6.5", "UK 7"];

  const handleSizeClick = (size: string) => {
    setSelectedSize(size); 
    onSizeSelect(size);
  };

  return (
    <div className="border-2 border-black p-4 rounded-md w-[100%]">
      <div className="flex justify-between items-center">
        <h3 className="text-black font-semibold">Select Size</h3>
        <button className="text-sm text-gray-500 underline hover:text-gray-700">Size Guide</button>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-4">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => handleSizeClick(size)}
            className={`py-2 px-4 border rounded-md text-sm ${
              selectedSize === size ? "bg-gray-400 text-white" : "bg-white text-gray-700 border-gray-300"
            } hover:border-black hover:text-black`}
          >
            {size}
          </button>
        ))}
      </div>
      <p className="mt-2 text-sm text-black">
        {!selectedSize ? "Please select a size." : `Selected size: ${selectedSize}`}
      </p>
    </div>
  );
}
