import { useLocation } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Carousel from 'react-bootstrap/Carousel';

export default function CarPersonalization() {
  const location = useLocation();
  const { cardata, features, pictures } = location.state;

  const loopColor = (feature) => {
    let colors = [];
    feature.map( ( color ) => {
      const btn = <button key={Date.now()} type="button" style={{backgroundColor: `${color}`}}></button>
      colors.push(btn);
    });

    return colors;
  }
  const getFeatures = (features) => {
    let content = [];
    for (let item in features) {      
      const feature = features[item];
      content.push(<Tab eventKey={ item } title={ item }>{loopColor(feature)}</Tab>);
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
            defaultActiveKey={features['front']}
            id="tabComp"
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
