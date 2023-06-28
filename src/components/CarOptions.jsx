import React from 'react'
import Car from './Car'
export default function CarOptions({data}) {

  if(!data) {
    return (
      <p role="alert">Loading</p>
    )
  }

  return (
    <ul className="">
      {
        data.map(({id, cardata}) => (
          <li key={id}>
            <Car cardata={cardata}/>
          </li>
        )) 
      }
    </ul>
  )
}
