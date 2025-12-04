"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"


export const description = "An interactive area chart"

const dummyEnrollmentData = [
  { date: "2024-01-05", enrollments: 10 },
  { date: "2024-01-12", enrollments: 14 },
  { date: "2024-01-19", enrollments: 9 },
  { date: "2024-01-26", enrollments: 17 },

  { date: "2024-02-02", enrollments: 22 },
  { date: "2024-02-09", enrollments: 18 },
  { date: "2024-02-16", enrollments: 25 },
  { date: "2024-02-23", enrollments: 20 },

  { date: "2024-03-01", enrollments: 16 },
  { date: "2024-03-08", enrollments: 11 },
  { date: "2024-03-15", enrollments: 19 },
  { date: "2024-03-22", enrollments: 24 },

  { date: "2024-03-29", enrollments: 28 },
  { date: "2024-04-05", enrollments: 21 },
  { date: "2024-04-12", enrollments: 15 },
  { date: "2024-04-19", enrollments: 26 },

  { date: "2024-04-26", enrollments: 30 },
  { date: "2024-05-03", enrollments: 32 },
  { date: "2024-05-10", enrollments: 27 },
  { date: "2024-05-17", enrollments: 34 },
];

const chartConfig = {
  enrollments: {
    label: "Enrollments",
    color: "var(--chart-1)"
  }
} satisfies ChartConfig;

export function ChartAreaInteractive() {


  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Total Enrollments</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Total Enrollments for the last 30 days : 1200
          </span>
          <span className="@[540px]/card:hidden">Last 30 days : 1200</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            data={dummyEnrollmentData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              interval="preserveStartEnd"
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  labelFormatter={(value) => {
                    const date = new Date(value);
                    return date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar dataKey={"enrollments"} fill="#d97757" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
