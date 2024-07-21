import { DashboardLayout } from "@/layouts/dashboard/dashboard";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function Dashboard({ children }: { children: ReactNode }) {
  let session = await auth();

  if (!session) {
    redirect("/");
  }

  let groups: any = [];

  return <DashboardLayout groups={groups}>{children}</DashboardLayout>;
}
