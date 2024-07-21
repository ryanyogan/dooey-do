import { Liveblocks } from "@liveblocks/node";

import "server-only";

export const SECRET_API_KEY = process.env.LIVEBLOCKS_SECRET_KEY;
export const liveblocks = new Liveblocks({ secret: SECRET_API_KEY as string });
