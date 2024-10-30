import ProductsDetail from '@/components/products/ProductsDetail';
import { getProduct } from '@/services/products.service';
import { IProduct } from '@/types';

interface ProductPageProps {
  params: {
    id: number;
  };
}

async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct<IProduct>(params.id);
  return <ProductsDetail product={product.data} />;
}

export default ProductPage;