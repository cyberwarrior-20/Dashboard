import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["ReactJs", 11],
  ["Css", 2],
  ["Html", 2],
  ["API", 2],
  ["Python", 7],
];

export const options = {
  title: "My Daily Activities",
};

export default function CCchart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
