"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHead, TableRow, TableHeader, TableCell, TableBody } from "@/components/ui/table";
import { Plus, Edit, Trash } from "lucide-react";
import { ContactDialog } from "./contact-dialog";
import { deleteContactAction } from "./actions";

type Contact = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  notes: string;
  companyId: string | null;
};

type ClientProps = {
  contacts: Contact[];
};

export default function Client({ contacts }: ClientProps) {
  const [showDialog, setShowDialog] = useState(false);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);

  const handleEdit = (contact: Contact) => {
    setEditingContact(contact);
    setShowDialog(true);
  };
  const handleNew = () => {
    setEditingContact(null);
    setShowDialog(true);
  };

  return (
    <section>
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-semibold tracking-tight">Contacts</h1>
        <Button onClick={handleNew}>
          <Plus className="mr-2 size-4" />
          New Contact
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your team’s contacts</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Notes</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell>{contact.firstName} {contact.lastName}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.phone ?? ""}</TableCell>
                  <TableCell>{contact.notes}</TableCell>
                  <TableCell className="flex gap-2">
                    <Button variant="secondary" size="icon" onClick={() => handleEdit(contact)} aria-label={`Edit ${contact.firstName}`}>
                      <Edit className="size-4" />
                    </Button>
                    <form action={deleteContactAction}>
                      <input type="hidden" name="contactId" value={contact.id} />
                      <Button variant="ghost" size="icon" className="text-destructive" aria-label={`Delete ${contact.firstName}`}>
                        <Trash className="size-4" />
                      </Button>
                    </form>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      {showDialog && (
        <ContactDialog
          key={editingContact?.id || "new"}
          open={showDialog}
          onOpenChange={setShowDialog}
          contact={editingContact}
        />
      )}
    </section>
  );
}