import CarOptions from "./../components/CarOptions";
import { useAppContent } from "../context/AppContext";

export default function CarSelection() {
    const { originalData, isLoading } = useAppContent();
    if(isLoading && Object.keys(originalData)) {
      return (
        <p role="alert">Loading</p>
      )
    }
  return (
    <div className="container">
        <header>
            <h1 className="text-center">Welcome to Car Configurator</h1>
        </header>
        <main>     
          {<CarOptions data={ originalData } isLoading={ isLoading }  />}
        </main>
    </div>
  )
}
