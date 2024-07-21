import { ComponentProps, forwardRef, ReactNode } from "react";

import clsx from "clsx";
import styles from "./document.module.css";

interface Props extends ComponentProps<"div"> {
  header: ReactNode;
}

export let DocumentsLayout = forwardRef<HTMLElement, Props>(
  ({ children, header, className, ...props }, ref) => {
    return (
      <div className={clsx(className, styles.container)}>
        <header>
          <main>{children}</main>
        </header>
      </div>
    );
  }
);

DocumentsLayout.displayName = "DocumentsLayout";
