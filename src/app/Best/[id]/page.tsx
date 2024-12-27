'use client';

import Image from "next/image";
import shoe1 from "../../../../public/shoe1.png"
import shoe2 from "../../../../public/shoe2.png";
import shoe3 from "../../../../public/shoe3.png";
import buy from "../../../../Assets/buy.png";
import { useCart } from "@/app/Context/CartContext";
import { useRouter } from "next/navigation";
import { use } from 'react';


export default function ProductDetail({ params }:  { params: Promise<{ id: string }> }) {
//  data 
const productData2 = [
  {
    id:1,
    image: shoe1,
    name: "Nike Air Max Pulse",
    price: "₹ 13,995",
    category: "Womens Shoes",
    description: "The Nike Air Max Pulse offers a stylish and comfortable fit designed for everyday wear. Featuring a sleek, modern silhouette, these shoes are equipped with a breathable mesh upper that ensures excellent ventilation, keeping your feet cool and comfortable. The iconic Air Max cushioning in the sole provides responsive support and a smooth ride with every step, making it perfect for long days on the go. With its bold design and vibrant color options, the Nike Air Max Pulse adds a touch of flair to any outfit while delivering the comfort and durability that Nike is known for. Whether you're running errands, heading to the gym, or meeting up with friends, these shoes will keep you feeling great all day long."
  },
  {
    id:2,
    image: shoe2,
    name: "Nike Air Max Pulse",
    price: "₹ 13,995",
    category: "Mens Shoes",
    description: "The Nike Air Max Pulse is a standout addition to any sneaker collection. With its cutting-edge design and performance-driven features, these shoes offer both style and comfort. The lightweight mesh upper provides breathability, ensuring your feet stay cool even during intense activities. The Air Max cushioning delivers exceptional support and cushioning, absorbing shock and enhancing comfort with each stride. Perfect for both casual wear and athletic performance, the Nike Air Max Pulse features a sleek design that pairs effortlessly with jeans, shorts, or workout gear. Whether you're training hard or enjoying a day off, these shoes will provide the comfort and style you need."
  },
  {
    id:3,
    image: shoe3,
    name: "Nike Air Max 97 SE",
    price: "₹ 16,995",
    category: "Mens Shoes",
    description: "The Nike Air Max 97 SE redefines comfort and style with its innovative design and high-performance features. Featuring the iconic full-length Air Max cushioning, these shoes offer superior comfort and support, making them perfect for long hours of wear. The premium leather and synthetic upper provides a sleek, durable look that stands out with bold color accents and reflective details. The unique, wave-inspired design of the Nike Air Max 97 SE adds a modern twist to the classic Air Max silhouette, giving you a fashion-forward look without compromising on comfort. Ideal for both casual outings and active days, the Nike Air Max 97 SE ensures you step out in style and confidence."
  },
  {
    id:4,
    image: shoe1,
    name: "Nike Air Max Pulse",
    price: "₹ 13,995",
    category: "Womens Shoes",
    description: "The Nike Air Max Pulse offers a stylish and comfortable fit designed for everyday wear. Featuring a sleek, modern silhouette, these shoes are equipped with a breathable mesh upper that ensures excellent ventilation, keeping your feet cool and comfortable. The iconic Air Max cushioning in the sole provides responsive support and a smooth ride with every step, making it perfect for long days on the go. With its bold design and vibrant color options, the Nike Air Max Pulse adds a touch of flair to any outfit while delivering the comfort and durability that Nike is known for. Whether you're running errands, heading to the gym, or meeting up with friends, these shoes will keep you feeling great all day long."
  },
  {
    id:5,
    image: shoe2,
    name: "Nike Air Max Pulse",
    price: "₹ 13,995",
    category: "Mens Shoes",
    description: "The Nike Air Max Pulse is a standout addition to any sneaker collection. With its cutting-edge design and performance-driven features, these shoes offer both style and comfort. The lightweight mesh upper provides breathability, ensuring your feet stay cool even during intense activities. The Air Max cushioning delivers exceptional support and cushioning, absorbing shock and enhancing comfort with each stride. Perfect for both casual wear and athletic performance, the Nike Air Max Pulse features a sleek design that pairs effortlessly with jeans, shorts, or workout gear. Whether you're training hard or enjoying a day off, these shoes will provide the comfort and style you need."
  },
  {
    id:6,
    image: shoe3,
    name: "Nike Air Max 97 SE",
    price: "₹ 16,995",
    category: "Mens Shoes",
    description: "The Nike Air Max 97 SE redefines comfort and style with its innovative design and high-performance features. Featuring the iconic full-length Air Max cushioning, these shoes offer superior comfort and support, making them perfect for long hours of wear. The premium leather and synthetic upper provides a sleek, durable look that stands out with bold color accents and reflective details. The unique, wave-inspired design of the Nike Air Max 97 SE adds a modern twist to the classic Air Max silhouette, giving you a fashion-forward look without compromising on comfort. Ideal for both casual outings and active days, the Nike Air Max 97 SE ensures you step out in style and confidence."
  },
];


  const router = useRouter();
  const { addItem } = useCart();
  const resolvedParams = use(params);

  const product_id = parseInt(resolvedParams.id);
  const product = productData2.find((item) => item.id === product_id);

  if (!product) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-[40px] text-center font-extrabold">Product not found!</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      image: product.image,
      productName: product.name,
      detail: product.category,
      quantity: 1,
      price: product.price,
    });
    router.push("/Bag"); 
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between p-6 lg:p-12 max-w-6xl mx-auto">
      <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col space-y-4 text-center lg:text-left">
        <h1 className="text-2xl lg:text-4xl font-bold">{product.name}</h1>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-lg lg:text-2xl font-semibold text-gray-800">
          {product.price}
        </p>

       <button
          onClick={handleAddToCart}
          className="bg-black text-white flex items-center justify-center space-x-2 px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300"
        >
          <Image src={buy} alt="Buy now" width={24} height={24} />
          <span>Add To Cart</span>
        </button>
      </div>
    </div>
  );
}
