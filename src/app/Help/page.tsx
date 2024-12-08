import Image from "next/image"
import phone from "../../../Assets/phone.png"
import msg from "../../../Assets/msg.png"
import envelope from "../../../Assets/envelope.png"
import loc from "../../../Assets/loc.png"
import like from "../../../Assets/like1.png"
import dislike from "../../../Assets/dislike.png"
import search from "../../../Assets/search.png"

export default function Help() {
    return (
        <div className="p-4">
            <div className="flex flex-col justify-center items-center gap-2">
                <h1 className="text-[28px] font-medium">GET HELP</h1>
                <input
                    type="text"
                    name="email"
                    className="border border-gray-200 rounded-md h-[40px] w-[280px] px-2 text-[#757575] text-[14px]"
                    placeholder="What can we help you with?"
                />
                <Image
                    src={search}
                    alt=""
                    className="w-8 h-6 relative bottom-10 left-[28%] sm:left-[16%] lg:left-[12%] xl:left-[8%]"
                />
            </div>

            <div className="grid gap-8 mt-6 lg:grid-cols-[3fr,1fr] xl:grid-cols-[4fr,1fr]">
                {/* FAQ Section */}
                <div className="flex-1">
                    <h1 className="text-[24px] font-medium text-center lg:text-start">
                        WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
                    </h1>
                    <p className="text-[12px] mt-4 xl:text-[16px] lg:text-[14px]">
                        We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
                    </p>
                    <p className="text-[12px] mt-4 xl:text-[16px] lg:text-[14px]">
                        Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro
                    </p>
                    <p className="text-[12px] mt-4 xl:text-[16px] lg:text-[14px]">
                        If you enter your PAN information at checkout, youll be able to pay for your order with PayTM or a local credit or debit card.
                    </p>
                    <p className="text-[12px] mt-4 xl:text-[16px] lg:text-[14px]">Apple Pay</p>
                    <p className="text-[12px] mt-4 font-medium underline xl:text-[16px] lg:text-[14px]">
                        Nike Members
                    </p>
                    <p className="text-[12px] xl:text-[16px] lg:text-[14px]">
                        can store multiple debit or credit cards in their profile for faster checkout. If youre not already a Member, join us today.
                    </p>
                    <div className="flex gap-4">
                        <div className="w-[100px] bg-black rounded-full h-[30px] flex justify-center items-center mt-4">
                            <button className="text-[14px] font-medium text-white">JOIN US</button>
                        </div>
                        <div className="w-[100px] bg-black rounded-full h-[30px] flex justify-center items-center mt-4">
                            <button className="text-[14px] font-medium text-white">SHOP NIKE</button>
                        </div>
                    </div>

                    <h1 className="text-[16px] font-medium mt-4">FAQs</h1>
                    {/* FAQs */}
                    <p className="text-[12px] font-bold mt-2 xl:text-[16px] lg:text-[14px]">
                        Does my card need international purchases enabled?
                    </p>
                    <p className="text-[12px] mt-2 xl:text-[16px] lg:text-[14px]">
                        Yes, we recommend asking your bank to enable international purchases on your card.You will be notified at checkout if international purchases need to be enabled.
                    </p>
                    <p className="text-[12px] mt-2 xl:text-[16px] lg:text-[14px]">Please note, some banks may charge a small transaction fee for international orders.</p>

                    <p className="text-[12px] font-bold mt-4 xl:text-[16px] lg:text-[14px]">Can I pay for my order with multiple methods?</p>
                    <p className="text-[12px] mt-2 xl:text-[16px] lg:text-[14px]">No, payment for Nike orders cant be split between multiple payment methods.</p>

                    <p className="text-[12px] font-bold mt-4 xl:text-[16px] lg:text-[14px]">What payment method is accepted for SNKRS orders?</p>
                    <p className="text-[12px] mt-2 xl:text-[16px] lg:text-[14px]">You can use any accepted credit card to pay for your SNKRS order.</p>

                    <p className="text-[12px] font-bold mt-4 xl:text-[16px] lg:text-[14px]">Why dont I see Apple Pay as an option?</p>
                    <p className="text-[12px] mt-2 xl:text-[16px] lg:text-[14px]">To see Apple Pay as an option in the Nike App or on Nike.com, youll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, youll need to use Safari to use Apple Pay on Nike.com.</p>

                    <p className="text-[12px] mt-4 xl:text-[16px] lg:text-[14px]">Was this answer helpful?</p>
                    <div className="flex gap-2 items-center mt-1">
                        <Image src={like} alt="" />
                        <Image src={dislike} alt="" />
                    </div>
                    <p className="text-[12px] text-[#757575] mt-4 xl:text-[14px]">RELATED</p>
                    <div className="flex flex-col gap-2 mt-2">
                        <p className="text-[12px] ml-4 font-medium underline xl:text-[14px] lg:text-[14px lg:text-[14px]]">WHAT ARE NIKE&apos;s DELIVERY OPTIONS?</p>
                        <p className="text-[12px] ml-4 font-medium underline xl:text-[14px] lg:text-[14px lg:text-[14px]]">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>
                    </div>


                </div>

                {/* Contact Section */}
                <div className="flex-1">
                    <h1 className="text-[24px] font-medium text-center mt-6 lg:mt-0">CONTACT</h1>
                    <div className="flex flex-col gap-2 justify-center items-center mt-4">
                        <Image src={phone} alt="" />
                        <p className="font-medium text-[12px]">000 800 919 0566</p>
                        <p className="text-[10px] text-center">
                            Products & Orders: 24 hours a day, <br /> 7 days a week <br />
                            Company Info & Enquiries: 07:30 - <br />16:30, Monday - Friday
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-8">
                        <Image src={msg} alt="" />
                        <p className="font-medium text-[12px]">24 hours a day</p>
                        <p className="text-[12px] text-center">7 days a week</p>
                    </div>

                    <div className="flex flex-col justify-center items-center mt-8">
                        <Image src={envelope} alt="" />
                        <p className="font-medium text-[12px]">Well reply within</p>
                        <p className="text-[12px] text-center">five business days</p>
                    </div>

                    <div className="flex flex-col justify-center items-center mt-8">
                        <Image src={loc} alt="" />
                        <p className="font-medium text-[12px]">STORE LOCATOR</p>
                        <p className="text-[12px] text-center">Find Nike retail stores near you</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
