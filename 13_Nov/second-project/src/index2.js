import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// creating the React Component

// class Component 

class Component1 extends React.Component{
    render(){
        return React.createElement(
            "h1",
            null,
            React.createElement('span', null, "This is a nested element inside h1 for Class Component")
        );
       
    }
}

// function Component
 function Component2(){
    return React.createElement(
        "h1",
        null,
        React.createElement('span', null, "This is a nested element inside h1 for Function Component")
    );
 }

// JSX - JS XML
// allows HTML inside the JS 
// allows to return the single tag

function Component3(){
    return  <span>
            <h1> Returning JSX</h1>
            </span>;
}

// returning muiltiple elements
function Component4(){
    return <span>
        <h1> First Element</h1>
        <h2> Second Element</h2>
        </span>;
}

function Component5(){
    return <React.Fragment>
        <h1> &lt;React.Fragment &gt;  &lt;/React.Fragment &gt;</h1>
        <h1> First Element</h1>
        <h2> Second Element</h2>
        </React.Fragment>;
}

function Component6(){
    return <>
       <h1>&lt; &gt; &lt; / &gt; </h1>
        <h1> First Element</h1>
        <h2> Second Element</h2>
        </>;
}
const root = ReactDOM.createRoot(document.getElementById('root'));


// root.render(React.createElement(Component1));
// root.render(React.createElement(Component2));
// root.render(React.createElement(Component3));
// root.render(<Component3 />);
// root.render(<Component4 />);
root.render(<Component5 />);
root.render(<Component6 />);
