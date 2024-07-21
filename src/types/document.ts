import { Group, User } from "./data";

export type Document = {
  id: string;
  name: string;
  accesses: DocumentAccesses;
  owner: DocumentUser["id"];
  created: string;
  lastConnection: string;
  draft: boolean;
  type: DocumentType;
};

export type DocumentType = "text" | "whiteboard" | "code";

export type DocumentGroup = Group & {
  access: DocumentAccess;
};

export type DocumentUser = User & {
  access: DocumentAccess;
  isCurrentUser: boolean;
};

export enum DocumentAccess {
  FULL = "full",
  EDIT = "edit",
  READONLY = "readonly",
  NONE = "none",
}

export type DocumentAccesses = {
  default: DocumentAccess;
  groups: Record<DocumentGroup["id"], DocumentAccess>;
  users: Record<DocumentUser["id"], DocumentAccess>;
};

export interface DocumentRoomMetadata
  extends Record<string, string | string[]> {
  name: Document["name"];
  type: DocumentType;
  owner: User["id"];
  draft: "yes" | "no";
}

export type ErrorData = {
  message: string;
  code?: number;
  suggestion?: string;
};
