"use server";

import { signIn, signOut } from '@/config/auth';
import { LoginFormSchema, LoginFormState } from '@/lib/definitions';
import { loginFetch } from '@/services/auth.service';
import { deleteCookie } from '@/app/actions/cookies';

export async function loginAction(state: LoginFormState, formData: FormData) {
  const validatedFields = LoginFormSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  const { success, error, data } = validatedFields;

  if (!success) {
    return {
      errors: error.flatten().fieldErrors,
    };
  }

  const { username, password } = data;
  const response = await loginFetch(username, password);

  const { id, errors } = response;

  if (id) {
    await signIn("credentials", {
      userId: id,
      redirectTo: "/dashboard",
    });
  }

  return {
    message: errors[0].message,
  };
}

export async function logoutAction() {
  deleteCookie("supplier"),
    deleteCookie("session"),
    await signOut({ redirectTo: "/login" });
}
