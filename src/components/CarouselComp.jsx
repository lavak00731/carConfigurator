import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { getFeatures } from '../assets/utilities/utilities';
export default function CarouselComp({ data, selection }) {
      const putColors = (colorRoots, section) => {
        let colors = [];
        colorRoots.map((root) =>{
          console.log(selection[section])
          colors.push(<img key={root} className='color' src={'/src/assets/'+root} alt="" hidden={selection[section]}/>)
        })
        return colors
      }
      const renderColors = (picture) => {        
        const pictureTypes = Object.keys(picture);
        let carSections  = [];
        let colorTypes = [];
        pictureTypes.map((pictureType) => {
          if(pictureType !== "base") {
            carSections.push(pictureType)
          }
        });
        carSections.map((carSection) =>{
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
        <Carousel interval={null}>
            {
              getFeatures(data, getCarouselContent)
            }
        </Carousel>        
    </>
  )
}
