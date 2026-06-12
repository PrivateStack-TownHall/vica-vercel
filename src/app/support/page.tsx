"use client";

import { motion } from "framer-motion";

import PageHeader from "@/components/shared/PageHeader";

import FAQ from "./FAQ";
import Promotion from "./Promotion";

export default function SupportPage() {
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
        title="Support"
        description="Help center, frequently asked questions, and platform information."
        breadcrumbs={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Support",
          },
        ]}
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 12,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.1,
          duration: 0.3,
        }}
      >
        <Promotion />
      </motion.div>

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
          delay: 0.2,
          duration: 0.3,
        }}
      >
        <FAQ />
      </motion.div>
    </motion.div>
  );
}
