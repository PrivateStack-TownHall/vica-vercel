"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Resource } from "../types/resource.type";

export default function ResourceTable({
  resources,
}: {
  resources: Resource[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Resource</TableHead>

            <TableHead>Type</TableHead>

            <TableHead>Size</TableHead>

            <TableHead>Program</TableHead>

            <TableHead>Module</TableHead>

            <TableHead>Created</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {resources.map((resource) => (
            <TableRow key={resource.id}>
              <TableCell>{resource.title}</TableCell>

              <TableCell>{resource.type.toUpperCase()}</TableCell>

              <TableCell>{resource.size}</TableCell>

              <TableCell>{resource.program}</TableCell>

              <TableCell>{resource.module}</TableCell>

              <TableCell>{resource.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
