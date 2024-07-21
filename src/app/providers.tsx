"use client";

import { authorizeLiveblocks } from "@/lib/actions/authorize-liveblocks";
import { getUsers } from "@/lib/database";
import { LiveblocksProvider } from "@liveblocks/react";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import NextRouter from "next/router";

export function Providers({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}) {
  return (
    <SessionProvider session={session}>
      <LiveblocksProvider
        authEndpoint={async () => {
          let { data, error } = await authorizeLiveblocks();
          if (error) {
            NextRouter.push({
              query: {
                ...NextRouter.query,
                error: encodeURIComponent(JSON.stringify(error)),
              },
            });
            return;
          }
          return data;
        }}
        resolveUsers={async ({ userIds }) => {
          let users = await getUsers({ userIds });
          return users.map((user) => user ?? undefined);
        }}
      >
        {children}
      </LiveblocksProvider>
    </SessionProvider>
  );
}
