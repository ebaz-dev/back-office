'use server';

import { cookies } from 'next/headers';

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function setCookie(name: string, value: any) {
  cookies().set(name, value);
}

export async function getCookie(name: string) {
  return cookies().get(name)?.value;
}

export async function deleteCookie(name: string) {
  cookies().delete(name);
}
