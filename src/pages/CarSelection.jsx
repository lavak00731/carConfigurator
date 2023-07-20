import { useData } from './../service/useData';
import CarOptions from "./../components/CarOptions";

export default function CarSelection() {

  const { data } = useData('http://localhost:5173/api/carmodel');
        
return (
  <div className="container">
      <header>
          <h1 className="text-center">Welcome to Car Configurator</h1>
      </header>
      <main>     
        <CarOptions data={ data }  />
      </main>
  </div>
)
}
