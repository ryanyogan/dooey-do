"use client";

import { Container } from "@/primitives/Container";
import clsx from "clsx";

import { DocumentCreatePopover } from "@/components/documents/document-create-popover";
import { PlusIcon } from "@/icons";
import { Button } from "@/primitives/Button";
import { Select } from "@/primitives/Select";
import { Group } from "@/types/data";
import { DocumentType } from "@/types/document";
import { capitalize } from "@/utils";
import { useSession } from "next-auth/react";
import { ComponentProps, useState } from "react";
import styles from "./documents-list.module.css";

const DOCUMENT_LOAD_LIMIT = 10;

interface Props extends ComponentProps<"div"> {
  filter?: "all" | "drafts" | "group";
  group?: Group;
}

export function DocumentsList({
  filter = "all",
  className,
  group,
  ...props
}: Props) {
  let { data: session } = useSession();
  let [documentType, setDocumentType] = useState<DocumentType | "all">("all");

  if (!session) {
    return (
      <Container size="small" className={clsx(styles.documents)}>
        <div className={styles.container}>
          <div className={styles.emptyState}>
            <p>You do not have access to these documents.</p>
          </div>
        </div>
      </Container>
    );
  }

  let createDocumentButton = (
    <DocumentCreatePopover
      align="end"
      userId={session.user.info.id}
      groupIds={group?.id ? [group.id] : undefined}
      draft={filter === "drafts" || filter === "group"}
      sideOffset={12}
    >
      <Button icon={<PlusIcon />}>
        {group?.id ? "New document" : "New draft"}
      </Button>
    </DocumentCreatePopover>
  );

  return (
    <Container
      size="small"
      className={clsx(className, styles.documents)}
      {...props}
    >
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>
          {group?.name ?? capitalize(filter)}
        </h1>
        <div className={styles.headerActions}>
          <Select
            initialValue="all"
            items={[
              { value: "all", title: "All" },
              { value: "text", title: "Text", disabled: true },
              { value: "whiteboard", title: "Whiteboard" },
            ]}
            onChange={(value: "all" | DocumentType) => {
              setDocumentType(value);
            }}
            className={styles.headerSelect}
          />
          {createDocumentButton}
        </div>
      </div>
    </Container>
  );
}
