"use client";

import { motion } from "framer-motion";

import {
  ASSIGNMENTS,
  ICONS,
  LESSONS,
  PROGRAMS,
} from "@/features/home/constants/home.constants";

import { Hero, Overview, Section } from "@/features/home";

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function HomePage() {
  const ProgramIcon = ICONS.program;
  const LessonIcon = ICONS.lesson;
  const AssignmentIcon = ICONS.assignment;

  return (
    <motion.div initial="hidden" animate="visible" className="space-y-8">
      {/* Hero */}
      <motion.div
        variants={sectionVariants}
        transition={{
          duration: 0.4,
        }}
      >
        <Hero />
      </motion.div>

      {/* Programs */}
      <motion.div
        variants={sectionVariants}
        transition={{
          delay: 0.1,
          duration: 0.4,
        }}
      >
        <Section title="Programs">
          <div className="grid grid-cols-2 gap-2 md:grid-cols-5 xl:grid-cols-6">
            {PROGRAMS.map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 0.15 + index * 0.03,
                }}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  flex
                  cursor-pointer
                  flex-col
                  items-center
                  rounded-xl
                  p-2
                  transition-all
                  hover:bg-[#DCE7FF]
                "
              >
                <ProgramIcon size={72} className="mb-1 text-[#5477A6]" />

                <h3 className="line-clamp-2 text-center text-sm font-medium text-slate-700">
                  {item}
                </h3>
              </motion.div>
            ))}
          </div>
        </Section>
      </motion.div>

      {/* Lessons */}
      <motion.div
        variants={sectionVariants}
        transition={{
          delay: 0.2,
          duration: 0.4,
        }}
      >
        <Section title="Latest Lessons">
          <div className="grid grid-cols-2 gap-2">
            {LESSONS.map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.25 + index * 0.03,
                }}
                whileHover={{
                  x: 4,
                }}
                className="
                  flex
                  cursor-pointer
                  items-center
                  gap-4
                  rounded-xl
                  p-3
                  transition-all
                  hover:bg-[#DCE7FF]
                "
              >
                <LessonIcon size={40} className="text-[#5477A6]" />

                <div>
                  <p className="font-medium">{item}</p>

                  <p className="text-sm text-slate-500">Lesson</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
      </motion.div>

      {/* Assignments */}
      <motion.div
        variants={sectionVariants}
        transition={{
          delay: 0.3,
          duration: 0.4,
        }}
      >
        <Section title="Latest Assignments">
          <div className="grid grid-cols-2 gap-2">
            {ASSIGNMENTS.map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.35 + index * 0.03,
                }}
                whileHover={{
                  x: 4,
                }}
                className="
                  flex
                  cursor-pointer
                  items-center
                  gap-4
                  rounded-xl
                  p-3
                  transition-all
                  hover:bg-[#DCE7FF]
                "
              >
                <AssignmentIcon size={40} className="text-[#5477A6]" />

                <div>
                  <p className="font-medium">{item}</p>

                  <p className="text-sm text-slate-500">Assignment</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
      </motion.div>

      {/* Overview */}
      <motion.div
        variants={sectionVariants}
        transition={{
          delay: 0.4,
          duration: 0.4,
        }}
      >
        <Section title="Platform Overview">
          <Overview />
        </Section>
      </motion.div>
    </motion.div>
  );
}
