import { auth } from '@/auth';
import { API_URL } from '@/config';

export async function getFetch(endpoint: string) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
    .then(res => res.json())
    .catch(err => console.log(err));

  return response;
}

export async function getFetchWithSession(endpoint: string) {
  const { token }: any = await auth();

  const response = await fetch(`${API_URL}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ebazaar_token: token
    }
  })
    .then(res => res.json())
    .catch(err => console.log(err));

  if (!response) {
    return null;
  }

  return response.data ? response.data : response;
}

export async function postFetchWithSession(endpoint: string, body: any) {
  const { token }: any = await auth();

  const response = await fetch(`${API_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ebazaar_token: token
    },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .catch(err => console.log(err));

  if (!response) {
    return null;
  }

  return response.data ? response.data : response;
}
