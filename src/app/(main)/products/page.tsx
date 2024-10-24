import { getCookie } from '@/app/actions/cookies';
import ProductsBoard from '@/components/products/ProductsBoard';
import { getProductBrands, getProducts } from '@/lib/requests';
import { convertObjectToParam } from '@/lib/utils';
import { FunctionComponent } from 'react';

interface ProductsPageProps {
  searchParams: {
    page: string;
    id: string;
    sku: string;
    name: string;
    barCode: string;
  };
}

const ProductsPage: FunctionComponent<ProductsPageProps> = async ({
  searchParams
}) => {
  const supplier = await getCookie('supplier');

  const supplierId = supplier ? JSON.parse(supplier).id : '';

  const currentParams = convertObjectToParam({
    ...searchParams,
    customerId: supplierId
  });

  const productsData = getProducts(currentParams);

  const productsBrandsData = getProductBrands(supplierId);

  const [products, brands] = await Promise.all([
    productsData,
    productsBrandsData
  ]);

  return (
    <ProductsBoard
      brands={brands?.data || []}
      products={products?.data || []}
      totalPage={products?.totalPages}
      currentPage={products?.currentPage}
    />
  );
};

export default ProductsPage;
