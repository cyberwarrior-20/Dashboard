import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Skill", "Practice", "Work"],
  ["2020", 1000, 400, 200],
  ["2021", 1170, 600, 300],
  ["2022", 660, 1120, 300],
  ["2023", 1030, 1000, 1200],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Work, Skill, and Practice: 2020-2023",
  },
};

export default function BarChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
