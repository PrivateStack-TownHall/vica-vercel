import {
  BookOpen,
  ClipboardCheck,
  FolderKanban,
  GraduationCap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <Card className="border-[#D9E2F2]">
        <CardContent className="p-10">
          <Badge className="mb-4">Vincent's Coding Academy</Badge>

          <h1 className="mb-4 text-6xl font-bold tracking-tight text-[#0D1B2A]">
            Build. Code. Grow.
          </h1>

          <p className="max-w-3xl text-lg text-slate-600">
            Explore structured learning paths, lessons, assignments, and
            resources designed for modern software developers.
          </p>

          <div className="mt-8">
            <Button>Browse Programs</Button>
          </div>
        </CardContent>
      </Card>

      {/* Programs */}
      <section>
        <h2 className="mb-4 text-2xl font-bold">Programs</h2>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Full Stack JS",
            "React Development",
            "Node.js Backend",
            "Go Backend",
          ].map((item) => (
            <Card
              key={item}
              className="cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="flex flex-col items-center p-8">
                <FolderKanban size={56} className="mb-4 text-[#5477A6]" />

                <h3 className="font-semibold">{item}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Lessons */}
      <section>
        <h2 className="mb-4 text-2xl font-bold">Latest Lessons</h2>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            "React State Management",
            "TypeScript Generics",
            "REST API Design",
            "JWT Authentication",
          ].map((item) => (
            <Card key={item}>
              <CardContent className="flex items-center gap-4 p-5">
                <BookOpen className="text-[#5477A6]" />

                <div>
                  <p className="font-medium">{item}</p>

                  <p className="text-sm text-slate-500">Lesson</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Assignments */}
      <section>
        <h2 className="mb-4 text-2xl font-bold">Latest Assignments</h2>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Build Todo App",
            "Create REST API",
            "Portfolio Website",
            "Authentication Challenge",
          ].map((item) => (
            <Card key={item}>
              <CardContent className="flex items-center gap-4 p-5">
                <ClipboardCheck className="text-[#5477A6]" />

                <div>
                  <p className="font-medium">{item}</p>

                  <p className="text-sm text-slate-500">Assignment</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section>
        <h2 className="mb-4 text-2xl font-bold">Platform Overview</h2>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Programs</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-4xl font-bold">12</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Modules</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-4xl font-bold">48</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Lessons</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-4xl font-bold">180</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Assignments</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-4xl font-bold">90</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
