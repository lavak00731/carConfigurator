import { useFetch } from './../service/useFetch';
import CarOptions from "./../components/CarOptions";

export default function CarSelection() {

  const { data, isLoading } = useFetch('http://localhost:5173/api/carmodel');
      
  return (
    <div className="container">
        <header>
            <h1 className="text-center">Welcome to Car Configurator</h1>
        </header>
        <main>     
          <CarOptions data={ data } isLoading={ isLoading }  />
        </main>
    </div>
  )
}
