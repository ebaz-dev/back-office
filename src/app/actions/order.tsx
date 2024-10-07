'use server';

import { redirect } from 'next/navigation';

export async function filterOrdersAction(state: any, formData: FormData) {
  redirect(`/order`);
}
