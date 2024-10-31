import ProductsDetail from '@/components/products/ProductsDetail';
import CoreContainer from '@/components/core/CoreContainer';
import { getProduct } from '@/services/products.service';
import { IProduct } from '@/types';

interface ProductPageProps {
  params: {
    id: number;
  };
}

async function ProductEditPage({ params }: ProductPageProps) {
  const product = await getProduct<IProduct>(params.id);

  return (
    <CoreContainer title={product.name}>
      <ProductsDetail product={product} type='edit' />
    </CoreContainer>
  );
}

export default ProductEditPage;
