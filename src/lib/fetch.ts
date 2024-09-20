import { BASE_URL } from '@/config';

export async function getFetch(endpoint: string) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
    .then(res => res.json())
    .catch(err => console.log(err));

  return response;
}

export async function postFetch(endpoint: string, body: any) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .catch(err => console.log(err));

  return response;
}
