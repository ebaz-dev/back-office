import { setCookie } from '@/app/actions/cookies';
import { API_URL, MEDIA_UPLOAD } from '@/config';
import { cookies } from 'next/headers';

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function fetcher<T>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  body?: T
): Promise<any> {
  const session = cookies().get('session')?.value || '';

  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Cookie: session.replace(',', '; ')
    },
    ...(body && { body: JSON.stringify(body) })
  };

  try {
    const response = await fetch(`${API_URL}${endpoint}`, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    return null;
  }
}

export async function loginFetch(username: string, password: string) {
  const response = await fetch(`${API_URL}/users/signIn`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      phoneNumber: username,
      password: password,
      deviceType: 'web',
      deviceName: 'postman'
    })
  })
    .then(res => {
      setCookie('session', res.headers.get('set-cookie'));

      return res.json();
    })
    .catch(err => console.log(err));

  return response;
}

export async function uploadImageFetcher(formData: FormData) {
  const response = await fetch(
    `${MEDIA_UPLOAD}?ebazaar_admin_token=qweqweq12312313&preset=product`,
    {
      method: 'POST',
      body: formData
    }
  )
    .then(res => res.json())
    .catch(err => console.log(err));

  return response;
}
