'use server';

import { fetcher } from '@/lib/fetch';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function filterProductsAction(state: any, formData: FormData) {
  redirect(`/products`);
}

export async function updateProductImageAction(item: any) {
  await fetcher(`/product/update/${item.id}`, 'PUT', {
    images: item.images
  });

  revalidatePath('/products');
}

export async function createProductAction(state: any, formData: FormData) {}

export async function importProductsAction(state: any, formData: FormData) {}

export async function getProductAction(id: string) {
  const response = await fetcher(`/product/${id}`);

  return response;
}
