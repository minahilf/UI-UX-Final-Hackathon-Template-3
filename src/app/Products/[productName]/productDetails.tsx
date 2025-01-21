// 'use client';
// import { useWishlist } from "@/app/Context/WishlistContext"; 
// import { useCart } from "@/app/Context/CartContext";
// import { urlFor } from '@/sanity/lib/image';
// import Image from "next/image";
// import buy from "../../../../Assets/buy.png";
// import { useRouter } from 'next/navigation';
// import heart from "../../../../Assets/like.png"
// import FAQ from "@/app/Components/FAQ";
// import Size from "@/app/Components/Size";
// interface Nikeitems {
//   productName: string;
//   price: number;
//   colors: string;
//   inventory: number;
//   image: string;
//   description: string;
// }

// export default function ProductDetail({
//   productDetails,
//   productName,
// }: {
//   productDetails: Nikeitems[];
//   productName: string;
// }) {
//   const router = useRouter();
//   const { addItem, items } = useCart(); 
//   const { addToWishlist } = useWishlist();

//   const decodedProductName = decodeURIComponent(productName);

//   const product = productDetails.find((item: Nikeitems) =>
//     item.productName.trim().toLowerCase() === decodedProductName.trim().toLowerCase()
//   );

//   if (!product) {
//     return (
//       <div className="flex flex-col justify-center items-center h-screen">
//         <p className="text-[40px] text-center font-extrabold">Product not found!</p>
//       </div>
//     );
//   }

//   const handleAddToCart = () => {
//     const existingItem = items.find(item => item.productName === product.productName);
//     if (existingItem) {
//       if (existingItem.quantity < product.inventory) {
//         addItem({
//           image: product.image,
//           productName: product.productName,
//           quantity: 1,
//           price: product.price,
//           inventory: product.inventory, 
//         });
//       } else {
//         alert('Cannot add more items, stock is limited.');
//       }
//     } else {
//       addItem({
//         image: product.image,
//         productName: product.productName,
//         quantity: 1,
//         price: product.price,
//         inventory: product.inventory, 
//       });
//     }
//     router.push('/Bag');
//   };


//   const handleAddToFavorites = () => {
//     addToWishlist({
//       productName: product.productName,
//       price: product.price,
//       image: product.image,
      
//     });
//     alert('Added to Favorites');
//   };

//   const imageUrl = product.image ? urlFor(product.image).url() : '/default-image.jpg';

//   return (
//     <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between p-6 lg:p-12 max-w-6xl mx-auto">
//       <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
//         <Image
//           src={imageUrl}
//           alt={product.productName}
//           width={400}
//           height={400}
//           className="object-contain"
//         />
//       </div>

//       <div className="w-full lg:w-1/2 flex flex-col space-y-4 text-center lg:text-left">
//         <h1 className="text-2xl lg:text-4xl font-bold">{product.productName}</h1>
//         <p className="text-gray-600">{product.description}</p>
//         <p className="text-black font-bold">Stock: {product.inventory}</p>
//         <p className="text-lg lg:text-2xl font-semibold text-gray-800">
//           PKR {product.price}
//         </p>

//         <button
//           onClick={handleAddToCart}
//           className="bg-black text-white flex items-center justify-center space-x-2 px-6 py-3 rounded-full transition duration-300 "
//         >
//           <Image src={buy} alt="Buy now" width={24} height={24} />
//           <span>Add To Cart</span>
//         </button>

//         <button
//           onClick={handleAddToFavorites}
//           className="bg-white text-black border flex items-center justify-center space-x-2 px-6 py-3 rounded-full transition duration-300 hover:border-black"
//         >
//           <Image src={heart} alt="fav" width={24} height={24} />
//           <span>Add To Favorites</span>
//         </button>
//         <Size/>
//         <FAQ/>
        
//       </div>
//     </div>
//   );
// }

'use client';
import { useState } from "react";
import { useWishlist } from "@/app/Context/WishlistContext"; 
import { useCart } from "@/app/Context/CartContext";
import { urlFor } from '@/sanity/lib/image';
import Image from "next/image";
import buy from "../../../../Assets/buy.png";
import { useRouter } from 'next/navigation';
import heart from "../../../../Assets/like.png";
import FAQ from "@/app/Components/FAQ";
import Size from "@/app/Components/Size";

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
  const { addItem, items } = useCart(); 
  const { addToWishlist } = useWishlist();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const decodedProductName = decodeURIComponent(productName);

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
    if (!selectedSize) {
      alert('Please select a size before adding to cart.');
      return;
    }

    const existingItem = items.find(item => item.productName === product.productName);
    if (existingItem) {
      if (existingItem.quantity < product.inventory) {
        addItem({
          image: product.image,
          productName: product.productName,
          quantity: 1,
          price: product.price,
          inventory: product.inventory, 
        });
      } else {
        alert('Cannot add more items, stock is limited.');
      }
    } else {
      addItem({
        image: product.image,
        productName: product.productName,
        quantity: 1,
        price: product.price,
        inventory: product.inventory, 
      });
    }
    router.push('/Bag');
  };

  const handleAddToFavorites = () => {
    addToWishlist({
      productName: product.productName,
      price: product.price,
      image: product.image,
    });
    alert('Added to Favorites');
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
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
          PKR {product.price}
        </p>

        <Size onSizeSelect={handleSizeSelect} />

        <button
          onClick={handleAddToCart}
          className="bg-black text-white flex items-center justify-center space-x-2 px-6 py-3 rounded-full transition duration-300"
        >
          <Image src={buy} alt="Buy now" width={24} height={24} />
          <span>Add To Cart</span>
        </button>

        <button
          onClick={handleAddToFavorites}
          className="bg-white text-black border flex items-center justify-center space-x-2 px-6 py-3 rounded-full transition duration-300 hover:border-black"
        >
          <Image src={heart} alt="fav" width={24} height={24} />
          <span>Add To Favorites</span>
        </button>
        
        <FAQ />
      </div>
    </div>
  );
}
