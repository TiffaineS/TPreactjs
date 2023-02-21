import React, { useContext } from "react";
import { Radar } from "react-chartjs-2";
import { ExempleContext } from "./App";


const RadarChart = () => {
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
        label: 'Graphe 1',
        data: datas,
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
      }]
    };
  
  return (
      <Radar data={data} />
  );
};

export default RadarChart;