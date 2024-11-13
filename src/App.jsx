import './App.css'
import React, { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('white');
  const handleClickFunction = (e) => {
    const body = document.querySelector("body");
    body.style.background = getRandomColor();
    e.target.style.backgroundColor = getRandomColor();
  };

  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const changeColor = (color) => {
    setBgColor(color);
  }

  return (
    <>
      <div style={{minHeight:'100vh'}} className='d-flex flex-column justify-content-center align-items-center'>
        <div id="changeColor" style={{backgroundColor: bgColor}}>
          <h1 className='p-2 border border-light' >Click To Change Background Color</h1>
          <div>
            <button className="btn" onClick={() => changeColor('rgb(89, 199, 199)')} style={{backgroundColor:"rgb(89, 199, 199)"}}></button>
            <button className="btn" onClick={() => changeColor('palevioletred')} style={{backgroundColor:"palevioletred"}}></button>
            <button className="btn" onClick={() => changeColor('green')} style={{backgroundColor:"green"}}></button>
            <button className="btn" onClick={() => changeColor('wheat')} style={{backgroundColor:"wheat"}}></button>
            <button className="btn" onClick={() => changeColor('rgb(212, 16, 16)')} style={{backgroundColor:"rgb(212, 16, 16)"}}></button>
          </div>
          <button className="btn p-2 fs-5" onClick={handleClickFunction} style={{width:'330px'}}>Random Color</button>
        </div>
      </div>
    </>
  )
}

export default App