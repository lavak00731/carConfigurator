import { useState } from "react";
import { useAppContent } from "../context/AppContext";
import CarouselComp from "../components/CarouselComp";
import TabsComp from "../components/TabsComp";
import "./../styles/personalization.css";

export default function CarPersonalization() {
  const { carData, isLoading } = useAppContent();
  const [tabSelection, setTabSelection] = useState("hood");

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
          {/* <CarouselComp
            data={carData.pictures}
            selection={state["selection"]}
            tabSelection={tabSelection}
          /> */}
        </div>

        <div className="col-sm-12 col-lg-4 order-lg-1">
          {/* <TabsComp
            features={carData.features}
            onTab={setTabSelection}
            resetFeature={resetFeature}
            selection={state["selection"]}
          /> */}
        </div>
      </div>
    </main>
  );
}
