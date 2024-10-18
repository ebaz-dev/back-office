'use server';

import { ProductsColumns } from '@/lib/columns';
import { fetcher } from '@/lib/fetch';
import { IColumn, IProduct } from '@/lib/types';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function filterProductsAction(
  supplierId: string,
  formData: FormData
) {
  const id = formData.get('id');
  const name = formData.get('name');
  const barCode = formData.get('barCode');
  const sku = formData.get('sku');
  const brand = formData.get('brand');

  redirect(
    `/products?supplierId=${supplierId}&id=${id}&name=${name}&barCode=${barCode}&sku=${sku}&brand=${brand}&page=1`
  );
}

export async function updateProductImageAction(item: any) {
  await fetcher(`/product/update/${item.id}`, 'PUT', {
    images: item.images
  });

  revalidatePath('/products');
}

export async function createProductAction(
  state: { images: string[] },
  formData: FormData
) {
  const fieldOptions = Object.fromEntries(
    ProductsColumns().map((product: IColumn) => [
      product.name,
      formData.get(product.name)
    ])
  );

  const reqOptions = {
    ...fieldOptions,
    images: state.images
  };

  const response = await fetcher(`/product/create/`, 'POST', reqOptions);

  console.log(response, reqOptions);
}

export async function importProductsAction(formData: FormData) {}
