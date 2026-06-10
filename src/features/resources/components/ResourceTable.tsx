"use client";

import { useRouter } from "next/navigation";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Resource } from "../types/resource.type";
import { getResourceIcon } from "../utils/getResourceIcon";

interface ResourceTableProps {
  resources: Resource[];
}

export default function ResourceTable({ resources }: ResourceTableProps) {
  const router = useRouter();

  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-[#D9E2F2]
        bg-white
      "
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Resource</TableHead>

            <TableHead>Type</TableHead>

            <TableHead>Size</TableHead>

            <TableHead>Created</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {resources.map((resource) => {
            const { Icon, color } = getResourceIcon(resource.type);

            return (
              <TableRow
                key={resource.id}
                className="cursor-pointer"
                onClick={() => router.push(`/resources/${resource.slug}`)}
              >
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Icon size={32} className={color} />

                    <div>
                      <p
                        className="
                          font-medium
                          text-[#0D1B2A]
                        "
                      >
                        {resource.title}
                      </p>

                      <p
                        className="
                          text-xs
                          text-slate-500
                        "
                      >
                        {resource.description}
                      </p>
                    </div>
                  </div>
                </TableCell>

                <TableCell>{resource.type.toUpperCase()}</TableCell>

                <TableCell>{resource.size}</TableCell>

                <TableCell>{resource.createdAt}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
