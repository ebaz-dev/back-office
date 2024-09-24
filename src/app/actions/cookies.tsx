'use server';

import { cookies } from 'next/headers';

export async function setCookie(name: string, value: any) {
  cookies().set(name, JSON.stringify(value));
}

export async function getCookie(name: string) {
  const data: any = cookies().get(name)?.value;

  if (!data) {
    return null;
  }

  return JSON.parse(data);
}

export async function deleteCookie(name: string) {
  cookies().delete(name);
}
