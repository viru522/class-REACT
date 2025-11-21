import React from 'react';
import './Welcome.css';
export default function Welcome() {
    const username ="Virendra Kanojiya";
  return (
   <>
   <h1 className='col-6 border border-primary rounded-3'>This is h1 class</h1>
   <h2>
    Welcome { username } to ReactJS Course
   </h2>
   <span>Enjoy the Learning</span>
   <button className= 'btn'><a href='https://www.google.com'>Click Me</a></button>
   <img className='imgReact' src='./logo192.png' alt='React Logo'/>
   </>
  )
}
