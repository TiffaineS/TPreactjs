import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import { ExempleContext } from "./App";


const LineChart = () => {
  const {tab} = useContext(ExempleContext);

  console.log(tab);

  let labels = [];
  for(let i=0 ; i<tab.points.length ; i++){
    labels.push(tab.points[i].point1);
  };

  let datas = [];
  for(let i=0 ; i<tab.points.length ; i++){
    datas.push(tab.points[i].point2);
  };

  console.log(tab);

const data = {
    labels: labels,
    datasets: [{
      label: 'Graphe 5',
      data: datas,
      borderColor: 'rgb(75, 192, 192)',
    }]
};
  return (
      <Line data={data} />
  );
};

export default LineChart;
