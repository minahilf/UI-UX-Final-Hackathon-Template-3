// import Image from "next/image"
// import filter from "../../../Assets/filter.png"
// import down from "../../../Assets/down.png"


// export default function Header2(){
//     return(
//         <div className="flex justify-between px-2 xl:px-6 ">
//         <h4 className="text-[16px] font-medium xl:text-[20px]">New(500)</h4>
//         <div className="flex gap-2 items-center">
//             <div className="flex gap-2 items-center">
//                 <p className="text-[14px] xl:text-[16px]">Hide Filters</p>
//                 <Image src={filter} alt="filter" className="w-5 mt-2" />
//             </div>
//             <div className="flex gap-2 items-center">
//                 <p className="text-[14px] xl:text-[16px]">Sort By</p>
//                 <Image src={down} alt="down" className="w-5 mt-2" />
//             </div>
           
//         </div>
//         </div>
//     )
// }


// HACKATHON 3 Day 4 update 

'use client'
import Image from "next/image"
import filter from "../../../Assets/filter.png"
import down from "../../../Assets/down.png"
import { useState } from "react"

interface Header2Props {
  onSortChange: (sortType: string) => void;
  onFilterToggle: () => void;
  showFilters: boolean;
  totalItems?: number;
}

export default function Header2({ onSortChange, onFilterToggle, showFilters }: Header2Props) {
  const [showSortMenu, setShowSortMenu] = useState(false);

  return (
    <div className="flex justify-between px-2 xl:px-6">
      <h4 className="text-[16px] font-medium xl:text-[20px]">New(500)</h4>
      <div className="flex gap-2 items-center">
        <div className="flex gap-2 items-center">
          <p className="text-[14px] xl:text-[16px] ">Hide Filters</p>
          <Image 
            src={filter} 
            alt="filter" 
            className="w-5 mt-2 cursor-pointer" 
            onClick={onFilterToggle}
          />
        </div>
        <div className="flex gap-2 items-center relative">
          <p className="text-[14px] xl:text-[16px]">Sort By</p>
          <Image 
            src={down} 
            alt="down" 
            className="w-5 mt-2 cursor-pointer" 
            onClick={() => setShowSortMenu(!showSortMenu)}
          />
          

          {showSortMenu && (
            <div className="absolute top-8 right-0 bg-white shadow-md rounded-md py-2 z-10">
              <button 
                className="block w-[200px] font-medium px-4 py-2 text-[14px] text-center hover:bg-gray-100"
                onClick={() => {
                  onSortChange('price-high');
                  setShowSortMenu(false);
                }}
              >
                Price: High to Low
              </button>
              <button 
                className="block w-[200px] font-medium px-4 py-2 text-[14px] text-center hover:bg-gray-100"
                onClick={() => {
                  onSortChange('price-low');
                  setShowSortMenu(false);
                }}
              >
                Price: Low to High
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}