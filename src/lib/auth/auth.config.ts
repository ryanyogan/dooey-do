import { User } from "@/types/data";
import { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUser } from "../database/getUser";

export const authConfig: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
        },
      },
      async authorize(credentials) {
        if (!credentials || typeof credentials.email !== "string") {
          throw new Error("Invalid credentials");
        }

        let user: User | null = await getUser(credentials.email);
        if (!user) {
          throw new Error("User not found");
        }

        return {
          id: user.id,
          name: user.name,
          email: user.id,
          image: user.avatar,
        };
      },
    }),
  ],
};
