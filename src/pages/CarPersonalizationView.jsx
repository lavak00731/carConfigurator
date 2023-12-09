import { useState } from "react";
import { useParams } from "react-router-dom";
import TabsComp from "../components/TabsComp";
import CarouselComp from "../components/CarouselComp";
import { useAppContent } from "../context/AppContext";

export default function CarPersonalizationView({ data }) {
  const { state, updateSelection, updateModel } = useAppContent();
  const { cardata, features, pictures } = data.find(({ id }) => id === carId);
  const [tabSelection, SetTabSelection] = useState("hood");

  const locationAssemble = (state) => {
    let hashString = "";
    for (const key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        hashString = hashString.concat(key + "=" + state[key] + "?");
      }
    }
    return hashString;
  };

  const readHashUrl = () => {
    if (location.hash) {
      const locationParameters = location.hash;
      const locationParamsWithoutHash = locationParameters.split("#");
      const locationParams = locationParamsWithoutHash[1].split("?");
      locationParams.forEach((param, i) => {
        if (i !== locationParams.length - 1) {
          const propAndValues = param.split("=");
          updateSelection({ [propAndValues[0]]: propAndValues[1] });
        }
      });
    }
  };

  const writeUrl = (state) => {
    const hashUrl = locationAssemble(state);
    if (hashUrl !== "#" && hashUrl) {
      window.history.replaceState({}, "", carId);
      location.hash = hashUrl;
    }
  };

  const isNullish = (state) => {
    const stateIsNull = Object.values(state).every((value) => {
      if (value === null) {
        return true;
      }

      return false;
    });
    return stateIsNull;
  };

  const resetFeature = (event) => {
    const item = event.target.dataset.feature;
    if (location.hash !== "") {
      updateSelection({ [item]: null });
      document.querySelector('[name="' + item + '"]').checked = false;
    }
  };

  return (
    <div className="row d-flex">
      <header className="col-12">
        <h1 className="text-center">{cardata["Name"]}</h1>
      </header>
      <div className="col-sm-12 col-lg-8 order-lg-2">
        {/* <CarouselComp
          data={pictures}
          selection={state["selection"]}
          tabSelection={tabSelection}
        /> */}
      </div>
      <div className="col-sm-12 col-lg-4 order-lg-1">
        {/* <TabsComp
          features={features}
          triggerFunc={updateSelection}
          onTab={SetTabSelection}
          resetFeature={resetFeature}
          selection={state["selection"]}
        /> */}
      </div>
    </div>
  );
}
