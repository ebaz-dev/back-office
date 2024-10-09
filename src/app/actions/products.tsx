'use server';

import { fetchMultiple, getFetch } from '@/lib/fetch';
import { redirect } from 'next/navigation';

export async function filterProductsAction(state: any, formData: FormData) {
  redirect(`/products`);
}

export async function updateProductImagesAction(body: any, formData: FormData) {
  await fetchMultiple(
    `/product/update/${body.id}`,
    { images: body.images },
    'PUT'
  );
}

export async function createProductAction(state: any, formData: FormData) {}

export async function importProductsAction(state: any, formData: FormData) {}

export async function getProductAction(id: string) {
  const response = await getFetch(`/product/${id}`);

  return response;
}
