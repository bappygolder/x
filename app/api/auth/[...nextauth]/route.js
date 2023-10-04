import NextAuth from 'next-auth';
// import EmailProvider from 'next-auth/providers/email';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDB } from '../../../../utils/database';
import User from '../../../models/user';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      redirect: false,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize() {
        const user = { id: '1' };
        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/',
  },
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({
        email: session.user.email,
      });

      // eslint-disable-next-line no-param-reassign, no-underscore-dangle
      session.user.id = sessionUser._id.toString();

      return session;
    },

    async signIn({ profile }) {
      try {
        await connectToDB();

        // Check if a user already exists in the database
        const userExists = await User.findOne({ email: profile.email });

        // If not create a new user in the database
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(/\s/g, '').toLowerCase(),
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        // console.log(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
