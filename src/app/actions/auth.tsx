'use server';

import { signIn, signOut } from '@/auth';
import { LoginFormSchema, LoginFormState } from '@/lib/definitions';
import { loginFetch } from '@/lib/fetch';
import { deleteCookie } from '@/app/actions/cookies';

export async function loginAction(state: LoginFormState, formData: FormData) {
  const validatedFields = LoginFormSchema.safeParse({
    username: formData.get('username'),
    password: formData.get('password')
  });

  const { success, error, data } = validatedFields;

  if (!success) {
    return {
      errors: error.flatten().fieldErrors
    };
  } else {
    const user = await loginFetch(data.username, data.password);

    if (user && user.id) {
      await signIn('credentials', {
        userId: user.id,
        redirectTo: '/dashboard'
      });
    }

    return {
      message: user?.errors[0].message
    };
  }
}

export async function logoutAction() {
  deleteCookie('session');
  await signOut({ redirectTo: '/login' });
}
