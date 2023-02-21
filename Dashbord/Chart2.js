import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { ExempleContext } from "./App";


const DoughnutChart = () => {
  const {tab2} = useContext(ExempleContext);

  let labels = [];
  for(let i=0 ; i<tab2.points.length ; i++){
    labels.push(tab2.points[i].point1);
  };

  let datas = [];
  for(let i=0 ; i<tab2.points.length ; i++){
    datas.push(tab2.points[i].point2);
  };

const data = {
    labels: labels,
    datasets: [{
      label: 'Graphe 2',
      data: datas,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ],
      hoverOffset: 4
    }]
  };

  return (
      <Doughnut data={data} />
  );
};

export default DoughnutChart;
