import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    "Element",
    "Density",
    { role: "style" },
    {
      sourceColumn: 0,
      role: "annotation",
      type: "string",
      calc: "stringify",
    },
  ],
  ["Window", 3, "Red", null],
  ["GitHub", 7, "Blue", null],
  ["VScode", 10, "color: #e5e4e2", null],
];

export default function Pchart() {
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
    />
  );
}
