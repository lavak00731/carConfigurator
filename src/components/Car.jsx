import { Link } from "react-router-dom";

export default function Car({data: {id, cardata, features, pictures}}) {
  return (
    <div className="card">
        <img src={'/src/assets/'+cardata['picture']} className="card-img-top" alt={cardata['Name']}/>
        <div className="card-body">
            <h2 className="card-title ps-3">{cardata['Name']}</h2>
            <ul className="list-group list-group-flush">              
                <li className="list-group-item"><strong>Miles per Gallon:</strong> {cardata['Miles_per_Gallon']}</li>                
                <li className="list-group-item"><strong>Cylinders:</strong> {cardata['Cylinders']}</li>
                <li className="list-group-item"><strong>Horsepower:</strong> {cardata['Horsepower']}</li>
                <li className="list-group-item"><strong>Weight in lbs:</strong> {cardata['Weight_in_lbs']}</li>
                <li className="list-group-item"><strong>Acceleration:</strong> {cardata['Acceleration']}</li>
                <li className="list-group-item"><strong>Year:</strong> {cardata['Year']}</li>
                <li className="list-group-item"><strong>Origin:</strong> {cardata['Origin']}</li>
            </ul>
            <div className="card-footer">
              <Link to={`/${id}`} className="btn btn-primary">Select car <span className="visually-hidden">{cardata['Name']}</span></Link>
            </div>
        </div>
    </div>
  )
}
