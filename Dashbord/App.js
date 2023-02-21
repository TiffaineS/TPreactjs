import '../styles/App.css';
import 'chart.js/auto';
import React from 'react';
import BarChart from './Chart4';
import LineChart from './Chart5';
import DoughnutChart from './Chart2';
import PolarAreaChart from './Chart3';
import RadarChart from './Chart1';

import { createContext, useState } from 'react';

export const ExempleContext = createContext();

function App() {

  const [myArray, setMyArray] = useState([{point1:"January",point2:"65"},
                                          {point1:"February",point2:"59"},
                                          {point1:"March",point2:"80"},
                                          {point1:"April",point2:"81"},
                                          {point1:"May",point2:"56"},
                                          {point1:"June",point2:"55"},
                                          {point1:"July",point2:"40"}]);
  

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  

  const tableau = { tab: { points: myArray, newpoint: {point1: value1, point2: value2}}};


  const [myArray2, setMyArray2] = useState([{point1:"January",point2:"11"},
                                            {point1:"February",point2:"5"},
                                            {point1:"March",point2:"25"}]);

                                            
  const tableau2 = { tab2: { points: myArray2, newpoint: {point1:value1,point2:value2}}};

  
  const addValue = () => {
    setMyArray([...myArray, {point1:value1, point2:value2}]);
    setMyArray2([...myArray2, {point1:value1, point2:value2}]);
    reset();
  };


  function reset() {
    setValue1("");
    setValue2("");
    setIndex("");
    setNumber("");
  };


  
  const [index, setIndex] = useState("");
  const [number, setNumber] = useState("");

  const changeValue = () => {
    myArray.splice(index,number,{point1:value1,point2:value2});
    setMyArray([...myArray]);
    myArray2.splice(index,number,{point1:value1,point2:value2});
    setMyArray2([...myArray2]);
    reset();
  };

  const suppValue = () => {
    myArray.pop();
    setMyArray([...myArray]);
    myArray2.pop();
    setMyArray2([...myArray2]);
    reset();
  };

  return (
    
    <div className="App">
      <header id="header" className="App-header">
        <h1>DASHBORD</h1>
          <div id="graphes">
            <div id="part1">
            <ExempleContext.Provider value={tableau2}>
              <div><RadarChart /></div>
              <div><DoughnutChart /></div>
              <div><PolarAreaChart /></div>
            </ExempleContext.Provider>
            </div>
            <div id="part2">
            <ExempleContext.Provider value={tableau}>
              <div><BarChart /></div>
              <div><LineChart /></div>
              </ExempleContext.Provider>
            </div>
          </div>
          <div>
            <p></p>
            <input type="text" placeholder="Valeur 1 (label)" value={value1} onChange={e => setValue1(e.target.value)}/>
            <input type="text" placeholder="Valeur 2 (data)" value={value2} onChange={e => setValue2(e.target.value)}/>
            <button onClick={addValue}>Ajouter une valeur</button>
            <br></br>
            <input type="text" placeholder="Index à modifier" value={index} onChange={e => setIndex(e.target.value)}/>
            <input type="text" placeholder="Nombre de valeur à retirer" value={number} onChange={e => setNumber(e.target.value)}/>
            <br></br>
            <button onClick={changeValue}>Modifier une valeur et possibilité de remplacer/enlever des valeurs</button>
            <br></br>
            <button onClick={suppValue}>Supprimer la dernière valeur des graphiques</button>
          </div>
      </header>
    </div>
    
  );
}


export default App;


