import React from 'react'
import Car from './Car'
export default function CarOptions( { data, isLoading } ) {
  if(!isLoading) {
    return (
      <p role="alert">Loading</p>
    )
  }

  return (
    <ul className="d-flex flex-row list-unstyled column-gap-3">
      {
        data.map((datum) => (         
          <li key={datum['id']}>
            <Car data={datum}/>
          </li>
        )) 
      }
    </ul>
  )
}
