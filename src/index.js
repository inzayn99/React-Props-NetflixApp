import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import './App';
import "./index.css";



ReactDOM.render(
  <>
  <Card imgsrc="https://wallpapercave.com/w/wp6201564.jpg" 
  title="A Netflix Original Series"  sname="Money Heist"
  link="https://www.netflix.com/np/title/80192098"/>


  <Card imgsrc="https://wallpapercave.com/w/wp6129371.jpg" 
  title="A Netflix Original Series"  sname="Stranger Things"
  link="https://www.netflix.com/np/title/80057281"/>

  <Card imgsrc="https://wallpapercave.com/w/wp5164052.jpg" 
  title="A Netflix Original Series"  sname="Lucifer"
  link="https://www.netflix.com/np/title/80057918"/>
  </>,
  document.getElementById('root')
);

