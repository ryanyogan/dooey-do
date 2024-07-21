export const DRAFTS_PREFIX = "__drafts-group__";

export function getDraftsGroupName(userId: string) {
  return `${DRAFTS_PREFIX}${userId}`;
}
