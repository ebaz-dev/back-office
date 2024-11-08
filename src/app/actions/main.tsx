'use server';

import { deleteCookie, setCookie } from '@/app/actions/cookies';
import { uploadImageFetcher } from '@/lib/fetch';
import { ICustomer } from '@/types';
import { redirect } from 'next/navigation';

export const chooseSupplierAction = (supplier: ICustomer, pathname: string) => {
  setCookie('supplier', JSON.stringify(supplier));

  redirect(pathname);
};

export const removeSupplierAction = (pathname: string) => {
  deleteCookie('supplier');

  redirect(pathname);
};

export const changePathAction = (pathname: string) => {
  redirect(pathname);
};

export const uploadImageAction = async (formData: FormData) =>
  await uploadImageFetcher(formData);
