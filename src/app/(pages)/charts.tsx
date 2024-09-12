"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 120, tablet: 100, mobile: 80 },
  { month: "February", desktop: 198, tablet: 65, mobile: 200 },
  { month: "March", desktop: 100, tablet: 46, mobile: 120 },
  { month: "April", desktop: 73, tablet: 55, mobile: 190 },
  { month: "May", desktop: 185, tablet: 34, mobile: 130 },
  { month: "June", desktop: 120, tablet: 12, mobile: 140 },
  { month: "Jule", desktop: 120, tablet: 12, mobile: 140 },
  { month: "August", desktop: 120, tablet: 12, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  tablet: {
    label: "Desktop",
    color: "violet",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export const Charts = () => {
  return (
    <>
      <div className="my-10 -mb-10">
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="tablet" fill="var(--color-tablet)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </div>
    </>
  );
};

export default Charts;
