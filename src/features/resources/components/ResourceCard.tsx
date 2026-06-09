"use client";

import { motion } from "framer-motion";

import { getResourceIcon } from "../utils/getResourceIcon";

interface ResourceCardProps {
  title: string;
  type: string;
  size: string;

  program: string;
  module: string;

  onClick?: () => void;
}

export default function ResourceCard({
  title,
  type,
  size,
  program,
  module,
  onClick,
}: ResourceCardProps) {
  const { Icon, color } = getResourceIcon(type);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
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
      <p
        className="
          mb-2
          text-[10px]
          font-semibold
          uppercase
          tracking-wider
          text-[#5477A6]
        "
      >
        {program}
      </p>

      <Icon size={42} className={`mb-3 ${color}`} />

      <h3
        className="
          mb-2
          min-h-[40px]
          line-clamp-2
          text-sm
          font-semibold
          text-[#0D1B2A]
        "
      >
        {title}
      </h3>

      <p className="text-xs text-slate-500">{module}</p>

      <p className="mt-1 text-xs text-slate-400">
        {type.toUpperCase()} • {size}
      </p>
    </motion.div>
  );
}
