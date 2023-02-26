import React from 'react'

var currDate=new Date(2023,2,24,14);

export default function greet() {
  return (
    <div>
      <h3>Hello Sir {currDate} </h3>
    </div>
  )
}
