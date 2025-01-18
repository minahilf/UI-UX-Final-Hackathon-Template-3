'use client';

import { useCart } from "@/app/Context/CartContext";
import { urlFor } from '@/sanity/lib/image';
import Image from "next/image";
import buy from "../../../../Assets/buy.png";
import { useRouter } from 'next/navigation';

interface Nikeitems {
  productName: string;
  price: number;
  colors: string;
  inventory: number;
  image: string;
  description: string;
}

export default function ProductDetail({
  productDetails,
  productName,
}: {
  productDetails: Nikeitems[];
  productName: string;
}) {
  const router = useRouter();
  const { addItem } = useCart();


  // Decode the product name to handle encoded URL characters like '%20' for spaces
  const decodedProductName = decodeURIComponent(productName);

  // Ensure comparison is case-insensitive and trims extra spaces
  const product = productDetails.find((item: Nikeitems) =>
    item.productName.trim().toLowerCase() === decodedProductName.trim().toLowerCase()
  );

  if (!product) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-[40px] text-center font-extrabold">Product not found!</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      image: product.image,
      productName: product.productName,
      quantity: 1,
      price: product.price,
    });
    router.push('/Bag');
  };

  const imageUrl = product.image ? urlFor(product.image).url() : '/default-image.jpg';

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between p-6 lg:p-12 max-w-6xl mx-auto">
      <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
        <Image
          src={imageUrl}
          alt={product.productName}
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col space-y-4 text-center lg:text-left">
        <h1 className="text-2xl lg:text-4xl font-bold">{product.productName}</h1>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-black font-bold">Stock: {product.inventory}</p>
        <p className="text-lg lg:text-2xl font-semibold text-gray-800">
          ${product.price}
        </p>

        <button
          onClick={handleAddToCart}
          className="bg-black text-white flex items-center justify-center space-x-2 px-6 py-3 rounded-full transition duration-300 "
        >
          <Image src={buy} alt="Buy now" width={24} height={24} />
          <span>Add To Cart</span>
        </button>
      </div>
    </div>
  ); 
}
