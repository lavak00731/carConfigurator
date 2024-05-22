import { useState, useMemo } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ColorComponent from "../components/ColorComponent";
import { useAppContent } from "../context/AppContext";
import { Link } from "react-router-dom";
import Toast from 'react-bootstrap/Toast';
export default function TabsComp({ features, onTab, selection}) {
  const { updateCarSelections, carSelections, carData} = useAppContent();
  const [key, setKey] = useState("hood");
  const [reset, setReset] = useState({position: null, reset: false});
  const [show, setShow] = useState(false);
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

  const renderColorOptions = (colors, place, carSelections) => {
    let colorPickers = [];
    colors.map((color) =>{
      if(color.position === place) {
        const colorSwatch = ColorComponent(color, reset, carSelections)
        colorPickers.push(colorSwatch);
      }  
    });
    return colorPickers;  
  };
 
  const renderTabs = (carSelections) => {
    const tabs = [];
    features.tabs.map(({tabId, tabName}, i) => {
      const tabElem = <Tab key={ tabId } eventKey={tabName} title={tabName}>
        <fieldset>
          <legend>Pick a Color for <span>{ tabName }</span></legend>
          <div className="option-wrapper">
              {renderColorOptions(features.colors, tabName, carSelections)}
          </div>
        </fieldset>
        <div className="mb-3">
          <button className="btn btn-primary" onClick={()=>{          
            updateCarSelections(sendData(tabName));
          }} >Get Color <span className="visually-hidden">for {tabName}</span></button>
          <button className="btn btn-secondary" onClick={()=>{          
            updateCarSelections(resetData(tabName));
          }} >Reset</button>
        </div>
        <div className="mb-3">
        <Link to={`/preview`} onClick={(e) => abortGoing(e) } className="btn btn-dark">Preview Your Selection &#x2c3;<span className="visually-hidden">{carData.cardata['Name']}</span></Link>
        </div>
        <Toast onClose={() => setShow(false)} show={show} delay={7000} autohide>
          <Toast.Header>
            <strong className="me-auto">Attention</strong>
          </Toast.Header>
          <Toast.Body>Please choose a color to go to the next step</Toast.Body>
        </Toast>       
      </Tab>
        tabs.push(tabElem);
    });
    return tabs;
  };

  const abortGoing = (e) => {
    if(Object.values(carSelections).every( x => x === null)) {
      e.preventDefault();
      setShow(true);
    }
  }

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
        renderTabs(carSelections)
      }      
    </Tabs>
  );
}
