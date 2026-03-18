"use server";

import { z } from "zod";
import { eq, and } from "drizzle-orm";
import { redirect } from "next/navigation";

import { getAuthSession } from "@/lib/auth/session";
import { db } from "@/lib/db/client";
import { companies, teamMembers } from "@/lib/db/schema";

const companySchema = z.object({
  name: z.string().min(1, "Company name is required."),
  website: z.string().url("Website must be a valid url.").optional().or(z.literal("")),
  notes: z.string().optional(),
  companyId: z.string().optional(),
});

function redirectToCompaniesWithMessage(status: "success" | "error", message: string): never {
  const query = new URLSearchParams({ status, message });
  redirect(`/dashboard/companies?${query.toString()}`);
}

export async function createOrUpdateCompanyAction(formData: FormData) {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  // Find user's team
  const [membership] = await db
    .select({ teamId: teamMembers.teamId })
    .from(teamMembers)
    .where(eq(teamMembers.userId, session.userId))
    .limit(1);

  if (!membership) redirect("/dashboard/team");

  const parsed = companySchema.safeParse({
    name: formData.get("name"),
    website: formData.get("website") || "",
    notes: formData.get("notes"),
    companyId: formData.get("companyId") || undefined,
  });

  if (!parsed.success) {
    return redirectToCompaniesWithMessage("error", parsed.error.issues[0]?.message ?? "Invalid form data.");
  }

  if (parsed.data.companyId) {
    // Edit existing
    await db
      .update(companies)
      .set({
        name: parsed.data.name,
        website: parsed.data.website || null,
        notes: parsed.data.notes ?? "",
        updatedAt: new Date(),
      })
      .where(
        and(
          eq(companies.id, parsed.data.companyId),
          eq(companies.teamId, membership.teamId)
        )
      );
    redirectToCompaniesWithMessage("success", "Company updated.");
  } else {
    // Create
    await db.insert(companies).values({
      teamId: membership.teamId,
      name: parsed.data.name,
      website: parsed.data.website || null,
      notes: parsed.data.notes ?? "",
    });
    redirectToCompaniesWithMessage("success", "Company added.");
  }
}

export async function deleteCompanyAction(formData: FormData) {
  const companyId = formData.get("companyId");
  if (typeof companyId !== "string" || !companyId) {
    return redirectToCompaniesWithMessage("error", "Invalid company.");
  }

  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  // Find user's team
  const [membership] = await db
    .select({ teamId: teamMembers.teamId })
    .from(teamMembers)
    .where(eq(teamMembers.userId, session.userId))
    .limit(1);

  if (!membership) redirect("/dashboard/team");

  await db
    .delete(companies)
    .where(
      and(
        eq(companies.id, companyId),
        eq(companies.teamId, membership.teamId)
      )
    );
  redirectToCompaniesWithMessage("success", "Company deleted.");
}