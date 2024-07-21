"use client";

import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
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
        <DashboardHeader isOpen={isMenuOpen} onMenuClick={handleMenuClick} />
      </header>
      <aside className={styles.aside} data-open={isMenuOpen || undefined}>
        <DashboardSidebar groups={groups} />
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
