import Image from "next/image"
import hero from "../../../Assets/hero.png"
export default function Hero(){
    return(
        <div>
            <div className="bg-[#F5F5F5] w-full h-[50px] flex flex-col justify-center items-center">
                <p className="text-[14px] font-medium">Hello Nike App</p>
                <div className="flex gap-1">
                <p className="text-[10px] sm:text-[12px]">Download the app to access everything Nike.</p>
                <p className="text-[10px] sm:text-[12px] underline font-bold"> Get Your Great</p>
                </div>
            </div>
            <div className="px-4 lg:px-6 xl:flex xl:justify-center xl:items-center">
                <Image src={hero} alt="hero" />
            </div>

<div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center mt-10 mb-2 ">
                <p className="font-medium text-[14px] xl:text-[16px] lg:text-[16px]">First Look</p>
                <h1 className="text-[30px] font-medium sm:text-[36px] lg:text-[48px] xl:text-[52px]">NIKE AIR MAX PULSE</h1>
            </div>
        </div>
        <p className="text-[10px] text-center px-2 xl:text-[14px] lg:text-[13px] sm:text-[10px]">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br />
        —designed to push you past your limits and help you go to the max.</p>
        
        <div className="flex mt-6 justify-center items-center gap-2">
        <div className="bg-black h-[30px] w-[100px] rounded-full flex justify-center items-center p-4 xl:w-[120px] xl:h-[36px]">
            <button className="text-white text-[12px] font-medium xl:text-[14px]">Notify Me</button>
        </div>
        <div className="bg-black h-[30px] w-[110px] rounded-full flex justify-center items-center p-4 xl:w-[120px] xl:h-[36px]">
            <button className="text-white text-[12px] font-medium xl:text-[14px]">Shop Air Max</button>
        </div>
        </div>
        </div>
    )
}