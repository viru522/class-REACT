import React, { useState } from 'react'
export default function Button() {
//   let count = 0;
//   const clickHandler = () => {
//     console.log("button");
//     count++;
//     console.log(`count is: ${count}`);
//   };
//   return <button onClick={clickHandler}> {count}</button>;

// hooks / lifecycle hooks : special methods of react used for managing the react lifecycle 
// useState() - state management


// syntax 
// const [state, setState] = useState(default value);
const [count, setCount] = useState(0); // we will defining a state with a default value 
  const clickHandler = ()=>{
    // count++; do not update the state directly, use setCount 
    setCount(count+1); // setCount will update the count, makes the change in VirtualDOM
    // then. react compares Real and Virtual DOM, updates the count in UI
    console.log(count);
    
  }
 return( <button onClick={clickHandler}>{count}</button>) 
}
