import ProductsBoard from '@/components/products/ProductsBoard';
import { getProductBrands, getProducts } from '@/services/products.service';
import { ProductSearchParams } from '@/types';
import { FunctionComponent } from 'react';

interface ProductsPageProps {
  searchParams: ProductSearchParams;
}

const ProductsPage: FunctionComponent<ProductsPageProps> = async ({
  searchParams
}) => {
  const productsData = getProducts(searchParams);
  const productsBrandsData = getProductBrands();

  const [products, brands] = await Promise.all([
    productsData,
    productsBrandsData
  ]);

  return (
    <ProductsBoard
      products={products?.data || []}
      brands={brands?.data || []}
      totalPage={products?.totalPages}
      currentPage={products?.currentPage || 1}
    />
  );
};

export default ProductsPage;
