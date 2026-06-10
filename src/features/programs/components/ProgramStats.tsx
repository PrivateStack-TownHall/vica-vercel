import { BookOpen, ClipboardCheck, FolderKanban, Package } from "lucide-react";

interface ProgramStatsProps {
  modules: number;
  lessons: number;
  assignments: number;
  resources: number;
}

export default function ProgramStats({
  modules,
  lessons,
  assignments,
  resources,
}: ProgramStatsProps) {
  const stats = [
    {
      label: "Modules",
      value: modules,
      icon: FolderKanban,
    },
    {
      label: "Lessons",
      value: lessons,
      icon: BookOpen,
    },
    {
      label: "Assignments",
      value: assignments,
      icon: ClipboardCheck,
    },
    {
      label: "Resources",
      value: resources,
      icon: Package,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="
              rounded-2xl
              border
              border-[#D9E2F2]
              bg-white
              p-5
            "
          >
            <Icon size={28} className="mb-3 text-[#5477A6]" />

            <p className="text-3xl font-bold">{item.value}</p>

            <p className="text-sm text-slate-500">{item.label}</p>
          </div>
        );
      })}
    </div>
  );
}
