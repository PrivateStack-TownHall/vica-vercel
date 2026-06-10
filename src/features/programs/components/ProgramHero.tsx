import { Card, CardContent } from "@/components/ui/card";

interface ProgramHeroProps {
  title: string;
  description: string;
}

export default function ProgramHero({ title, description }: ProgramHeroProps) {
  return (
    <Card className="border-[#D9E2F2]">
      <CardContent className="p-8">
        <h1 className="mb-3 text-4xl font-bold text-[#0D1B2A]">{title}</h1>

        <p className="max-w-4xl text-slate-600">{description}</p>
      </CardContent>
    </Card>
  );
}
