import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { ExempleContext } from "./App";


const BarChart = () => {
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
      label: 'Graphe 4',
      data: datas,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    };


  return (
    <Bar data={data} />
  );
};

export default BarChart;


