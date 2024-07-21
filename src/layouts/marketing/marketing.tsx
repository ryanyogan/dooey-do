import clsx from "clsx";
import { ComponentProps } from "react";

import { MarketingFooter, MarketingHeader } from "@/components/marketing";
import styles from "./marketing.module.css";

export function MarketingLayout({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div className={clsx(className, styles.layout)} {...props}>
      <MarketingHeader />
      <main>{children}</main>
      <MarketingFooter className={styles.footer} />
    </div>
  );
}
