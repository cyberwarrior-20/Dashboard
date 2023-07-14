import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Reactjs", 11],
  ["HTML", 2],
  ["Css", 2],
  ["ApI", 2],
  ["Python", 7], // CSS-style declaration
];

export const options = {
  pieHole: 0.4,
  is3D: false,
};

export default function Schart() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
