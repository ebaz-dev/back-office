'use server';

import { ProductsColumns } from '@/lib/columns';
import { fetcher } from '@/lib/fetch';
import { IColumn } from '@/lib/types';
import { convertObjectToParam } from '@/lib/utils';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

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

export async function updateProductAction(formData: FormData) {
  console.log(formData);
}

export async function filterProductsAction(formData: FormData) {
  const rawFormData: any = {
    ids: formData.get('id'),
    name: formData.get('name'),
    barCode: formData.get('barCode'),
    sku: formData.get('sku')
  };

  const currentParams = convertObjectToParam(rawFormData);

  redirect(`/products?${currentParams}`);
}

export async function updateProductImageAction(item: any) {
  await fetcher(`/product/update/${item.id}`, 'PUT', {
    images: item.images
  });

  revalidatePath('/products');
}

export async function importProductsAction(formData: FormData) {}
