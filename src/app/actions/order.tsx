'use server';

import { convertObjectToParam } from '@/lib/utils';
import { redirect } from 'next/navigation';

export async function filterOrdersAction(formData: FormData) {
  const rawFormData: any = {
    orderNo: formData.get('orderNo')
  };

  const currentParams = convertObjectToParam(rawFormData);

  redirect(`/order?${currentParams}`);
}
