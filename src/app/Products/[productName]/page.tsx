import { client } from '@/sanity/lib/client';
import ProductDetail from './productDetails';

export default async function ProductDetailPage({ params }: { params: { productName: string } }) {
  const productDetails = await client.fetch(`*[_type == "product"]{
    productName,
    price,
    inventory,
    image,
    description
  }`);

  console.log('Fetched Product Details:', productDetails); // Log the fetched product data
  console.log('Product Name from URL:', params.productName);  // Log the product name from URL params

  return <ProductDetail productDetails={productDetails} productName={params.productName} />;
}
