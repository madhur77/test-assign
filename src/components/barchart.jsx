import React from "react";
import { Chart } from "react-google-charts";
export const data = [
  ["Name", "Volume"],
  ["Naruto", 100000000],
  ["steven", 200000000],
  ["rock", 300000000],
  ["Houston", 400000000],
  ["Paly", 500000000],
];

export const options = {
  title: "Simple bar example",
  chartArea: { width: "50%" },
  hAxis: {
    title: "Total volume",
    minValue: 0,
  },
  vAxis: {
    title: "name",
  },
};

export default function Bar() {
  return (
    <>
      <Chart
        chartType="BarChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </>
  );
}
