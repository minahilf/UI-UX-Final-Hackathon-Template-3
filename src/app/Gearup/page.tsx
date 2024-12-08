import Image from "next/image";
import man from "../../../Assets/man.png";
import woman from "../../../Assets/woman.png";
import tights from "../../../Assets/tights.png";
import shorts from "../../../Assets/shorts.png";
import left from "../../../Assets/left.png";
import right from "../../../Assets/right.png";

export default function Gear() {
    const ManProduct = [
      {
        image: man,
        name: "Nike Dri-FIT ADV TechKnit Ultra",
        price: "₹ 3985",
        category: "Mens Short-Sleeve Running Top",
      },
      {
        image: shorts,
        name: "Nike Dri-FIT Challenger",
        price: "₹ 3495",
        category: "Mens 18cm (approx.) 2-in-1 Versatile Shorts",
      },
    ];
  
    const WomenProduct = [
      {
        image: woman,
        name: "Nike Dri-FIT ADV Run Division",
        price: "₹ 3495",
        category: "Womens Long Sleeve Running Top",
      },
      {
        image: tights,
        name: "Nike Fast",
        price: "₹ 3795",
        category: "Womens Mid-Rise 7/8 Running Leggings with Pockets",
      },
    ];
  
    return (
      <div>
        <div className="flex flex-col mt-10 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-[14px] font-medium text-text2 text-center xl:ml-[3%] xl:text-[16px] lg:ml-[4%] lg:text-[14px] sm:ml-[5%] sm:mt-4">
            Gear Up
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row lg:ml-10 xl:ml-[10%]">
          {/* Men's Section */}
          <div className="flex flex-col sm:w-1/2 lg:w-1/2 sm:mr-4">
            <div className="flex gap-2 items-center justify-start sm:justify-center sm:mt-0 ml-[35%] mt-4 xl:justify-start xl:ml-2">
              <p className="text-[12px] font-medium">Shop Men&apos;s </p>
              <div className="bg-[#E5E5E5] rounded-full h-7 w-7 flex items-center justify-center">
                <Image src={left} alt="arrow" className="w-3 h-3" />
              </div>
              <div className="bg-[#CCCCCC] rounded-full h-7 w-7 flex items-center justify-center">
                <Image src={right} alt="arrow" className="w-3 h-3" />
              </div>
            </div>
            <div className="flex flex-row gap-4 mt-4 p-4 overflow-x-scroll justify-between scrollbar-hide sm:flex-row sm:justify-start lg:justify-start ">
              {ManProduct.map((product, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[200px] sm:w-auto lg:w-[200px] "
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="object-cover sm:w-[200px]"
                  />
                  <div className="flex items-center justify-between mt-2 sm:justify-start">
                    <h3 className="text-[10px] font-semibold">{product.name}</h3>
                    <p className="text-[10px]">{product.price}</p>
                  </div>
                  <p className="text-[12px] text-[#757575] max-w-[70%] sm:max-w-[65%]">
                    {product.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
  
          {/* Women's Section */}
          <div className="flex flex-col sm:w-1/2 lg:w-1/2 sm:ml-4">
            <div className="flex gap-2 items-center justify-start sm:justify-center sm:mt-0 ml-[35%] mt-4 xl:justify-start xl:ml-2 ">
              <p className="text-[12px] font-medium">Shop Women&apos;s </p>
              <div className="bg-[#E5E5E5] rounded-full h-7 w-7 flex items-center justify-center">
                <Image src={left} alt="arrow" className="w-3 h-3" />
              </div>
              <div className="bg-[#CCCCCC] rounded-full h-7 w-7 flex items-center justify-center">
                <Image src={right} alt="arrow" className="w-3 h-3" />
              </div>
            </div>
            <div className="flex flex-row gap-4 mt-4 p-4 justify-between  overflow-x-scroll scrollbar-hide sm:flex-row sm:justify-start lg:justify-start ">
              {WomenProduct.map((product, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[200px]  lg:w-[200px]"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="object-cover sm:w-[200px]"
                  />
                  <div className="flex items-center justify-between mt-2 sm:justify-start">
                    <h3 className="text-[10px] font-semibold">{product.name}</h3>
                    <p className="text-[10px]">{product.price}</p>
                  </div>
                  <p className="text-[12px] text-[#757575] max-w-[70%] sm:max-w-[65%]">
                    {product.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}