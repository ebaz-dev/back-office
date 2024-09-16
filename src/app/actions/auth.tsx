'use server';

import { signIn, signOut } from '@/auth';
import { LoginFormSchema, LoginFormState } from '@/lib/definitions';

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
    await signIn('credentials', {
      token: 'test',
      redirectTo: '/dashboard'
    });
  }
}

export async function logoutAction() {
  await signOut({ redirectTo: '/login' });
}
