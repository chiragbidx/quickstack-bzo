"use client";

import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createOrUpdateContactAction } from "./actions";

type Contact = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  notes: string;
  companyId: string | null;
};

type ContactDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  contact: Contact | null;
};

export function ContactDialog({ open, onOpenChange, contact }: ContactDialogProps) {
  useEffect(() => {
    if (!open) {
      // Clear dialog state if needed
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {contact ? "Edit Contact" : "New Contact"}
          </DialogTitle>
        </DialogHeader>
        <form
          className="space-y-4 pt-2"
          action={createOrUpdateContactAction}
          onSubmit={() => onOpenChange(false)}
        >
          {contact && <input type="hidden" name="contactId" value={contact.id} />}
          <div className="flex gap-4">
            <div className="w-1/2 space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" name="firstName" required defaultValue={contact?.firstName ?? ""} />
            </div>
            <div className="w-1/2 space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" name="lastName" required defaultValue={contact?.lastName ?? ""} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" required type="email" defaultValue={contact?.email ?? ""} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" type="tel" defaultValue={contact?.phone ?? ""} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea id="notes" name="notes" defaultValue={contact?.notes ?? ""} />
          </div>
          <div className="flex gap-3 justify-end mt-4">
            <Button type="button" variant="ghost" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">
              {contact ? "Update Contact" : "Add Contact"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}