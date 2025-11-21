import { useState } from "react";
import Button from "./Button";
import Display from "./Display";

function App() {
  const [count, setCount] = useState(0); 
  const updateCount = ()=>{
    setCount(count+1);
  }
  return (<>
  <h3>App component managing the count state</h3>

 <Button onIncrement={updateCount} />  
 <Display countVal={count} />

  </>);
}

export default App;
