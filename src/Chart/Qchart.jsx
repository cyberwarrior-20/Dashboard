import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Quiz", "Popularity"],
  ["Reactjs", 33],
  ["Python", 26],
  ["Html", 22],

];



export default function Qchart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      width={"100%"}
      height={"400px"}
    />
  );
}
