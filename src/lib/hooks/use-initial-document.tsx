import { Document } from "@/types/document";
import { createContext, ReactNode, useContext } from "react";

let DocumentContext = createContext<Document | null>(null);

type Props = {
  initialDocument: Document;
  children: ReactNode;
};

export function InitialDocumentProvider({ initialDocument, children }: Props) {
  return (
    <DocumentContext.Provider value={initialDocument}>
      {children}
    </DocumentContext.Provider>
  );
}

export function useInitialDocument() {
  let document = useContext(DocumentContext);

  if (!document) {
    throw new Error(
      "useInitialDocument must be used within a InitialDocumentProvider"
    );
  }

  return document;
}
