import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

import Client from "./client";
import { getAuthSession } from "@/lib/auth/session";
import { db } from "@/lib/db/client";
import { teamMembers, companies } from "@/lib/db/schema";

export default async function CompaniesPage() {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  // Find current user's team
  const [membership] = await db
    .select({ teamId: teamMembers.teamId })
    .from(teamMembers)
    .where(eq(teamMembers.userId, session.userId))
    .limit(1);

  if (!membership) redirect("/dashboard/team");

  // Load all companies for the team
  const companyRows = await db
    .select()
    .from(companies)
    .where(eq(companies.teamId, membership.teamId));

  return <Client companies={companyRows} />;
}