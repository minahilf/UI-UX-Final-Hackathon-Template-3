import Image from "next/image";
import Header2 from "../Components/Header2";
import SideBar from "../Components/Side";
// import { productData } from "../productdata/data";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export default async function Products() {

  interface NProducts {
    id: number,
    productName : string,
    category: string,
    price : number,
    inventory:number,
    status: string,
    image: string,
    description: string
  }

  const NikeProducts = await client.fetch(`*[_type == "product"]{
    id,
productName,
category,
price,
inventory,
  status,
  image,
  description
}`)
  const Related = [
    { category: "Best Selling Products" },
    { category: "Best Shoes" },
    { category: "New Basketball Shoes" },
    { category: "New Football Shoes" },
    { category: "New Men's Shoes" },
    { category: "New Running Shoes" },
    { category: "Best Men's Shoes" },
    { category: "New Jordan Shoes" },
    { category: "Best Women's Shoes" },
    { category: "Best Training & Gym" },
  ];

  return (
    <div>
      <Header2 />
      <div className="flex">
        <SideBar />
        <div className="px-4 py-8 ">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {NikeProducts.map((product:NProducts) => (
              <div key={product.productName}>
                <Link href={`/Products/${product.productName}`}>
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.productName}
                    className="rounded-md xl:w-[300px] xl:h-[300px]"
                    width={200}
                    height={200}
                  />
                  <h1 className="text-[12px] text-[#9E3500] font-medium mt-2">{product.status}</h1>
                  <h3 className="text-[12px] font-bold">{product.productName}</h3>
                  <p className="text-[#757575] text-[12px]">{product.category}</p>
                  <p className="text-black font-medium text-[10px] mt-1">PKR {product.price}</p>
                </Link>
              </div>
            ))}
          </div>
          <div className="border-t  w-auto mt-10"></div>
          <p className="text-[15px] font-medium mt-8">Related Categories</p>
          <div className="mt-4 flex flex-wrap gap-2 justify-center xl:justify-start lg:justify-start sm:justify-start">
            {Related.map((product, index) => (
              <div
                key={index}
                className="bg-transparent border w-[120px] h-[30px] text-center rounded-full flex items-center justify-center"
              >
                <button className="text-[10px] font-medium">{product.category}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
