import { useEffect, useState } from "react"
import { useData } from './service/useData';
export const CarConfig = () => {
  const [options, setOptions] = useState([]);
 
      const carData = useData('https://carconfigurator.free.beeceptor.com/carconfig')
    console.log(carData)
            

  return (
    <div className="container">
        <header>
            <h1>Welcome to Car Configurator</h1>
        </header>
        <main>
          <ul>
            {
            // /*   options.map((data) => (
            //     <li key={data.id}></li>
            //   )) */
            }
          </ul>
        </main>
    </div>
  )
}
