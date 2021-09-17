import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import './App';
import "./index.css";
import Sdata from "./Sdata";

// console.log(Sdata[0].sname);



ReactDOM.render(
  <>
  <h1 className="heading_style">List Of Top 4 Netflix Series in 2021</h1>

  <Card 
  imgsrc={Sdata[0].imgsrc}
  title={Sdata[0].title}
  sname={Sdata[0].sname}
  link={Sdata[0].link} 
  />

  <Card 
  imgsrc={Sdata[1].imgsrc}
  title={Sdata[1].title}
  sname={Sdata[1].sname}
  link={Sdata[1].link} 
  />
  <Card 
  imgsrc={Sdata[2].imgsrc}
  title={Sdata[2].title}
  sname={Sdata[2].sname}
  link={Sdata[2].link} 
  />
  <Card 
  imgsrc={Sdata[3].imgsrc}
  title={Sdata[3].title}
  sname={Sdata[3].sname}
  link={Sdata[3].link} 
  />

  </>,
  document.getElementById('root')
);

