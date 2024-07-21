import { PlusIcon } from "@/icons";
import { Button } from "@/primitives/Button";
import { Popover } from "@/primitives/Popover";
import { Document, DocumentGroup, DocumentUser } from "@/types/document";
import { ComponentProps, useState } from "react";

import styles from "./document-create-popover.module.css";

interface Props extends Omit<ComponentProps<typeof Popover>, "content"> {
  documentName?: Document["name"];
  draft: Document["draft"];
  groupIds?: DocumentGroup["id"][];
  userId: DocumentUser["id"];
}

export function DocumentCreatePopover({
  groupIds,
  userId,
  draft,
  children,
  ...props
}: Props) {
  let [disableButtons, setDisableButtons] = useState(false);

  return (
    <Popover
      content={
        <div className={styles.popover}>
          <Button
            icon={<PlusIcon />}
            onClick={() => {
              console.log("Create document");
            }}
            variant="subtle"
            disabled={disableButtons}
          >
            Text
          </Button>
          <Button
            icon={<PlusIcon />}
            onClick={() => {
              console.log("Create document");
            }}
            variant="subtle"
            disabled={disableButtons}
          >
            Whiteboard
          </Button>
          <Button
            icon={<PlusIcon />}
            onClick={() => {
              console.log("Create document");
            }}
            variant="subtle"
            disabled={disableButtons}
          >
            Spreadsheet
          </Button>
        </div>
      }
      modal
      side="bottom"
      {...props}
    >
      {children}
    </Popover>
  );
}
