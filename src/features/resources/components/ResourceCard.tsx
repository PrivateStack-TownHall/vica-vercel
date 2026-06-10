"use client";

import { motion } from "framer-motion";

import { ResourceType } from "../types/resource.type";
import { getResourceIcon } from "../utils/getResourceIcon";

interface ResourceCardProps {
  title: string;
  description: string;
  type: ResourceType;
  size: string;
  onClick?: () => void;
}

export default function ResourceCard({
  title,
  description,
  type,
  size,
  onClick,
}: ResourceCardProps) {
  const { Icon, color } = getResourceIcon(type);

  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      whileTap={{
        scale: 0.98,
      }}
      onClick={onClick}
      className="
        cursor-pointer
        rounded-2xl
        border
        border-[#D9E2F2]
        bg-white
        p-4
        transition-all
        hover:border-[#5477A6]
        hover:bg-[#EDF2FF]
      "
    >
      <Icon size={42} className={`mb-3 ${color}`} />

      <h3
        className="
          mb-2
          line-clamp-2
          min-h-[40px]
          text-sm
          font-semibold
          text-[#0D1B2A]
        "
      >
        {title}
      </h3>

      <p
        className="
          mb-3
          line-clamp-2
          text-xs
          text-slate-500
        "
      >
        {description}
      </p>

      <p
        className="
          text-xs
          text-slate-400
        "
      >
        {type.toUpperCase()} • {size}
      </p>
    </motion.div>
  );
}
