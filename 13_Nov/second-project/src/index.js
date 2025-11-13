import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';



function Button(){
    return <button> Click Me </button>;
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Button />);