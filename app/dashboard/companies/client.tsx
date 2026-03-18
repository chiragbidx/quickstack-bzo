"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableHead, TableRow, TableHeader, TableCell, TableBody } from "@/components/ui/table";
import { Plus, Edit, Trash } from "lucide-react";
import { CompanyDialog } from "./company-dialog";
import { deleteCompanyAction } from "./actions";

type Company = {
  id: string;
  name: string;
  website: string | null;
  notes: string;
};

type ClientProps = {
  companies: Company[];
};

export default function Client({ companies }: ClientProps) {
  const [showDialog, setShowDialog] = useState(false);
  const [editingCompany, setEditingCompany] = useState<Company | null>(null);

  const handleEdit = (company: Company) => {
    setEditingCompany(company);
    setShowDialog(true);
  };

  const handleNew = () => {
    setEditingCompany(null);
    setShowDialog(true);
  };

  return (
    <section>
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-semibold tracking-tight">Companies</h1>
        <Button onClick={handleNew}>
          <Plus className="mr-2 size-4" />
          New Company
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Your team’s companies</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Website</TableHead>
                <TableHead>Notes</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {companies.map((company) => (
                <TableRow key={company.id}>
                  <TableCell>{company.name}</TableCell>
                  <TableCell>
                    {company.website ? (
                      <a href={company.website} target="_blank" rel="noopener noreferrer" className="underline">
                        {company.website}
                      </a>
                    ) : (
                      ""
                    )}
                  </TableCell>
                  <TableCell>{company.notes}</TableCell>
                  <TableCell className="flex gap-2">
                    <Button variant="secondary" size="icon" onClick={() => handleEdit(company)} aria-label={`Edit ${company.name}`}>
                      <Edit className="size-4" />
                    </Button>
                    <form action={deleteCompanyAction}>
                      <input type="hidden" name="companyId" value={company.id} />
                      <Button variant="ghost" size="icon" className="text-destructive" aria-label={`Delete ${company.name}`}>
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
        <CompanyDialog
          key={editingCompany?.id || "new"}
          open={showDialog}
          onOpenChange={setShowDialog}
          company={editingCompany}
        />
      )}
    </section>
  );
}