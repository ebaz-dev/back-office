import { API_URL } from '@/config';

export async function getFetch(endpoint: string) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .catch(err => console.log(err));

  return response;
}

export async function postFetch(endpoint: string, body: any) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .catch(err => console.log(err));

  return response;
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
      return res.json();
    })
    .catch(err => console.log(err));

  return response;
}
