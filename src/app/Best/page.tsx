import Image from "next/image";
import right from "../../../Assets/right.png";
import left from "../../../Assets/left.png";
import Link from "next/link";
import shoe1 from "../../../public/shoe1.png"
import shoe2 from "../../../public/shoe2.png";
import shoe3 from "../../../public/shoe3.png";

export default function Best() {
  
  const productData2 = [
    {
      id:1,
      image: shoe1,
      name: "Nike Air Max Pulse",
      price: "₹ 13,995",
      category: "Womens Shoes",
      description: "The Nike Air Max Pulse offers a stylish and comfortable fit designed for everyday wear. Featuring a sleek, modern silhouette, these shoes are equipped with a breathable mesh upper that ensures excellent ventilation, keeping your feet cool and comfortable. The iconic Air Max cushioning in the sole provides responsive support and a smooth ride with every step, making it perfect for long days on the go. With its bold design and vibrant color options, the Nike Air Max Pulse adds a touch of flair to any outfit while delivering the comfort and durability that Nike is known for. Whether you're running errands, heading to the gym, or meeting up with friends, these shoes will keep you feeling great all day long."
    },
    {
      id:2,
      image: shoe2,
      name: "Nike Air Max Pulse",
      price: "₹ 13,995",
      category: "Mens Shoes",
      description: "The Nike Air Max Pulse is a standout addition to any sneaker collection. With its cutting-edge design and performance-driven features, these shoes offer both style and comfort. The lightweight mesh upper provides breathability, ensuring your feet stay cool even during intense activities. The Air Max cushioning delivers exceptional support and cushioning, absorbing shock and enhancing comfort with each stride. Perfect for both casual wear and athletic performance, the Nike Air Max Pulse features a sleek design that pairs effortlessly with jeans, shorts, or workout gear. Whether you're training hard or enjoying a day off, these shoes will provide the comfort and style you need."
    },
    {
      id:3,
      image: shoe3,
      name: "Nike Air Max 97 SE",
      price: "₹ 16,995",
      category: "Mens Shoes",
      description: "The Nike Air Max 97 SE redefines comfort and style with its innovative design and high-performance features. Featuring the iconic full-length Air Max cushioning, these shoes offer superior comfort and support, making them perfect for long hours of wear. The premium leather and synthetic upper provides a sleek, durable look that stands out with bold color accents and reflective details. The unique, wave-inspired design of the Nike Air Max 97 SE adds a modern twist to the classic Air Max silhouette, giving you a fashion-forward look without compromising on comfort. Ideal for both casual outings and active days, the Nike Air Max 97 SE ensures you step out in style and confidence."
    },
    {
      id:4,
      image: shoe1,
      name: "Nike Air Max Pulse",
      price: "₹ 13,995",
      category: "Womens Shoes",
      description: "The Nike Air Max Pulse offers a stylish and comfortable fit designed for everyday wear. Featuring a sleek, modern silhouette, these shoes are equipped with a breathable mesh upper that ensures excellent ventilation, keeping your feet cool and comfortable. The iconic Air Max cushioning in the sole provides responsive support and a smooth ride with every step, making it perfect for long days on the go. With its bold design and vibrant color options, the Nike Air Max Pulse adds a touch of flair to any outfit while delivering the comfort and durability that Nike is known for. Whether you're running errands, heading to the gym, or meeting up with friends, these shoes will keep you feeling great all day long."
    },
    {
      id:5,
      image: shoe2,
      name: "Nike Air Max Pulse",
      price: "₹ 13,995",
      category: "Mens Shoes",
      description: "The Nike Air Max Pulse is a standout addition to any sneaker collection. With its cutting-edge design and performance-driven features, these shoes offer both style and comfort. The lightweight mesh upper provides breathability, ensuring your feet stay cool even during intense activities. The Air Max cushioning delivers exceptional support and cushioning, absorbing shock and enhancing comfort with each stride. Perfect for both casual wear and athletic performance, the Nike Air Max Pulse features a sleek design that pairs effortlessly with jeans, shorts, or workout gear. Whether you're training hard or enjoying a day off, these shoes will provide the comfort and style you need."
    },
    {
      id:6,
      image: shoe3,
      name: "Nike Air Max 97 SE",
      price: "₹ 16,995",
      category: "Mens Shoes",
      description: "The Nike Air Max 97 SE redefines comfort and style with its innovative design and high-performance features. Featuring the iconic full-length Air Max cushioning, these shoes offer superior comfort and support, making them perfect for long hours of wear. The premium leather and synthetic upper provides a sleek, durable look that stands out with bold color accents and reflective details. The unique, wave-inspired design of the Nike Air Max 97 SE adds a modern twist to the classic Air Max silhouette, giving you a fashion-forward look without compromising on comfort. Ideal for both casual outings and active days, the Nike Air Max 97 SE ensures you step out in style and confidence."
    },
  ];

  return (
    <div className="px-4">
      {/* Header Section */}
      <div className="flex flex-col mt-10 sm:flex-row sm:items-center sm:gap-[40%] sm:justify-between">
        <h1 className="text-[14px] font-medium text-text2 text-center xl:ml-[3%] xl:text-[16px] lg:ml-[4%] lg:text-[14px] sm:ml-[5%] sm:mt-4">
          Best of Air Max
        </h1>

        <div className="flex gap-2 items-center justify-center mt-4 lg:ml-[15%] xl:ml-[25%] sm:mr-4">
          <p className="text-[12px] font-medium">Shop</p>
          <div className="bg-[#E5E5E5] rounded-full h-7 w-7 flex items-center justify-center">
            <Image src={left} alt="arrow" className="w-3 h-3" />
          </div>
          <div className="bg-[#CCCCCC] rounded-full h-7 w-7 flex items-center justify-center">
            <Image src={right} alt="arrow" className="w-3 h-3" />
          </div>
        </div>
      </div>

      {/* Product */}
      <div className="flex overflow-x-auto scrollbar-hide mt-4 gap-4">
        {productData2.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-[250px] sm:w-[300px] "
          >
            <Link href={`/Best/${product.id}`}>
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="object-cover"
            />
            <div className="flex items-center justify-between mt-2">
              <h3 className="text-[12px] font-medium">{product.name}</h3>
              <p className="text-[10px]">{product.price}</p>
            </div>
            <p className="text-[12px] text-[#757575]">{product.category}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
