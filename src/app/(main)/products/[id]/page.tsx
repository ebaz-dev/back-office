import ProductsDetail from '@/components/products/ProductsDetail';
import CoreContainer from '@/components/core/CoreContainer';
import { getProduct } from '@/services/products.service';
import { IProduct } from '@/types';
import CoreActions from '@/components/core/CoreActions';

interface ProductPageProps {
  params: {
    id: number;
  };
}

async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct<IProduct>(params.id);
  return (
    <CoreContainer
      title={product.name}
      headerContent={<CoreActions />}
    >
      <ProductsDetail product={product} type='show' />
    </CoreContainer>
  );
}

export default ProductPage;