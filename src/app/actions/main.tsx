'use server';

import { setCookie } from '@/app/actions/cookies';
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