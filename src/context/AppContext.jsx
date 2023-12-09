import { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { carId } = useParams();
  const [ originalData, setOriginalData ] = useState({})
  const [carData, setCarData] = useState(null);
  const [carSelections, setCarSelections] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  function updateCarSelections(payload) {
    setCarSelections((prev) => ({ ...prev, ...payload }));
  }

  useEffect(() => {
    const abortController = new AbortController();

    setIsLoading(true);

    fetch("http://localhost:5173/mock/carmodel.json", {
      signal: abortController.signal,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (!data) throw new Error("Could not fetch any data");
        setOriginalData(data) 
        const selectedCar = (data ?? []).find(
          (car) => String(car.id) === String(carId)
        );

        if (selectedCar) {
          setCarData(selectedCar);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        // console.log(error);
        setIsLoading(false);
      });

    return () => {
      abortController.abort();
    };
  }, [carId]);

  return (
    <AppContext.Provider
      value={{
        originalData,
        carData,
        carSelections,
        updateCarSelections,
        isLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useAppContent() {
  const context = useContext(AppContext);

  if (!context) throw new Error("useAppContent must be used within AppContext");

  return context;
}
