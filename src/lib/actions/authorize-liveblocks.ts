"use server";

import { User } from "@/types/data";
import { liveblocks } from "../../../liveblocks.server.config";
import { auth } from "../auth";
import { getDraftsGroupName } from "../utils/get-drafts-group-name";

export async function authorizeLiveblocks() {
  let session = await auth();

  let anonymousUser: User = {
    id: "anonymous",
    name: "Anonymous",
    color: "#ff0000",
    groupIds: [],
  };

  let { name, avatar, color, id, groupIds } =
    session?.user.info || anonymousUser;

  let groupIdsWithDraftGroup = [...groupIds, getDraftsGroupName(id)];

  let { status, body } = await liveblocks.identifyUser(
    {
      userId: id,
      groupIds: groupIdsWithDraftGroup,
    },
    {
      userInfo: { name, color, avatar },
    }
  );

  if (status !== 200) {
    return {
      error: {
        code: 401,
        message: "No access",
        suggestion: "Please login to access this page",
      },
    };
  }

  if (!body) {
    return {
      error: {
        code: 404,
        message: "ID Token issue",
        suggestion: "Please contact yourself",
      },
    };
  }

  return { data: JSON.parse(body) };
}
