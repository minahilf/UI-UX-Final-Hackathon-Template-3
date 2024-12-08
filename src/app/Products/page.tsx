import Image from "next/image";
import Header2 from "../Components/Header2";
import SideBar from "../Components/Side";
import p1 from "../../../Assets/p1.png"
import p2 from "../../../Assets/p2.png"
import p3 from "../../../Assets/p3.png"
import p4 from "../../../Assets/p4.png"
import p5 from "../../../Assets/p5.png"
import p6 from "../../../Assets/p6.png"
import p7 from "../../../Assets/p7.png"
import p8 from "../../../Assets/p8.png"
import p9 from "../../../Assets/p9.png"
import p10 from "../../../Assets/p10.png"
import p11 from "../../../Assets/p11.png"
import p12 from "../../../Assets/p12.png"


export default function Products() {
    const productData = [
        { image: p1, code: "Just In", name: "Nike Air Force 1 Mid '07", color: "1 Colour", price: "MRP: ₹ 10,695.00", category: "Men's Shoes" },
        { image: p2, code: "Just In", name: "Nike Court Vision Low Next Nature", price: "MRP: ₹ 4,995.00", category: "Men's Shoes", color: "1 Colour" },
        { image: p3, code: "Just In", name: "Nike Air Force 1 PLATFORM", price: "MRP: ₹ 8,695.00", category: "Women's Shoes", color: "1 Colour" },
        { image: p4, code: "Just In", name: "Nike Air Force 1 React", price: "MRP: ₹ 13,295.00", category: "Men's Shoes", color: "1 Colour" },
        { image: p5, code: "Promo Exclusion", name: "Air Jordan 1 Elevate Low", price: "MRP: ₹ 11,895.00", category: "Women's Shoes", color: "1 Colour" },
        { image: p6, code: "Just In", name: "Nike Standard Issue", price: "MRP: ₹ 2,895.00", category: "Men's Basketball Jersey", color: "1 Colour" },
        { image: p7, code: "Promo Exclusion", name: "Nike Dunk Low Retro SE", price: "MRP: ₹ 9,695.00", category: "Men's Shoes", color: "1 Colour"},
        { image: p8, code:"Sustainable Materials", name: "Nike Dri-FIT UV Hyverse", price: "MRP: ₹ 2,495.00", category: "Men's Short-Sleeve Graphic Fitness Top", color: "1 Colour" },
        { image: p9, code: "Just In", name: "Nike Court Vision Low", price: "MRP: ₹ 5,695.00", category: "Men's Shoes", color: "1 Colour" },
        { image: p10, code: "Just In", name: "Nike Dri-FIT Ready", price: "MRP: ₹ 2,495.00", category: "Men's Short-Sleeve Fitness Top", color: "3 Colour" },
        { image: p11, code: "Just In", name: "Nike One Leak Protection: Period", price: "MRP: ₹ 3,395.00", category: "Women's Mid-Rise 18cm (approx.) Biker Shorts", color: "2 Colour" },
        { image: p12, code: "Just In", name: "Nike Air Force 1 LV8 3", price: "MRP: ₹ 7,495.00", category: "Older Kid's Shoe", color: "1 Colour" },
      ];
      const Related = [
        {category:"Best Selling Products"},
        {category: "Best Shoes"},
        {category: "New Basketball Shoes"},
        {category: "New Football Shoes"},
        {category: "New Men's Shoes"},
        {category: "New Running Shoes"},
        {category: "Best Men's Shoes"},
        {category: "New Jordan Shoes"},
        {category: "Best Women's Shoes"},
        {category: "Best Training & Gym"}
      ]
  return (
    <div>
      <Header2 />
      <div className="flex">
      <SideBar/>
      <div className="px-4 py-8 ">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productData.map((product, index) => (
          <div key={index}>
            <Image
              src={product.image}
              alt={product.name}
              className="rounded-md xl:w-[300px] xl:h-[300px]"
              width={200}
              height={200}
            />
            <h1 className="text-[12px] text-[#9E3500] font-medium mt-2">{product.code}</h1>
            <h3 className="text-[12px] font-bold ">{product.name}</h3>
            <p className="text-[#757575] text-[12px]">{product.category}</p>
            <p className="text-[#757575] text-[12px]">{product.color}</p>
            <p className="text-black font-medium text-[10px] mt-1">{product.price}</p>
          </div>
        ))}
      </div>
      <div className="border-t  w-auto mt-10">
      </div>
      <p className="text-[15px] font-medium mt-8">Related Categories</p>
      <div className="mt-4 flex flex-wrap gap-2 justify-center xl:justify-start lg:justify-start sm:justify-start">
      {Related.map((product, index) => (
    <div key={index} className="bg-transparent border w-[120px] h-[30px] text-center rounded-full flex items-center justify-center">
      <button className="text-[10px] font-medium">{product.category}</button>
    </div>
  ))}
        </div>
        </div>
        </div>
</div>
    
  );
}
