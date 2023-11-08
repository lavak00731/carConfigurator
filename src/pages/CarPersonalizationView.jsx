import { useState, useReducer, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TabsComp from '../components/TabsComp';
import CarouselComp from '../components/CarouselComp';

export default function CarPersonalizationView({data}) {
  const { carId } = useParams();
  
  const { cardata, features, pictures } = data.find( ({ id }) => id === carId );
  const [tabSelection, SetTabSelection] = useState('hood');

  let initialState = {};
  
  const buildInitValue = () => {
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
    dispatch({type: 'updateSelection', position: event.target.name, value: event.target.value});
  }  

  const locationAssemble = (state) => {
    let hashString = "";
    for (const key in state) {
      if(state.hasOwnProperty(key) && state[key]) {
        hashString = hashString.concat(key+'='+state[key]+'?');
      }
    }
    return hashString
  }

  const writeUrl = (state) => {          
      const hashUrl = locationAssemble(state);
      if(hashUrl !== '#' && hashUrl) {
          window.history.replaceState({},"" ,carId) 
          location.hash = hashUrl;          
      } 
  }
  useEffect(() => {
    writeUrl(state)    
  }, [state]); 

  return (
      <div className="row d-flex">
        <header className="col-12">
          <h1 className="text-center">{ cardata['Name'] }</h1>
        </header>
        <div className="col-sm-12 col-lg-8 order-lg-2">
          <CarouselComp data={ pictures } selection={ state } tabSelection={ tabSelection }/>
        </div>
        <div className="col-sm-12 col-lg-4 order-lg-1">
          <TabsComp features={ features } triggerFunc={ collectorFunc } onTab={ SetTabSelection }/>
        </div>        
      </div>
  )
}
