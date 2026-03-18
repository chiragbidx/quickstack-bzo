import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

import Client from "./client";
import { getAuthSession } from "@/lib/auth/session";
import { db } from "@/lib/db/client";
import { teams, contacts, teamMembers } from "@/lib/db/schema";

export default async function ContactsPage() {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  // Find current user's team
  const [membership] = await db
    .select({ teamId: teamMembers.teamId })
    .from(teamMembers)
    .where(eq(teamMembers.userId, session.userId))
    .limit(1);

  if (!membership) redirect("/dashboard/team");

  // Load all contacts for the team
  const contactRows = await db
    .select()
    .from(contacts)
    .where(eq(contacts.teamId, membership.teamId));

  return <Client contacts={contactRows} />;
}