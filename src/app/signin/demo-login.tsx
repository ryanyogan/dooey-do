"use client";

import { users } from "@/data/users";
import { Select } from "@/primitives/Select";

import { signIn } from "next-auth/react";
import styles from "./signin.module.css";

export function DemoLogin() {
  return (
    <div className={styles.actions}>
      <Select
        items={users.map((user) => ({ value: user.id, title: user.name }))}
        onChange={(email: string) => {
          signIn("credentials", { email });
        }}
        placeholder="Choose a profile"
      />
    </div>
  );
}
