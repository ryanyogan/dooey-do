import { Container } from "@/primitives/Container";
import clsx from "clsx";

import styles from "./documents-list.module.css";

export function DocumentsList() {
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
