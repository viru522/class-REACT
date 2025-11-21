import React from 'react'

export default function Dispaly(props) {
    console.log(props);
    
  return (
        <h3> Welcome to {props.username} to React </h3>
  )
}
