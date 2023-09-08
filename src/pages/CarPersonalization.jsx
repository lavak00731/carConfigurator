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
    return initialState = {
      back: null,
      front: null,
      hood: null,
      roof: null, 
      sides: null
    }
  }
  const updateSelection = (state, action) => {
    if(action.type === 'updateSelection') {  
      switch (action.position) {
        case "back":
          return {
            ...state,
            back: action.value
          }
        case "front":
          return {
            ...state,
            front: action.value
          }
        case "hood":
          return {
            ...state,
            hood: action.value
          }          
        case "roof":
          return {
            ...state,
            roof: action.value
          }
        case "sides":
          return {
            ...state,
            sides: action.value
          }
        default:
          break;
      }        
    }
  }

  const [ state, dispatch ] = useReducer(updateSelection, initialState, buildInitValue);

  const collectorFunc = (event) => {
    dispatch({type: 'updateSelection', position: event.target.name, value: event.target.value})
  }

  const loopColor = (feature, item) => {
    let colors = [];        
    feature.map( ( {colorId, colorData, colorName } = color  ) => {
      const btn = <ColorComponent key={colorId} colorId={colorId} colorData={colorData} colorName={colorName} feature={item} parentCallBack={collectorFunc}/>
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
