'use server';

import { ProductsColumns } from '@/lib/columns/products';
import { fetcher } from '@/lib/fetch';
import { IColumn } from '@/types/table.types';
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

  await fetcher(`/product/create/`, 'POST', {
    ...fieldOptions,
    images: state.images
  });
}

export async function updateProductAction(formData: FormData) {
  console.log(formData);
}

export async function filterProductsAction(formData: FormData) {
  const rawFormData = {
    ids: formData.get('id'),
    name: formData.get('name'),
    barCode: formData.get('barCode'),
    sku: formData.get('sku'),
    brands: formData.get('brand')
  };

  const currentParams = convertObjectToParam(rawFormData);

  redirect(`/products?${currentParams}`);
}

export async function updateProductImageAction(item: {
  id: string;
  images: string[];
}) {
  await fetcher(`/product/update/${item.id}`, 'PUT', {
    images: item.images
  });

  revalidatePath('/products');
}

export async function importProductsAction(formData: FormData) {
  console.log(formData);
}
