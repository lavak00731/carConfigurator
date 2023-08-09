import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Carousel from 'react-bootstrap/Carousel';
import './../styles/personalization.css';

export default function CarPersonalization() {
  const location = useLocation();
  const { cardata, features, pictures } = location.state;
  const [key, setKey] = useState('front');
  const loopColor = (feature) => {
    let colors = [];        
    feature.map( ( {colorId, colorData, colorName } = color  ) => {
      console.log(colorId)
      const btn = <button className='chooseStyle' key={colorId} type="button" style={{backgroundColor: `${colorData}`}}><span>{colorName}</span></button>
      colors.push(btn);
    });

    return colors;
  }
  const getFeatures = (features) => {
    let content = [];
    for (let item in features) {      
      const feature = features[item];
      content.push(<Tab eventKey={ item } key={item} title={ item }>{loopColor(feature)}</Tab>);
    }
    return content
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
              getFeatures(features)
            }
                          
            
          </Tabs>
        </div>
        
      </div>
    </main>
    
  )
}
