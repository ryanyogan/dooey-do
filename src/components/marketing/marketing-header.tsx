import { Logo } from "@/components/logo";
import { SignInIcon } from "@/icons";
import { Button } from "@/primitives/Button";
import { Container } from "@/primitives/Container";
import Link from "next/link";
import { ComponentProps } from "react";

import clsx from "clsx";
import styles from "./marketing-header.module.css";

export function MarketingHeader({
  className,
  ...props
}: ComponentProps<"header">) {
  return (
    <header className={clsx(className, styles.header)} {...props}>
      <Container className={styles.container}>
        <Link href="/">
          <Logo />
        </Link>
        <form>
          <Button icon={<SignInIcon />}>Sign in</Button>
        </form>
      </Container>
    </header>
  );
}
