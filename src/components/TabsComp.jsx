import { useState, useMemo } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ColorComponent from "../components/ColorComponent";
import { useAppContent } from "../context/AppContext";
export default function TabsComp({ features, onTab, selection}) {
  const { updateCarSelections } = useAppContent();
  const [key, setKey] = useState("hood");
  const [carPosition, setCarPosition] = useState('');
  const [colorSelected, setColorSelected] = useState('');
  const handleSelection = (k) => {
    setKey(k);
  };

  const selectColor = (event) => {
    setCarPosition(event.target.name); 
    setColorSelected(event.target.value);
  }
  const sendData = () => {
    selection[carPosition] = colorSelected;
    return selection;
  }

  const renderColorOptions = (colors, place) => {
    let colorPickers = [];
    colors.map((color) =>{
      if(color.position === place) {
        const colorSwatch = ColorComponent(color, selectColor)
        colorPickers.push(colorSwatch);
      }  
    });
    return colorPickers;  
  };

 
  const renderTabs = () => {
    const tabs = [];
    features.tabs.map((tab) => {
      const tabElem = <Tab key={ tab.tabId } eventKey={tab.tabName} title={tab.tabName}>
        <fieldset>
          <legend>Pick a Color for <span>{ tab.tabName }</span></legend>
          <div className="option-wrapper">
              {renderColorOptions(features.colors, tab.tabName)}
          </div>
        </fieldset>
        <button className="btn btn-primary" onClick={(carPosition, colorSelected)=>{          
          updateCarSelections(sendData());
        }} >Get Color <span className="visually-hidden">for {tab.tabName}</span></button>
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
