import Image from "next/image";
import right from "../../../Assets/right.png";
import left from "../../../Assets/left.png";
import { productData2 } from "../BestAirMax/page";
import Link from "next/link";

export default function Best() {
  

  return (
    <div className="px-4">
      {/* Header Section */}
      <div className="flex flex-col mt-10 sm:flex-row sm:items-center sm:gap-[40%] sm:justify-between">
        <h1 className="text-[14px] font-medium text-text2 text-center xl:ml-[3%] xl:text-[16px] lg:ml-[4%] lg:text-[14px] sm:ml-[5%] sm:mt-4">
          Best of Air Max
        </h1>

        <div className="flex gap-2 items-center justify-center mt-4 lg:ml-[15%] xl:ml-[25%] sm:mr-4">
          <p className="text-[12px] font-medium">Shop</p>
          <div className="bg-[#E5E5E5] rounded-full h-7 w-7 flex items-center justify-center">
            <Image src={left} alt="arrow" className="w-3 h-3" />
          </div>
          <div className="bg-[#CCCCCC] rounded-full h-7 w-7 flex items-center justify-center">
            <Image src={right} alt="arrow" className="w-3 h-3" />
          </div>
        </div>
      </div>

      {/* Product */}
      <div className="flex overflow-x-auto scrollbar-hide mt-4 gap-4">
        {productData2.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-[250px] sm:w-[300px] "
          >
            <Link href={`/Best/${product.id}`}>
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="object-cover"
            />
            <div className="flex items-center justify-between mt-2">
              <h3 className="text-[12px] font-medium">{product.name}</h3>
              <p className="text-[10px]">{product.price}</p>
            </div>
            <p className="text-[12px] text-[#757575]">{product.category}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
