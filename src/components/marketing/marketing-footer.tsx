import { GitHubIcon } from "@/icons";
import { LinkButton } from "@/primitives/Button";
import { Container } from "@/primitives/Container";
import clsx from "clsx";
import { ComponentProps, useMemo } from "react";
import styles from "./marketing-footer.module.css";

export function MarketingFooter({
  className,
  ...props
}: ComponentProps<"footer">) {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className={clsx(className, styles.footer)} {...props}>
      <Container className={styles.container}>
        <span className={styles.copyright}>© {year} Yogan.dev</span>
        <LinkButton
          href="https://ryanyogan.com"
          icon={<GitHubIcon />}
          target="_blank"
          variant="secondary"
        >
          GitHub
        </LinkButton>
      </Container>
    </footer>
  );
}
