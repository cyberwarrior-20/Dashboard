import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Element", "Density", { role: "style" }],
  ["HTML", 8.94, "#b87333"], // RGB value
  ["JS", 10.49, "silver"], // English color name
  ["API", 19.3, "gold"],
  ["ReactJS", 21.45, "color: #e5e4e2"], // CSS-style declaration
];

export default function Cchart() {
  return (
    <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
  );
}
