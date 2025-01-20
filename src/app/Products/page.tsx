'use client'
import Image from "next/image";
import SideBar from "../Components/Side";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { useSearch } from "../Context/searchContext"; 
import Header2 from "../Components/Header2";

interface NProducts {
  id: number;
  productName: string;
  category: string;
  price: number;
  inventory: number;
  status: string;
  image: string;
  description: string;
}

export default function Products() {
  const [products, setProducts] = useState<NProducts[]>([]);
  const [showFilters, setShowFilters] = useState(true);
  const [originalProducts, setOriginalProducts] = useState<NProducts[]>([]);
  const { searchTerm } = useSearch();
  

  useEffect(() => {
    const fetchProducts = async () => {
      const NikeProducts = await client.fetch(`*[_type == "product"]{
        id,
        productName,
        category,
        price,
        inventory,
        status,
        image,
        description
      }`);
      setProducts(NikeProducts);
      setOriginalProducts(NikeProducts);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setProducts(originalProducts);
      return;
    }

    const searchResults = originalProducts.filter((product) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProducts(searchResults);
  }, [searchTerm, originalProducts]);

  const handleSort = (sortType: string) => {
    const sortedProducts = [...products];
    if (sortType === 'price-high') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortType === 'price-low') {
      sortedProducts.sort((a, b) => a.price - b.price);
    }
    setProducts(sortedProducts);
  };

  const handleResetFilters = () => {
    setProducts(originalProducts);
  };

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

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  return (
    <div>
      <Header2 
        onSortChange={handleSort}
        onFilterToggle={toggleFilters}
        showFilters={showFilters}
      />
      <div className="flex">
        {showFilters && <SideBar />}
        <div className="px-4 py-8">
          <div className="flex justify-between mb-4">
            <button
              onClick={handleResetFilters}
              className="px-4 py-2 bg-black text-white rounded-md"
            >
              Reset Filters
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.length === 0 && searchTerm && (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500">No products found matching "{searchTerm}"</p>
              </div>
            )}
            
            {products.map((product: NProducts) => (
              <div key={product.productName}>
                <Link href={`/Products/${product.productName}`}>
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.productName}
                    className="rounded-md xl:w-[300px] xl:h-[300px]"
                    width={200}
                    height={200}
                  />
                  <h1 className="text-[12px] text-[#9E3500] font-medium mt-2">
                    {product.status}
                  </h1>
                  <h3 className="text-[12px] font-bold">{product.productName}</h3>
                  <p className="text-[#757575] text-[12px]">{product.category}</p>
                  <p className="text-black font-medium text-[10px] mt-1">
                    PKR {product.price}
                  </p>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="border-t w-auto mt-10"></div>
          <p className="text-[15px] font-medium mt-8">Related Categories</p>
          <div className="mt-4 flex flex-wrap gap-2 justify-center xl:justify-start lg:justify-start sm:justify-start">
            {Related.map((product, index) => (
              <div
                key={index}
                className="bg-transparent border w-[120px] h-[30px] text-center rounded-full flex items-center justify-center"
              >
                <button className="text-[10px] font-medium">
                  {product.category}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}