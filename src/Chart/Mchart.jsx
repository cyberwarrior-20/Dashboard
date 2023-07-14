import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Work", "Experience"],
  ["2020", 1000, 400],
  ["2021", 1170, 460],
  ["2022", 660, 1120],
  ["2023", 1030, 540],
];

export const options = {
  title: "Monthly Performance",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "50%", height: "70%" },
};

export default function Mchart() {
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
