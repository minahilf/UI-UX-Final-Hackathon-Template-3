import { client } from '@/sanity/lib/client';
import ProductDetail from './productDetails';

interface PageProps {
  params: Promise<{ productName: string }>;
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const productDetails = await client.fetch(`*[_type == "product"]{
    productName,
    price,
    inventory,
    image,
    description
  }`);
  console.log('Fetched Product Details:', productDetails);
  console.log('Product Name from URL:', resolvedParams.productName);  
  
  return (
    <ProductDetail 
      productDetails={productDetails} 
      productName={resolvedParams.productName} 
    />
  );
}