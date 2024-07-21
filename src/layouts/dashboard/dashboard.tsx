"use client";

import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Group } from "@/types/data";
import clsx from "clsx";
import { ComponentProps, useCallback, useState } from "react";
import styles from "./dashboard.module.css";

interface Props extends ComponentProps<"div"> {
  groups: Group[];
}

export function DashboardLayout({
  children,
  className,
  groups,
  ...props
}: Props) {
  let [isMenuOpen, setMenuOpen] = useState(false);

  let handleMenuClick = useCallback(() => {
    setMenuOpen((isOpen) => !isOpen);
  }, []);

  return (
    <div className={clsx(className, styles.container)} {...props}>
      <header className={styles.header}>
        <DashboardHeader />
      </header>
      <aside className={styles.aside} data-open={isMenuOpen || undefined}>
        sidebar
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
