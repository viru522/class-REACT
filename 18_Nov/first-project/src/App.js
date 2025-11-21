import React from 'react'
import Button from './Button';
import Dispaly from './Dispaly';
export default function App() {
  return (
    <>
    <div>App</div>
    <Button />
    <Dispaly  username="Monika" age="20"/>
    {/* we are sending JSON object to the Display component
      props ={
       "username":"Monika",
       "age":"20"
      }
     */}
    <Dispaly username="Sahil" />
    <Dispaly username="Sagar" dob="10 jan 2005 " />
    </>
  )
}