import NextAuth from "next-auth";
import { getUser } from "../database/getUser";
import { authConfig } from "./auth.config";

export const NEXTAUTH_SECRET =
  process.env.NEXTAUTH_SECRET || "p49RDzU36fidumaF7imGnzyhRSPWoffNjDOleU77SM4=";

export let {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  secret: NEXTAUTH_SECRET,
  callbacks: {
    async session({ session }) {
      let userInfo = await getUser(session.user.email);

      if (!userInfo) {
        throw new Error("User not found");
      }

      session.user.info = userInfo;
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
  ...authConfig,
});

export function getProviders() {
  let providers: Record<string, string> = {};

  for (let provider of authConfig.providers) {
    if ("id" in provider) {
      providers[provider.id] = provider.name;
    }
  }

  return providers;
}
