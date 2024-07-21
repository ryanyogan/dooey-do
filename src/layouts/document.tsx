import clsx from "clsx";
import { ComponentProps, forwardRef, ReactNode } from "react";

interface Props extends ComponentProps<"div"> {
  header: ReactNode;
}

export let DocumentLayout = forwardRef<HTMLElement, Props>(
  ({ children, header, className, ...props }, ref) => {
    return (
      <div className={clsx(className, "grid")} {...props}>
        <header>{header}</header>
        <main ref={ref}>{children}</main>
      </div>
    );
  }
);

DocumentLayout.displayName = "DocumentLayout";
