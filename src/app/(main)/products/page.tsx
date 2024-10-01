import { getCookie } from '@/app/actions/cookies';
import ProductsBoard from '@/components/products/ProductsBoard';
import { getProductCategories, getProducts } from '@/lib/requests';
import { FunctionComponent } from 'react';

interface ProductsPageProps {
  searchParams: {
    page: string;
    categoryId: string;
    brandId: string;
    name: string;
    id: string;
  };
}

const ProductsPage: FunctionComponent<ProductsPageProps> = async ({
  searchParams: { page = 1, categoryId, brandId, name, id }
}) => {
  const supplier: any = await getCookie('supplier');

  const supplierId = supplier ? JSON.parse(supplier).id : '';

  const productsData = getProducts(
    supplierId,
    page,
    categoryId,
    brandId,
    name,
    id
  );

  const categoriesData = getProductCategories();

  const [products, categories] = await Promise.all([
    productsData,
    categoriesData
  ]);

  return (
    <ProductsBoard
      products={products?.data || []}
      totalPage={products?.totalPages}
      currentPage={products?.currentPage}
      supplierId={supplierId}
      categories={categories?.data ?? []}
    />
  );
};

export default ProductsPage;
