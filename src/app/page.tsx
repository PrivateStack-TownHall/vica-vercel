"use client";

import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

import { Folder, FileText, ClipboardCheck } from "lucide-react";

import { data } from "@/lib/data";

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
  const router = useRouter();

  const programs = data.programs.slice(0, 12);

  const lessons = data.lessons.slice(0, 8);

  const assignments = data.assignments.slice(0, 8);

  return (
    <motion.div initial="hidden" animate="visible" className="space-y-8">
      <motion.div
        variants={sectionVariants}
        transition={{
          duration: 0.4,
        }}
      >
        <Hero />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        transition={{
          delay: 0.1,
          duration: 0.4,
        }}
      >
        <Section title="Programs">
          <div
            className="
              grid
              grid-cols-2
              gap-2
              md:grid-cols-5
              xl:grid-cols-6
            "
          >
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
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
                onClick={() => router.push(`/programs/${program.slug}`)}
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
                <Folder
                  size={72}
                  className="
                      mb-1
                      text-[#5477A6]
                    "
                />

                <h3
                  className="
                      line-clamp-2
                      text-center
                      text-sm
                      font-medium
                      text-slate-700
                    "
                >
                  {program.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </Section>
      </motion.div>

      <motion.div
        variants={sectionVariants}
        transition={{
          delay: 0.2,
          duration: 0.4,
        }}
      >
        <Section title="Latest Lessons">
          <div
            className="
              grid
              grid-cols-2
              gap-2
            "
          >
            {lessons.map((lesson, index) => (
              <motion.div
                key={lesson.id}
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
                onClick={() => router.push(`/lessons/${lesson.slug}`)}
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
                <FileText
                  size={40}
                  className="
                      text-[#5477A6]
                    "
                />

                <div>
                  <p className="font-medium">{lesson.title}</p>

                  <p
                    className="
                        text-sm
                        text-slate-500
                      "
                  >
                    Lesson
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
      </motion.div>

      <motion.div
        variants={sectionVariants}
        transition={{
          delay: 0.3,
          duration: 0.4,
        }}
      >
        <Section title="Latest Assignments">
          <div
            className="
              grid
              grid-cols-2
              gap-2
            "
          >
            {assignments.map((assignment, index) => (
              <motion.div
                key={assignment.id}
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
                onClick={() => router.push(`/assignments/${assignment.slug}`)}
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
                <ClipboardCheck
                  size={40}
                  className="
                      text-[#5477A6]
                    "
                />

                <div>
                  <p className="font-medium">{assignment.title}</p>

                  <p
                    className="
                        text-sm
                        text-slate-500
                      "
                  >
                    Assignment
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
      </motion.div>

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
