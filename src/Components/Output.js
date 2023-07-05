import React from 'react'
export default function Output(props) {
  return (
    <div>
      <h3>Welcome {props.username}</h3>
      <button type='button' onClick={props.check}>Back</button>
    </div>
  )
}
