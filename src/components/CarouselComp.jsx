import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { useState, memo } from 'react';
import { getFeatures } from '../assets/utilities/utilities';
function CarouselComp({ data, selection, tabSelection }) {
      const [index, setIndex] = useState(0);

      const isHidden = (selection, root) => {   
        return selection[Object.keys(root)[1]] === Object.values(root)[1] 
      }
      
      const viewIndex = (tabSelection) => {
        switch (tabSelection) {
          case 'front':
            return 2;
          case 'back':
            return 1;
          case 'sides':
            return 3;
          case 'roof':
            return 5
          default:
            return 0;
        }
      }

      if( viewIndex(tabSelection) !== index && index !==  localStorage.getItem('carView') ) {
        localStorage.setItem('carView', viewIndex(tabSelection));
        setIndex(viewIndex(tabSelection));
      }

       
      const putColors = (colorRoots) => {
        let colors = [];
        colorRoots.map((root) => {
          colors.push(<img key={root.url} className='color' src={'/src/assets/'+root.url} alt="" hidden={!isHidden(selection, root)}/>)
        })
        return colors
      }
      
      const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
       };
      const renderColors = (picture) => {
        const pictureTypes = Object.keys(picture);
        let carSections  = [];
        let colorTypes = [];
        pictureTypes.map((pictureType) => {
          if(pictureType !== "base") {
            carSections.push(pictureType)
          }
        });
        carSections.map((carSection) => {
          colorTypes.push(putColors(picture[carSection], carSection))
        })
        return colorTypes;
    }
      const getCarouselContent = (item, picture) => {
        return <Carousel.Item key={item}>
            <figure className="img-wrapper">
                <img className="d-block w-100" src={'/src/assets/'+picture.base} alt=""/>
                {
                  renderColors(picture, item)
                }
            </figure>
        </Carousel.Item>
      }
   
      
   
  return (
    <>
        <Carousel interval={null} activeIndex={index} onSelect={  handleSelect }>
            {
              getFeatures( data, getCarouselContent )
            }
        </Carousel>        
    </>
  )
}
export default React.memo(CarouselComp);