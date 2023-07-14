import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["id", "childLabel", "parent", "size", { role: "style" }],
  [0, "Btech", -1, 1, "black"],
  [1, "Diploma", 0, 1, "black"],
  [2, "10th", 0, 2, "black"],
  
];

export const options = {
  colors: ["black", "black", "black"],
  wordtree: {
    format: "explicit",
    type: "suffix",
  },
};

export default function Echart() {
  return (
    <Chart
      chartType="WordTree"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
