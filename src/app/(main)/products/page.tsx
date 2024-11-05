import ProductsBoard from '@/components/products/ProductsBoard';
import { getProductBrands, getProducts } from '@/services/products.service';
import { ProductSearchParams } from '@/types';

interface ProductsPageProps {
  searchParams: ProductSearchParams;
}

const ProductsPage = async ({ searchParams }: ProductsPageProps) => {
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
