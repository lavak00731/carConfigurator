import { useEffect, useState } from "react"
import { useData } from './service/useData';
import CarOptions from "./components/CarOptions";
export const CarConfig = () => {
  const [options, setOptions] = useState([]);
 
  const { data } = useData('https://carconfigurator.free.beeceptor.com/carconfig')           

  return (
    <div className="container">
        <header>
            <h1 className="text-center">Welcome to Car Configurator</h1>
        </header>
        <main>     
          <CarOptions data={ data } />
        </main>
    </div>
  )
}
