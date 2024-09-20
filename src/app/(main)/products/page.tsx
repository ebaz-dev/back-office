import ProductsBoard from '@/components/products/ProductsBoard';
import { getFetch } from '@/lib/fetch';
import { FunctionComponent } from 'react';

interface ProductsPageProps {
  searchParams: {
    page: string;
  };
}

const ProductsPage: FunctionComponent<ProductsPageProps> = async ({
  searchParams: { page = 1 }
}) => {
  const products = await getFetch(`/product/list?page=${page}&limit=10`);

  return (
    <ProductsBoard
      products={products.data}
      totalPages={products.totalPages}
      currentPage={products.currentPage}
    />
  );
};

export default ProductsPage;
