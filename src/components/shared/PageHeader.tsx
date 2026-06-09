"use client";

import { motion } from "framer-motion";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbItemType {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItemType[];
}

export default function PageHeader({
  title,
  description,
  breadcrumbs = [],
}: PageHeaderProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 16,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="mb-8"
    >
      {/* Breadcrumb */}
      {breadcrumbs.length > 0 && (
        <Breadcrumb className="mb-3">
          <BreadcrumbList>
            {breadcrumbs.map((item, index) => (
              <div key={`${item.label}-${index}`} className="flex items-center">
                <BreadcrumbItem>
                  {item.href ? (
                    <BreadcrumbLink
                      href={item.href}
                      className="
                        text-slate-500
                        transition-colors
                        hover:text-[#5477A6]
                      "
                    >
                      {item.label}
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>

                {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      )}

      {/* Title */}
      <motion.h1
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.1,
          duration: 0.4,
        }}
        className="
          text-4xl
          font-bold
          tracking-tight
          text-[#0D1B2A]
        "
      >
        {title}
      </motion.h1>

      {/* Description */}
      {description && (
        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.15,
            duration: 0.4,
          }}
          className="
            mt-2
            max-w-3xl
            text-sm
            leading-6
            text-slate-500
          "
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
