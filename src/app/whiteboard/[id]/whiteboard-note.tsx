"use client";

import { useStorage } from "@liveblocks/react";
import {
  ChangeEventHandler,
  ComponentProps,
  FocusEventHandler,
  memo,
  PointerEventHandler,
  useCallback,
  useRef,
} from "react";

interface Props
  extends Omit<
    ComponentProps<"div">,
    "id" | "onBlur" | "onChange" | "onFocus"
  > {
  dragged: boolean;
  id: string;
  onBlur: FocusEventHandler<HTMLTextAreaElement>;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  onDelete: () => void;
  onFocus: FocusEventHandler<HTMLTextAreaElement>;
  onPointerDown: PointerEventHandler<HTMLDivElement>;
}

export let WhiteboardNote = memo(
  ({
    dragged,
    id,
    onBlur,
    onChange,
    onDelete,
    onFocus,
    style,
    className,
    onPointerDown,
    ...props
  }: Props) => {
    let textAreaRef = useRef<HTMLTextAreaElement>(null);
    let note = useStorage((root) => root.notes.get(id));

    let handleDoubleClick = useCallback(() => {
      textAreaRef.current?.focus();
    }, []);

    let handleKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Escape") {
          textAreaRef.current?.blur();
        }
      },
      []
    );

    if (!note) {
      return null;
    }

    let { x, y, text, selectedBy } = note;

    return (
      <div
        data-note={id}
        onDoubleClick={handleDoubleClick}
        onPointerDown={onPointerDown}
        style={{
          transform: `translate(${x}px, ${y}px)`,
          transition: dragged ? "none" : undefined,
          zIndex: dragged ? 1 : 0,
          cursor: dragged ? "grabbing" : "grab",
          ...style,
        }}
        {...props}
      >
        <div>
          <div>
            {/* <Button variant="ghost" onClick={onDelete}>
              <X className="size-4" />
            </Button> */}
          </div>
        </div>
      </div>
    );
  }
);

WhiteboardNote.displayName = "WhiteboardNote";
