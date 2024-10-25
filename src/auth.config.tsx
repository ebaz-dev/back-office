import type { NextAuthConfig, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export default {
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {},

      async authorize(credentials) {
        const { userId } = credentials as { userId: string };

        const user: User = {
          id: userId
        };

        return user;
      }
    })
  ],

  callbacks: {
    async signIn({ user }) {
      if (user && user.id) {
        return true;
      }

      return false;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }

      return token;
    },

    async session({ session, token }) {
      return { ...session, token: token.id };
    }
  }
} satisfies NextAuthConfig;
