'use client';
import { useWishlist } from "../Context/WishlistContext";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export default function Wishlist() {
  const { wishlist } = useWishlist();

  return (
    <div className="p-6">
      <h1 className="text-[24px] font-medium ml-10 mt-10">Favorites</h1>
      {wishlist.length === 0 ? (
        <p className="text-center text-[24px] font-bold text-black mt-6">No favorite items</p>
      ) : (
        <ul className="space-y-6 mt-6">
          {wishlist.map((item) => {
            const imageUrl = item.image ? urlFor(item.image).url() : '/default-image.jpg';

            return (
              <li key={item.productName} className="shadow-md p-4 rounded-lg flex flex-col items-center">
                <Image
                  src={imageUrl}
                  alt={item.productName}
                  className="rounded-md xl:w-[300px] xl:h-[300px]"
                  width={200}
                  height={200}
                />
                <h3 className="text-[12px] font-bold mt-2">{item.productName}</h3>
                <p className="text-black font-medium text-[10px] mt-1">
                  PKR {item.price}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
