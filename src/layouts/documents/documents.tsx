import { getGroup } from "@/lib/database/getGroup";
import { Group } from "@/types/data";
import { DocumentsList } from "./documents-list";

type Props = {
  filter?: "all" | "drafts" | "group";
  groupId?: Group["id"];
};

export async function DocumentsLayout({ filter, groupId }: Props) {
  if (groupId) {
    let group = await getGroup(groupId);
    if (!group) {
      return (
        <div>
          <h1>Group not found</h1>
        </div>
      );
    }

    return <DocumentsList />;
  }

  return <DocumentsList />;
}
