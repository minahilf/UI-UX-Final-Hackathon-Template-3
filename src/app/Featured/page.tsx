import Image from "next/image"
import Feature from "../../../Assets/feature.png"
export default function Featured(){
    return(
        <div>
        <div className="mt-10">
            <p className="text-[14px] font-medium ml-6 xl:ml-[4%] xl:text-[20px] lg:text-[18px] ">Featured</p>
            <div className="pl-5 pr-5 pt-2 pb-5 flex justify-center ">
                <Image src={Feature} alt="featured" />
            </div>
           
        
        </div>
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center mb-2 ">
                <h1 className="text-[20px] font-medium sm:text-[36px] lg:text-[48px] xl:text-[52px] text-center">STEP INTO WHAT FEELS GOOD</h1>
            </div>
        </div>
        <p className="text-[9px] text-center px-2 xl:text-[18px] lg:text-[16px] sm:text-[14px]">Cause everyone should know the feeling of running in that perfect pair.</p>
        
        <div className="flex mt-4 justify-center items-center gap-2">
        <div className="bg-black h-[30px] w-[100px] rounded-full flex justify-center items-center p-4  xl:h-[36px] sm:w-[120px] sm:h-[40px] xl:w-[140px]">
            <button className="text-white text-[10px] font-medium xl:text-[14px] sm:text-[12px]">Find Your Shoe</button>
        </div>
        </div>
        </div>
        
    )
}