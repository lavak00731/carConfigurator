import { useLocation } from 'react-router-dom';
import { useState, useReducer } from 'react';
import ColorComponent from './ColorComponent';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Carousel from 'react-bootstrap/Carousel';
import './../styles/personalization.css';

export default function CarPersonalization() {
  const location = useLocation();
  const { cardata, features, pictures } = location.state;
  const [ key, setKey ] = useState('front');
  let initialState = {};
  const getFeatures = (features, fn) => {
    let content = [];
    for (let item in features) {      
      const feature = features[item];
      content.push(fn(item, feature));
    } 
    return content
  }
  const getTabContent = (item, feature) => {
    return <Tab eventKey={ item } key={item} title={ item }><fieldset><legend>Choose a color for <span>{item}</span></legend><div className="color-container">{loopColor(feature, item)}</div></fieldset></Tab>;
  }
  const buildInitValue = (colorId) => {
   console.log(features);
  }
  const updateSelection = (state, action) => {
    if(action.type === 'updateSelection') {

      return {
        ...state,
   
      }
    }
  }

  const [ state, dispatch ] = useReducer(updateSelection, initialState, buildInitValue);

  const loopColor = (feature, item) => {
    let colors = [];        
    feature.map( ( {colorId, colorData, colorName } = color  ) => {
      const btn = <ColorComponent key={colorId} colorId={colorId} colorData={colorData} colorName={colorName} feature={item} />
      colors.push(btn);
    });
    return colors;
  }
  

  return (
    <main className="container">
      <div className="row d-flex">
        <header className="col-12">
          <h1 className="text-center">{ cardata['Name'] }</h1>
        </header>
        <div className="col-sm-12 col-lg-8 order-lg-2">cArousel</div>
        <div className="col-sm-12 col-lg-4 order-lg-1">
          <Tabs
            did="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            {
              getFeatures(features, getTabContent)
            }
                          
            
          </Tabs>
        </div>
        
      </div>
    </main>
    
  )
}
