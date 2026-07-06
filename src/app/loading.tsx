"use client";

import { motion } from "framer-motion";

import { GraduationCap } from "lucide-react";

export default function Loading() {
  return (
    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center
      "
    >
      <div
        className="
          flex
          flex-col
          items-center
          gap-8
        "
      >
        <div
          className="
            relative
            flex
            h-36
            w-36
            items-center
            justify-center
          "
        >
          {/* Ring 1 */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "linear",
            }}
            className="
              absolute
              h-36
              w-36
              rounded-full
              border-[3px]
              border-transparent
              border-t-[#5477A6]
              border-r-[#5477A6]/40
            "
          />

          {/* Ring 2 */}
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "linear",
            }}
            className="
              absolute
              h-26
              w-26
              rounded-full
              border-[3px]
              border-transparent
              border-b-[#7A9FD4]
              border-l-[#7A9FD4]/40
            "
          />

          {/* Ring 3 */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: "linear",
            }}
            className="
              absolute
              h-16
              w-16
              rounded-full
              border-[3px]
              border-transparent
              border-r-[#0D1B2A]
              border-t-[#0D1B2A]/30
            "
          />

          {/* Icon */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, -8, 8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
            }}
          >
            <GraduationCap size={48} className="text-[#5477A6]" />
          </motion.div>
        </div>

        <div className="text-center">
          <motion.h2
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
            }}
            className="
              text-xl
              font-semibold
              text-slate-700
            "
          >
            Loading VICA
          </motion.h2>

          <div
            className="
              mt-4
              flex
              justify-center
              gap-2
            "
          >
            {[0, 1, 2].map((item) => (
              <motion.div
                key={item}
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8,
                  delay: item * 0.2,
                }}
                className="
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-[#5477A6]
                "
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
