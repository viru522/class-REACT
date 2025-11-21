import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// understanding Virtual and Real DOM
const root1 = document.getElementById('root1'); // RealDOM 
const root2 = ReactDOM.createRoot(document.getElementById('root2')); // VirtualDOM

setInterval(()=>{
  root1.innerHTML = `
  <h2> REAL DOM </h2>
  <pre> ${new Date().toTimeString()}</pre>
  `;
  root2.render(
    <>
    <h2>
      VIRTUAL DOM 
    </h2>
    <pre> {new Date().toTimeString()}</pre>
    </>
  )
},1000);