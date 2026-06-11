// app/resources/[slug]/ResourceContent.tsx

"use client";

import { motion } from "framer-motion";

import { Download, Calendar, HardDrive } from "lucide-react";

import PageHeader from "@/components/shared/PageHeader";

import { Button } from "@/components/ui/button";

import { Resource } from "@/features/resources/types/resource.type";
import { getResourceIcon } from "@/features/resources/utils/getResourceIcon";

interface ResourceContentProps {
  resource: Resource;
}

export default function ResourceContent({ resource }: ResourceContentProps) {
  const { Icon, color } = getResourceIcon(resource.type);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
      }}
      className="space-y-8"
    >
      <PageHeader
        title={resource.title}
        description={resource.description}
        breadcrumbs={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Resources",
            href: "/resources",
          },
          {
            label: resource.title,
          },
        ]}
      />

      <div
        className="
          grid
          gap-8
          grid-cols-2
        "
      >
        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            text-center
          "
        >
          <Icon size={120} className={`mb-6 ${color}`} />

          <h2
            className="
              mb-3
              text-3xl
              font-bold
              text-[#0D1B2A]
            "
          >
            {resource.title}
          </h2>

          <p
            className="
              max-w-xl
              text-slate-600
            "
          >
            {resource.description}
          </p>
        </div>

        <div>
          <div
            className="
              mb-6
              grid
              gap-4
              md:grid-cols-3
            "
          >
            <div
              className="
                rounded-xl
                bg-white
                p-4
                text-center
              "
            >
              <p className="mb-2 text-sm text-slate-500">Type</p>

              <p className="font-semibold">{resource.type.toUpperCase()}</p>
            </div>

            <div
              className="
                rounded-xl
                bg-white
                p-4
                text-center
              "
            >
              <HardDrive size={18} className="mx-auto mb-2" />

              <p className="mb-1 text-sm text-slate-500">Size</p>

              <p className="font-semibold">{resource.size}</p>
            </div>

            <div
              className="
                rounded-xl
                bg-white
                p-4
                text-center
              "
            >
              <Calendar size={18} className="mx-auto mb-2" />

              <p className="mb-1 text-sm text-slate-500">Created</p>

              <p className="font-semibold">{resource.createdAt || "-"}</p>
            </div>
          </div>

          {resource.downloadUrl ? (
            <Button
              asChild
              size="lg"
              className="
                bg-[#5477A6]
                text-white
                hover:bg-[#45658E]
              "
            >
              <a
                href={`/download?url=${encodeURIComponent(
                  resource.downloadUrl ?? "",
                )}`}
                target="_blank"
                rel="noreferrer"
                download
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resource
              </a>
            </Button>
          ) : (
            <Button size="lg" disabled>
              Resource Not Available
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
