import React from 'react'

const Band = props => {
  return (
    <li>
      <span>{props.name}</span>
      <button onClick={() => props.deleteBand(props.id)}>DELETE</button>
    </li>
  )
};

export default Band;