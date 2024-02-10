import { useState, useMemo } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ColorComponent from "../components/ColorComponent";
import { useAppContent } from "../context/AppContext";
export default function TabsComp({ features, onTab, resetFeature, selection }) {
  const { updateSelection } = useAppContent();
  const [key, setKey] = useState("hood");
  const handleSelection = (k) => {
    setKey(k);
  };

  const renderColorOptions = (colors, place) => {
    let colorPickers = [];
    colors.map((color) =>{
      if(color.position === place) {
        const colorSwatch = ColorComponent(color)
        colorPickers.push(colorSwatch);
      }  
    });
    return colorPickers;  
  };


  const renderTabs = () => {
    const tabs = [];
    features.tabs.map((tab) => {
      const tabElem = <Tab key={tab} eventKey={tab} title={tab}>
        <fieldset>
          <legend>Pick a Color for <span>{ tab }</span></legend>
          <div className="option-wrapper">
              {renderColorOptions(features.colors, tab)}
          </div>
        </fieldset>
        <button className="btn btn-primary" onClick={(e)=>{
          updateSelection({ [e.target.name]: e.target.value });
        }} >Get Color <span className="visually-hidden">for {tab}</span></button>
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
