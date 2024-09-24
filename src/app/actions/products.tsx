'use server';

import { getFetch } from '@/lib/fetch';

export async function createProductAction(state: any, formData: FormData) {
  console.log(formData);
}

export async function getProductAction(id: string) {
  const response = await getFetch(`/product/${id}`);

  return response;
}
