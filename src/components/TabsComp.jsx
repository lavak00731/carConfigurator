import { useState, useMemo } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ColorComponent from "../components/ColorComponent";
export default function TabsComp({ features, onTab, resetFeature, selection }) {
  const [key, setKey] = useState("hood");
  const handleSelection = (k) => {
    setKey(k);
  };

  

  const renderTabs = () => {
    const tabs = [];
    const tabsName = [];
    features.map(({position, colorId, colorName, colorData, isChecked}) =>{
      if(!tabsName.includes(position)) {
      const tab = <Tab key={position} eventKey={position} title={position}>
        Tab content for {position}
      </Tab>
        tabsName.push(position);
        tabs.push(tab);
      }
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
