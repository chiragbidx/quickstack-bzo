"use server";

import { z } from "zod";
import { eq, and } from "drizzle-orm";
import { redirect } from "next/navigation";

import { getAuthSession } from "@/lib/auth/session";
import { db } from "@/lib/db/client";
import { contacts, companies, teamMembers } from "@/lib/db/schema";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string().email("Valid email required."),
  phone: z.string().optional(),
  notes: z.string().optional(),
  companyId: z.string().optional().nullable(),
  contactId: z.string().optional(),
});

function redirectToContactsWithMessage(status: "success" | "error", message: string): never {
  const query = new URLSearchParams({ status, message });
  redirect(`/dashboard/contacts?${query.toString()}`);
}

export async function createOrUpdateContactAction(formData: FormData) {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  // Find user's team
  const [membership] = await db
    .select({ teamId: teamMembers.teamId })
    .from(teamMembers)
    .where(eq(teamMembers.userId, session.userId))
    .limit(1);

  if (!membership) redirect("/dashboard/team");

  const parsed = contactSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    notes: formData.get("notes"),
    companyId: formData.get("companyId") || null,
    contactId: formData.get("contactId") || undefined,
  });

  if (!parsed.success) {
    return redirectToContactsWithMessage("error", parsed.error.issues[0]?.message ?? "Invalid form data.");
  }

  if (parsed.data.contactId) {
    // Edit existing
    await db
      .update(contacts)
      .set({
        firstName: parsed.data.firstName,
        lastName: parsed.data.lastName,
        email: parsed.data.email,
        phone: parsed.data.phone,
        notes: parsed.data.notes,
        companyId: parsed.data.companyId,
        updatedAt: new Date(),
      })
      .where(
        and(
          eq(contacts.id, parsed.data.contactId),
          eq(contacts.teamId, membership.teamId)
        )
      );
    redirectToContactsWithMessage("success", "Contact updated.");
  } else {
    // Create
    await db.insert(contacts).values({
      teamId: membership.teamId,
      firstName: parsed.data.firstName,
      lastName: parsed.data.lastName,
      email: parsed.data.email,
      phone: parsed.data.phone,
      notes: parsed.data.notes ?? "",
      companyId: parsed.data.companyId,
    });
    redirectToContactsWithMessage("success", "Contact added.");
  }
}

export async function deleteContactAction(formData: FormData) {
  const contactId = formData.get("contactId");
  if (typeof contactId !== "string" || !contactId) {
    return redirectToContactsWithMessage("error", "Invalid contact.");
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
    .delete(contacts)
    .where(
      and(
        eq(contacts.id, contactId),
        eq(contacts.teamId, membership.teamId)
      )
    );
  redirectToContactsWithMessage("success", "Contact deleted.");
}