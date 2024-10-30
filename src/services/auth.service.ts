import { API_URL } from "@/config";
import { setCookie } from "@/app/actions/cookies";

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