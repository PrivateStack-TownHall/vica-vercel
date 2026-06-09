import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { OVERVIEWS } from "../constants/home.constants";

export default function Overview() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {OVERVIEWS.map((item) => (
        <Card key={item.label}>
          <CardHeader>
            <CardTitle className="text-sm">{item.label}</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-4xl font-bold">{item.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
