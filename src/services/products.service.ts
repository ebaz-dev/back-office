import dataProvider from '@/services/data-provider.service';
import type { IBrand, IProduct, OrderSearchParams } from '@/types';
import type { ApiResponse } from '@/types/data-provider.types';
import { getCookie } from '@/app/actions/cookies';

const mockProduct: IProduct = {
  name: 'Kharaa 100 ml PET/ Pure /',
  slug: 'kharaa-100-ml-pet-pure',
  barCode: '8656021338077',
  sku: 'default',
  description: '',
  isAlcohol: false,
  priority: 0,
  price: 0,
  cityTax: false,
  customerId: '66f12d655e36613db5743430',
  categoryIds: [],
  prices: ['67020ec227b76b5a2117cc37'],
  images: [
    'https://pics.ebazaar.link/media/product/27d2e8954f9d8cbf9d23f500ae466f1e24e823c7171f95a87da2f28ffd0e.jpg'
  ],
  inCase: 50,
  isActive: true,
  attributes: [
    {

      id: '66ebb4370904055b002055c1',
      name: 'Хэмжээ',
      slug: 'hemzhee',
      key: 'size',
      value: 100,
      createdAt: '2024-10-06T04:14:58.203Z',
      updatedAt: '2024-10-20T15:02:32.628Z'
    }
  ],
  createdAt: '2024-10-06T04:14:58.203Z',
  updatedAt: '2024-10-20T15:02:32.628Z',
  inventoryId: '67020ec24cb627a65efddcf7',
  brandId: '670cb04a5404af06c7c75eea',
  inventory: {
    totalStock: 0,
    reservedStock: 0,
    availableStock: 0,
    id: '67020ec24cb627a65efddcf7',
  },
  brand: {
    name: 'Kharaa',
    slug: 'kharaa',
    customerId: '66f12d655e36613db5743430',
    image:
      'https://pics.ebazaar.link/media/product/9989646044764598603108547708202205130611436585188195547456197872435120.png',
    id: '670cb04a5404af06c7c75eea',
    isActive: true,
    createdAt: '2024-10-06T04:14:58.203Z',
    updatedAt: '2024-10-20T15:02:32.628Z'
  },
  categories: [],
  customer: {
    parentId: '',
    userId: '',
    createdAt: '',
    updatedAt: '',
    version: 0,
    name: 'Тотал дистрибюшин ХХК',
    regNo: '100002',
    address: 'Ulaanbaatar, Mongolia',
    phone: '80995561',
    type: 'supplier',
    bankAccounts: [],
    id: '66f12d655e36613db5743430'
  },
  id: '67020ec227b76b5a2117cc35',
  adjustedPrice: {
    price: 0,
    cost: 0
  }
};

export async function getProducts(searchParams: OrderSearchParams): Promise<ApiResponse<IProduct[]>> {
  const supplier = await getCookie('supplier');
  const supplierId = supplier ? JSON.parse(supplier).id : '';

  const params = {
    ...searchParams,
    supplierId,
  };

  return dataProvider.getList<IProduct[]>('/product/dashboard/list', params);
}

export async function getProductBrands(): Promise<ApiResponse<IBrand[]>> {
  const supplier = await getCookie('supplier');
  const supplierId = supplier ? JSON.parse(supplier).id : '';

  return dataProvider.getList<IBrand[]>('/product/brands', { supplierId });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getProduct<IProduct>(id: number) {
  // return dataProvider.getOne<IProduct>('/product/dashboard/detail', { id });
  return {
    data: mockProduct
  }
}
