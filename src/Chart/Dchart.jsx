import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Work", "Practice"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];


export default function Dchart() {
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      data={data}
    />
  );
}
