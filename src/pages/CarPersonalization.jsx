import { useState, useEffect } from "react";
import { useAppContent } from "../context/AppContext";
import { ShareBtns } from "../components/ShareBtns";
import CarouselComp from "../components/CarouselComp";
import TabsComp from "../components/TabsComp";
import { useSearchParams, useLocation} from "react-router-dom";
import "./../styles/personalization.css";

export default function CarPersonalization() {

  const { carData, carSelections, isLoading, updateCarSelections } = useAppContent();
  const [ tabSelection, setTabSelection ] = useState("hood");
  const [ searchParams, setSearchParams ] = useSearchParams();
  const [ flag, setFlag ] = useState(true);  
  const location = window.location.href;
  const locationRead = useLocation();
  const paramsCreator = (carSelections) => {
    const parameters = {};
    for (const carKey in carSelections) {
      if(carSelections[carKey]){
        parameters[carKey] = carSelections[carKey];
      }
    }
    return parameters;
  } 
  const updateFromUrl = (searchParams) => {
    const filteredParams = searchParams.slice(1).split('&');
    console.log(filteredParams)
    let payload;
    filteredParams.forEach(param => {
      const payload =  param.split('=');
      carSelections[payload[0]] = payload[1];
      updateCarSelections(carSelections)
    })
    
  }

  useEffect(() =>{  
    if(flag && locationRead.search !== "")  {
      //updateCarSelections(locationRead.search);
      updateFromUrl(locationRead.search);
      
    }
    setFlag(false);
    const params = paramsCreator(carSelections);
    setSearchParams(params);  

  }, [carSelections, searchParams, flag])

  if (!carData || isLoading) {
    return <p role="alert">Loading</p>;
  }  

  return (
    <main className="container">
      <div className="row d-flex">
        <header className="col-12">
          <h1 className="text-center">{carData.cardata["Name"]}</h1>
        </header>

        <div className="col-sm-12 col-lg-8 order-lg-2">
          <CarouselComp
            data={carData.pictures}
            selection={carSelections}
            tabSelection={tabSelection}
          /> 
        </div>

        <div className="col-sm-12 col-lg-4 order-lg-1">
          <TabsComp
            features={carData.features}
            onTab={setTabSelection}
            selection={carSelections}
          />
        </div>
        <ShareBtns location={location} />
      </div>
    </main>
  );
}
