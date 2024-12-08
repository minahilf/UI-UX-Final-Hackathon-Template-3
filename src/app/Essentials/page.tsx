import Image from "next/image";
import e1 from "../../../Assets/e1.png"
import e2 from "../../../Assets/e2.png"
import e3 from "../../../Assets/e3.png"

export default function Essentials(){
    return(
            <div className="mt-10 ">
            <p className="text-[14px] font-medium text-center sm:text-start sm:ml-[10%] lg:ml-[5%] xl:ml-[8%] xl:text-[20px] lg:text-[18px] ">The Essentials</p>
            <div className="flex flex-wrap justify-center items-center gap-2 mt-4">
                <div className="flex flex-col">
                <Image src={e1}  alt="e1" className="w-[200px] h-[300px] lg:w-[300px] lg:h-[400px] xl:w-[400px] xl:h-[500px]"/>
                <div className="w-[80px] h-[30px] bg-white rounded-full flex justify-center items-center relative bottom-10 left-2">
                    <button className="font-medium text-[12px]">Men&apos;s </button>
                </div>
                </div>
                <div className="flex flex-col">
                <Image src={e2}  alt="e1" className="w-[200px] h-[300px] lg:w-[300px] lg:h-[400px] xl:w-[400px] xl:h-[500px]"/>
                <div className="w-[80px] h-[30px] bg-white rounded-full flex justify-center items-center relative bottom-10 left-2">
                    <button className="font-medium text-[12px]">Women&apos;s </button>
                </div>
                </div>
                <div className="flex flex-col">
                <Image src={e3}  alt="e1" className="w-[200px] h-[300px] lg:w-[300px] lg:h-[400px] xl:w-[400px] xl:h-[500px]"/>
                <div className="w-[80px] h-[30px] bg-white rounded-full flex justify-center items-center relative bottom-10 left-2">
                    <button className="font-medium text-[12px]">Kid&apos;s </button>
                </div>
                </div>
                
            </div>
        </div>
    )
}