import Image from "next/image";
import man from "../../../Assets/man.png";
import c1 from "../../../Assets/c1.png"
import airmax from "../../../Assets/airmax.png";
import bin from "../../../Assets/bin.png";
import like from "../../../Assets/like.png";

export default function Bag() {
  const products = [
    {
      image: man,
      productName: "Nike Dri-FIT ADV TechKnit Ultra",
      detail: "Men's Short-Sleeve Running Top",
      color: "Ashen Slate/Cobalt Bliss",
      size: "L",
      quantity: 1,
      price: "MRP: ₹ 3895.00",
    },
    {
      image: airmax,
      productName: "Nike Air Max 97 SE",
      detail: "Men's Shoes",
      color: "Flat Pewter/Light Bone/Black/White",
      size: 8,
      quantity: 1,
      price: "MRP: ₹16 996.00",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left Side: Product Details */}
      <div className="flex-1 bg-white p-4 lg:w-2/3">
        <div className="bg-[#f0f0f0] w-auto mx-2 p-3">
          <p className="text-[13px] font-medium">Free Delivery</p>
          <div className="flex gap-2">
            <p className="text-[10px] xl:text-[12px] lg:text-[12px]">Applies to orders of ₹ 14 000.00 or more.</p>
            <p className="text-[10px] font-medium underline xl:text-[12px] lg:text-[12px]">View details</p>
          </div>
        </div>
        <h1 className="text-[18px] font-medium ml-2 mt-2">Bag</h1>
        <div>
          {products.map((product, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-2 border-b border-gray-100"
            >
              {/* Product Image */}
              <Image
                src={product.image}
                alt={product.productName}
                className="w-[70px] h-[70px]"
              />
              {/* Product Info */}
              <div className="flex-1 ml-4">
                <h3 className="text-[14px] font-semibold">{product.productName}</h3>
                <p className="text-[12px] text-[#757575]">{product.detail}</p>
                <p className="text-[12px] text-[#757575]">{product.color}</p>
                <p className="text-[12px] text-[#757575]">
                  Size {product.size} | Quantity {product.quantity}
                </p>
                {/* Actions */}
                <div className="flex items-center gap-2 mt-2">
                  <Image
                    src={like}
                    alt="like"
                    className="w-6 h-6 cursor-pointer hover:opacity-80"
                  />
                  <Image
                    src={bin}
                    alt="delete"
                    className="w-4 h-4 cursor-pointer hover:opacity-80"
                  />
                </div>
              </div>
              {/* Product Price */}
              <p className="text-[12px] mb-[21%] sm:mb-[12%]">₹ {product.price}</p>
            </div>
          ))}
        </div>
        <h1 className="text-[18px] font-medium mt-4 ml-4">Favorites</h1>
        <p className="text-[14px] ml-4">There are no items saved to your favourites.</p>

        <div className="flex flex-col justify-center items-center sm:items-start sm:ml-2 lg:ml-0">
        <h1 className="text-[18px] font-medium mt-4 ml-4">You Might Also Like</h1>
        <Image src={c1} alt="" className="w-[300px] h-[300px] mt-4"/>
        <p className="font-medium text-[16px]">Air Jordan 1 Mid SE Craft</p>
        <p className="text-[16px] text-[#757575]">Men's Shoes</p>
        <p className="font-medium text-[16px]">MRP : ₹ 12 295.00</p>
        </div>
      </div>

      {/* Right Side: Summary */}
      <div className="bg-white p-4 lg:w-1/3">
        <h1 className="text-[18px] font-medium mt-4 mb-4 text-center lg:text-start lg:ml-10 xl:ml-[20%]">Summary</h1>
        <div className="flex justify-evenly gap-10 mt-2">
          <p className="text-[14px]">Subtotal</p>
          <p className="text-[14px]">₹ 20 890.00</p>
        </div>
        <div className="flex justify-evenly mr-6 mt-2">
          <p className="text-[14px]">Estimated Delivery <br /> & Handling</p>
          <p className="text-[14px]">Free</p>
        </div>
        <div className="p-2 border-b border-gray-200 w-auto "></div>
        <div className="flex justify-evenly gap-5 mt-2">
          <p className="text-[14px]">Total</p>
          <p className="text-[14px] font-medium">₹ 20 890.00</p>
        </div>
        <div className="bg-black w-[160px] h-[40px] rounded-full flex justify-center items-center p-4 mt-6 ml-[28%] sm:ml-[38%] lg:ml-[28%] xl:ml-[32%]">
          <button className="text-white text-[14px] font-medium">Member Checkout</button>
        </div>
      </div>
    </div>
  );
}
