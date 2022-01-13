import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.JWT_SECRET,
  session: {
    strategy: 'jwt',
  },
  jwt: {},

  pages: {
    signIn: '/signin',
    // signOut: '/auth/signout', // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) { return true },
    async redirect({ baseUrl }) {
      return baseUrl;
    },
    async session({ session, token, user }) {
      return {
        expires: session.expires,
        user: { ...user, ...token },
      };
    },
    async jwt({ token, account }) {
      if (account) {
        token.account = account;
      }

      return token;
    },
  },
  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {},

  // Enable debug messages in the console if you are having problems
  debug: false,
});
