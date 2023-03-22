import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../lib/prisma";
const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { username, password } = credentials as {
          username: string;
          password: string;
          };
          //DB
        const check = await prisma.user.findMany({
          where: {
            username: username,
            password: password,
          },
        });
        if (check == null) {
          
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);
