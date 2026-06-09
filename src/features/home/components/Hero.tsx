import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Hero() {
  return (
    <Card className="bg-vica-gradient">
      <CardContent className="py-2 px-5 ">
        <Badge className="mb-4 bg-white text-[#0d1b2a] py-2 px-3 font-semibold">
          VICA - Learning Portal
        </Badge>

        <h1 className="mb-2 text-2xl font-bold tracking-tight text-blue-300">
          Build. Code. Grow.
        </h1>

        <p className="max-w-3xl text-md text-white">
          Explore structured learning paths, lessons, assignments, and resources
          designed for modern software developers.
        </p>

        <div className="mt-8">
          <Button className="bg-white text-[#0d1b2a] py-1 px-2 rounded-md hover:bg-[#0d1b2a] hover:text-white">
            Browse Programs
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
