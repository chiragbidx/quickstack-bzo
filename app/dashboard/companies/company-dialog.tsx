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
import { createOrUpdateCompanyAction } from "./actions";

type Company = {
  id: string;
  name: string;
  website: string | null;
  notes: string;
};

type CompanyDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  company: Company | null;
};

export function CompanyDialog({ open, onOpenChange, company }: CompanyDialogProps) {
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
            {company ? "Edit Company" : "New Company"}
          </DialogTitle>
        </DialogHeader>
        <form
          className="space-y-4 pt-2"
          action={createOrUpdateCompanyAction}
          onSubmit={() => onOpenChange(false)}
        >
          {company && <input type="hidden" name="companyId" value={company.id} />}
          <div className="space-y-2">
            <Label htmlFor="name">Company Name</Label>
            <Input id="name" name="name" required defaultValue={company?.name ?? ""} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="website">Website</Label>
            <Input id="website" name="website" type="url" placeholder="https://..." defaultValue={company?.website ?? ""} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea id="notes" name="notes" defaultValue={company?.notes ?? ""} />
          </div>
          <div className="flex gap-3 justify-end mt-4">
            <Button type="button" variant="ghost" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">
              {company ? "Update Company" : "Add Company"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}