import { useState, useMemo } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ColorComponent from "../components/ColorComponent";
import { useAppContent } from "../context/AppContext";
export default function TabsComp({ features, onTab, selection}) {
  const { updateCarSelections } = useAppContent();
  const [key, setKey] = useState("hood");
  const [reset, setReset] = useState({position: null, reset: false});
  const handleSelection = (k) => {
    setKey(k);
  };

  const carPosition = tabName => {
    const elem = document.querySelector('.active input[name="'+tabName+'"]:checked')
      if(elem) {
        return elem.name
      }
    }
  const colorSelected = tabName => document.querySelector('.active input[name="'+tabName+'"]:checked').value

  const sendData = (tabName) => {
    const carPositionValue = carPosition(tabName);
    if(carPositionValue && carPositionValue === tabName) {
      selection[tabName] = colorSelected(tabName);
      return selection;
    }
  }

  const resetData = (tabName) => {
    const carPositionValue = carPosition(tabName);
    if(carPositionValue === tabName) {
      selection[tabName] = null;
      setReset({position: tabName, reset: true});
      return selection;
    }
  }

  const renderColorOptions = (colors, place) => {
    let colorPickers = [];
    colors.map((color) =>{
      if(color.position === place) {
        const colorSwatch = ColorComponent(color, reset)
        colorPickers.push(colorSwatch);
      }  
    });
    return colorPickers;  
  };

 
  const renderTabs = () => {
    const tabs = [];
    features.tabs.map(({tabId, tabName}) => {
      const tabElem = <Tab key={ tabId } eventKey={tabName} title={tabName}>
        <fieldset>
          <legend>Pick a Color for <span>{ tabName }</span></legend>
          <div className="option-wrapper">
              {renderColorOptions(features.colors, tabName)}
          </div>
        </fieldset>
        <button className="btn btn-primary" onClick={()=>{          
          updateCarSelections(sendData(tabName));
        }} >Get Color <span className="visually-hidden">for {tabName}</span></button>
        <button className="btn btn-secondary" onClick={()=>{          
          updateCarSelections(resetData(tabName));
        }} >Reset</button>
      </Tab>
        tabs.push(tabElem);
    });
    return tabs;
  };

  return (
    <Tabs
      did="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => {
        handleSelection(k);
        onTab(k);
      }}
      className="mb-3"
      fill
    >
      {
        renderTabs()
      }
    </Tabs>
  );
}
