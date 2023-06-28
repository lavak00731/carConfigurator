import React from 'react'

export default function Car({cardata}) {
  return (
    <div className="card">
        <img src={'/src/assets/'+cardata['picture']} className="card-img-top" alt={cardata['Name']}/>
        <div className="card-body">
            <h5 className="card-title">{cardata['Name']}</h5>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
            </ul>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  )
}
