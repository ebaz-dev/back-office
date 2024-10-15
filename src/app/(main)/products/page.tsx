import { getCookie } from '@/app/actions/cookies';
import ProductsBoard from '@/components/products/ProductsBoard';
import { getProducts } from '@/lib/requests';
import { FunctionComponent } from 'react';

interface ProductsPageProps {
  searchParams: {
    page: string;
    id: string;
    sku: string;
    name: string;
    brand: string;
    barCode: string;
  };
}

const ProductsPage: FunctionComponent<ProductsPageProps> = async ({
  searchParams: { page = 1, id, sku, name, brand, barCode }
}) => {
  const supplier: any = await getCookie('supplier');

  const supplierId = supplier ? JSON.parse(supplier).id : '';

  const productsData = getProducts(
    supplierId,
    page,
    id,
    sku,
    name,
    brand,
    barCode
  );

  const [products] = await Promise.all([productsData]);

  return (
    <ProductsBoard
      supplierId={supplierId}
      products={products?.data || []}
      totalPage={products?.totalPages}
      currentPage={products?.currentPage}
    />
  );
};

export default ProductsPage;
