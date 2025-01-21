// import { client } from '@/sanity/lib/client';
// import ProductDetail from './productDetails';

// interface PageProps {
//   params: {
//     productName: string;
//   };
//   searchParams?: Record<string, string | string[] | undefined>;
// }

// export default async function ProductDetailPage({ params }: PageProps) {
//   const productDetails = await client.fetch(`*[_type == "product"]{
//     productName,
//     price,
//     inventory,
//     image,
//     description
//   }`);

//   console.log('Fetched Product Details:', productDetails);
//   console.log('Product Name from URL:', params.productName);  

//   return <ProductDetail productDetails={productDetails} productName={params.productName} />;
// }


import { client } from '@/sanity/lib/client';
import ProductDetail from './productDetails';

interface PageProps {
  params: {
    productName: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const productDetails = await client.fetch(`*[_type == "product"]{
    productName,
    price,
    inventory,
    image,
    description
  }`);
  console.log('Fetched Product Details:', productDetails);
  console.log('Product Name from URL:', params.productName);  
  return <ProductDetail productDetails={productDetails} productName={params.productName} />;
}