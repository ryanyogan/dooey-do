import { auth, getProviders } from "@/lib/auth";
import { redirect } from "next/navigation";
import { DemoLogin } from "./demo-login";

import { DASHBOARD_URL } from "@/lib/constants";
import styles from "./signin.module.css";

export default async function SignInPage() {
  let session = await auth();
  if (session) {
    redirect(DASHBOARD_URL);
  }

  let providers = await getProviders();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.title}>Sign in to your account</h2>
        {providers && providers.credentials && <DemoLogin />}
      </main>
      <aside className={styles.aside}></aside>
    </div>
  );
}
