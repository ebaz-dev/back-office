'use server';

import { deleteCookie, setCookie } from '@/app/actions/cookies';
import { uploadImageFetcher } from '@/lib/fetch';
import { ICustomer } from '@/lib/types';
import { redirect } from 'next/navigation';
import { Key } from 'react';

export const chooseSupplierAction = (
  supplier: ICustomer,
  pathname: string,
  key: Key
) => {
  setCookie('supplier', JSON.stringify(supplier)),
    redirect(`${pathname}?supplierId=${key}`);
};

export const removeSupplierAction = (pathname: string) => {
  deleteCookie('supplier'), redirect(pathname);
};

export const onPageChangeAction = (url: string) => {
  redirect(url);
};

export const clearAllFilterAction = (pathname: string, supplierId: string) => {
  redirect(`${pathname}?supplierId=${supplierId}`);
};

export const uploadImageAction = async (formData: FormData) =>
  await uploadImageFetcher(formData);
