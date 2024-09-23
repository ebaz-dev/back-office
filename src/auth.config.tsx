import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export default {
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {},

      async authorize(credentials) {
        const { userId } = credentials as any;

        const user: any = {
          userId
        };

        return user;
      }
    })
  ],

  callbacks: {
    async signIn({ user }: any) {
      if (user && user.userId) {
        return true;
      }

      return false;
    },

    async jwt({ token, user }: any) {
      if (user) {
        token.userId = user.userId;
      }

      return token;
    },

    async session({ session, token }: any) {
      session.token = token.userId;

      return session;
    }
  }
} satisfies NextAuthConfig;
