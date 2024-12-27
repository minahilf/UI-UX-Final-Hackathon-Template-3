import Image from "next/image"
import filter from "../../../Assets/filter.png"
import search from "../../../Assets/search.png"
import map from "../../../Assets/map.png"

export default function Find(){
    return(
        <div className="sm:flex" >
        <div className="min-h-screen p-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-center mb-4">
            <h1 className="text-lg font-semibold ">Find a Nike Store</h1>
          </div>
  
          {/* Search Input */}
          <div className="flex flex-col justify-center items-center">
          <input
                    type="text"
                    name="email"
                    className="border border-gray-200 rounded-md h-[40px] w-[280px] px-2 text-[#757575] text-[14px]"
                    placeholder="Search Location"
                />
                <Image
                    src={search}
                    alt=""
                    className="w-8 h-6 relative bottom-8 left-[32%] xl:left-[40%] lg:left-[42%] sm:left-[44%]"
                /></div>

          {/* filter  */}
          <div className="flex justify-between items-center mb-4 border-b p-4">
            <p className="text-[14px] text-[#757575]">15 Stores Near You</p>
            <div className="flex gap-2 justify-center items-center w-[100px] border border-gray-600 rounded-full h-[30px]">
                <button className="font-medium text-[12px]">Filter</button>
                <Image src={filter} alt="" className="w-5 h-5" />
            </div>
          </div>
  
          {/* Store List */}
          <ul className="space-y-4">
            <li className="border-b pb-4">
              <h2 className="text-[14px] font-semibold">
                Nike NYC - House of Innovation 000
              </h2>
              <p className="text-[12px] text-[#757575]">650 5th Ave, <br /> New York, NY, 10019, US</p>
              <div className="flex gap-2">
              <p className="text-[12px] text-red-500">Closed •</p>
              <p className="text-[12px] text-[#757575]">Opens at 11:00 am</p>
              </div>
            </li>
  
            <li className="border-b pb-4">
              <h2 className="text-[14px] font-semibold">Nike By Upper East Side</h2>
              <p className="text-[12px] text-[#757575]">1131 3rd Ave, <br />New York, NY, 10065, US</p>
              <div className="flex gap-2">
              <p className="text-[12px] text-red-500">Closed •</p>
              <p className="text-[12px] text-[#757575]">Opens at 11:00 am</p>
              </div>
            </li>
  
            <li className="border-b pb-4">
              <h2 className="text-[14px] font-semibold">Nike By Flatiron</h2>
              <p className="text-[12px] text-[#757575]">156 Fifth Ave,  <br />New York, NY, 10010, US</p>
              <div className="flex gap-2">
              <p className="text-[12px] text-red-500">Closed •</p>
              <p className="text-[12px] text-[#757575]">Opens at 11:00 am</p>
              </div>
            </li>
          </ul>
  
          {/* Footer */}
          <div className="mt-6 mb-0 text-center">
            <button className="text-[#757575] font-medium underline">
              View All Stores
            </button>
          </div>
        </div>
      </div>

      <div className="p-2">
      <Image src={map} alt="" className="sm:h-[400px] lg:h-[500px] xl:ml-[8%]" />
      </div>
      </div>
    )
}