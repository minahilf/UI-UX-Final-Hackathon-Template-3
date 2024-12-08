export default function List(){
    return(
        <div className=" grid grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-4 p-[4%] sm:p-[8%] xl:p-[4%] lg:ml-[6%] lg:p-[6%] xl:ml-[10%]">
        
                <ul className="text-[#757575] text-[14px] font-medium justify-center flex flex-col gap-2">
                    <li className="text-[#111111]">Icons</li>
                    <li>Air Force 1</li>
                    <li>Huarache</li>
                    <li>Air Max 90</li>
                    <li>Air Max 95</li>
                </ul>

                <ul className="text-[#757575] text-[14px] font-medium justify-center flex flex-col gap-2">
                    <li className="text-[#111111]">Shoes</li>
                    <li>All Shoes</li>
                    <li>Custom Shoes</li>
                    <li>Jordan Shoes</li>
                    <li>Running Shoes</li>
                </ul>

                <ul className="text-[#757575] text-[14px] font-medium justify-center flex flex-col gap-2">
                    <li className="text-[#111111]">Clothing</li>
                    <li>All Clothing</li>
                    <li>Modest Wear</li>
                    <li>Hoodies & Pullovers</li>
                    <li>Shirts & Tops</li>
                </ul>

                <ul className="text-[#757575] text-[14px] font-medium justify-center flex flex-col gap-2">
                    <li className="text-[#111111]">Kid&apos;s </li>
                    <li>Infant & Toddler Shoes</li>
                    <li>Kid&apos;s  Shoes</li>
                    <li>Kid&apos;s  Jordan Shoes</li>
                    <li>Kid&apos;s  Basketball Shoes</li>
                </ul>
            </div>

    )
}