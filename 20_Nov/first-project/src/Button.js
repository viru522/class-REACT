import React from 'react'

export default function Button(props) {
  return (
     // state managed by parents -App
   <button onClick={props.onIncrement} > ❤️ </button>
  )
}
