import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export default {
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {},

      async authorize(credentials) {
        const { token } = credentials as any;

        const user: any = {
          token
        };

        return user;
      }
    })
  ],

  callbacks: {
    async signIn({ user }: any) {
      if (user && user.token) {
        return true;
      }

      return false;
    },

    async jwt({ token, user }: any) {
      if (user) {
        token = user;
      }

      return token;
    },

    async session({ session, token }: any) {
      session = token;

      return session;
    }
  }
} satisfies NextAuthConfig;
