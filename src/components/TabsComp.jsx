import { useState, useMemo } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { getFeatures } from '../assets/utilities/utilities';
import ColorComponent from '../components/ColorComponent';
export default function TabsComp({ features, triggerFunc, onTab }) {
    const [ key, setKey ] = useState('hood');
    const handleSelection = (k) => {
        setKey(k);
    }
    const getTabContent = (item, feature) => {
        return <Tab eventKey={ item } key={item} title={ item }><fieldset><legend>Choose a color for <span>{item}</span></legend><div className="color-container">{loopColor(feature, item)}</div></fieldset></Tab>;
    }
    
    const loopColor = (feature, item) => {
        let colors = [];        
        feature.map( ( {colorId, colorData, colorName } = color  ) => {
            const btn = <ColorComponent key={colorId} colorId={colorId} colorData={colorData} colorName={colorName} feature={item} triggerFunc={triggerFunc} />
            colors.push(btn);
        });    
        return colors;
    }   

    const renderTabs = useMemo(() => getFeatures(features, getTabContent), [ features ]);
  return (
    <Tabs
        did="controlled-tab-example"
        activeKey={key}
        onSelect={ (k) => { handleSelection(k); onTab(k) } }
        className="mb-3"
        fill
        >
        {
            renderTabs
        }
    </Tabs>
  )
}
