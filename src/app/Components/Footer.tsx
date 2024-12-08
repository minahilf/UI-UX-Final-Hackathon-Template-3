import Image from "next/image"
import location from "../../../Assets/location.png"
import fb from "../../../Assets/fb.png"
import insta from "../../../Assets/insta.png"
import yt from "../../../Assets/yt.png"
import tweet from "../../../Assets/tweet.png"

export default function Footer(){
    return(
        <div className="bg-black p-8 mt-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 ">
             <ul className="text-white text-[14px] justify-center flex flex-col gap-6 xl:ml-4 ">
                    <li>FIND A STORE</li>
                    <li>BECOME A MEMBER</li>
                    <li>SIGN UP FOR EMAIL</li>
                    <li>SEND US FEEDBACK</li>
                    <li>STUDENT DISCOUNT</li>
                </ul>

                <ul className="text-[#7E7E7E] text-[14px] justify-center flex flex-col gap-4 mt-6">
                    <li className="text-white">GET HELP</li>
                    <li>Order Status</li>
                    <li>Delivery</li>
                    <li>Returns</li>
                    <li>Payment Options</li>
                    <li>Contact Us On Nike.com Inquiries</li>
                    <li>Contact Us On All Other Inquiries</li>
                </ul>

                <ul className="text-[#7E7E7E] text-[14px] justify-center flex flex-col gap-4 mb-[8%] mt-6 xl:mb-[23%] sm:mb-[32%]">
                    <li className="text-white">ABOUT NIKE</li>
                    <li>News</li>
                    <li>Careers</li>
                    <li>Investors</li>
                    <li>Sustainability</li>
                </ul>
                

                
                <ul className="flex gap-4  sm:mt-[12%]">
                    <li><Image src={tweet} alt="tweet" /></li>
                    <li><Image src={fb} alt="fb" /></li>
                    <li><Image src={yt} alt="yt" /></li>
                    <li><Image src={insta} alt="insta" /></li>
                </ul>
        </div>

<div className="sm:flex sm:items-center justify-between ">
<div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
        <div className="flex items-center mt-4">
            <Image src={location} alt="pak" className="w-6 h-5"/>
            <p className="text-white text-[14px]">Pakistan</p>
        </div>
        <p className="text-[#7E7E7E] text-[12px] mt-2 sm:mt-4">&copy; 2024 Nike,Inc. All Rights Reserved</p>
        </div>
        <ul className="text-[#7E7E7E] text-[11px] flex mt-2 gap-4 sm:text-[12px] sm:mt-4">
            <li>Guides</li>
            <li>Terms of Sale</li>
            <li>Terms of Use</li>
            <li>Nike Privacy Policy</li>
        </ul>
        </div>
        </div>
        
    )
}