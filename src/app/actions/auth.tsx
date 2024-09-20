'use server';

import { signIn, signOut } from '@/auth';
import { LoginFormSchema, LoginFormState } from '@/lib/definitions';
import { postFetch } from '@/lib/fetch';

export async function loginAction(state: LoginFormState, formData: FormData) {
  const validatedFields = LoginFormSchema.safeParse({
    username: formData.get('username'),
    password: formData.get('password')
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors
    };
  } else {
    const response = await postFetch('/users/signIn', {
      email: 'test5@test.com',
      password: 'qweqwe123'
    });

    if (!response || !response.errors) {
      await signIn('credentials', {
        token: 'test',
        redirectTo: '/dashboard'
      });
    }
  }
}

export async function logoutAction() {
  await signOut({ redirectTo: '/login' });
}
