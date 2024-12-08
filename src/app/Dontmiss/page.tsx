import Image from "next/image"
import dontmiss from "../../../Assets/dontmiss.png"

export default function DontMiss(){
    return(
        <div>
        <div className="mt-10">
            <p className="text-[14px] font-medium ml-6 xl:ml-[4%] xl:text-[20px] lg:text-[18px] ">Featured</p>
            <div className="pl-5 pr-5 pt-2 pb-5 flex justify-center ">
                <Image src={dontmiss} alt="featured" />
            </div>
           
        
        </div>
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center mb-2 ">
                <h1 className="text-[20px] font-medium sm:text-[36px] lg:text-[48px] xl:text-[52px] text-center">FLIGHT ESSENTIALS</h1>
            </div>
        </div>
        <p className="text-[9px] text-center px-2 xl:text-[18px] lg:text-[16px] sm:text-[14px]">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
        
        <div className="flex mt-4 justify-center items-center gap-2">
        <div className="bg-black h-[30px] w-[70px] rounded-full flex justify-center items-center p-4  xl:h-[36px] sm:w-[120px] sm:h-[40px] xl:w-[110px]">
            <button className="text-white text-[10px] font-medium xl:text-[14px] sm:text-[16px]">Shop</button>
        </div>
        </div>
        </div>
    )
}