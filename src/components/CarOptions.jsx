import React from 'react'
import Car from './Car'
export default function CarOptions({data}) {

  if(!data) {
    return (
      <p role="alert">Loading</p>
    )
  }

  return (
    <ul className="d-flex flex-row list-unstyled column-gap-3">
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
