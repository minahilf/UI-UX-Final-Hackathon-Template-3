export default function ContactInfo(){
    return(
        <div className="p-4">
        <h2 className="text-[16px] font-medium text-center mt-4 mb-4">What's your contact information?</h2>
<div className="space-y-4 flex flex-col justify-center items-center">
<div className="relative">
                    <input
                        type="text"
                        className="w-[280px] h-[50px] border border-gray-400 rounded-md p-2 text-[14px] mb-2"
                        placeholder="Email"
                        required
                    />
                    <div className="absolute left-1 bottom-[-8px] text-[#757575] text-[10px]">
                    A confirmation email will be sent after checkout.
                    </div>
                </div>
                <div className="relative">
                    <input
                        type="text"
                        className="w-[280px] h-[50px] border border-gray-400 rounded-md p-2 text-[14px] mb-2"
                        placeholder="Phone Number"
                        required
                    />
                    <div className="absolute left-1 bottom-[-8px] text-[#757575] text-[10px]">
                    A carrier might contact you to confirm delivery.
                    </div>
                </div>
</div>

{/* PAN Section */}
<h2 className="text-[18px] font-medium text-center mt-6 mb-4">What's your PAN?</h2>
<div className="flex flex-col justify-center items-center">
<input type="text" className="w-[280px] h-[40px] border border-gray-400 rounded-md p-2 text-[14px]" placeholder="PAN"/>
</div>
                <div className="flex flex-col justify-center items-center">
                <label className="flex items-center justify-center text-[12px] text-[#757575] mt-10">
                    <input type="checkbox" className="mr-2 " />
                    Save PAN details to Nike Profile
                </label>
                <label className="flex items-center justify-center text-[12px] text-[#757575] mt-10 w-[80%]">
                    <input type="checkbox" className="mr-2 " />
                    I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy. eShopWorld is a trusted Nike partner.
                </label>
                </div>
                <div className="flex flex-col justify-center items-center mt-6">
                <div className="h-[40px] w-[200px] rounded-full bg-slate-500 hover:bg-black flex justify-center items-center">
                    <button className="text-white font-bold">Continue</button>
                </div>
                </div>
                <div className="flex flex-col gap-8 mt-4">
                <div className="text-[20px] mt-4 font-medium text-black border-t border-t-gray-300">Delivery</div>
                <div className="text-[20px]  font-medium text-[#757575] border-t border-t-gray-300">Shipping</div>
                <div className="text-[20px]  font-medium text-[#757575] border-t border-t-gray-300">Billing</div>
                <div className="text-[20px]  font-medium text-[#757575] border-t border-t-gray-300">Payment</div>
                </div>

                
                </div>
    )
}