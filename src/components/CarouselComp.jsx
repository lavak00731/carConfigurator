import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";
function CarouselComp({
  data,
  selection,
  tabSelection,
}) {
  const [index, setIndex] = useState(0);

  const viewIndex = (tabSelection) => {
    switch (tabSelection) {
      case "front":
        return 1;
      case "back":
        return 5;
      case "sides":
        return 2;
      case "roof":
        return 4;
      default:
        return 0;
    }
  };

  useEffect(() => {
    if (tabSelection !== localStorage.getItem("carView")) {
      localStorage.setItem("carView", tabSelection);
      setIndex(viewIndex(tabSelection));
    }
    return () => {
      localStorage.removeItem("carView");
    };
  }, [tabSelection]);

  const isHidden = (angle) => {
    return selection[angle.angle] === angle.color;
  };
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
 
  const renderColors = (position, angles) => {
    let colors = [];
    angles.map((angle) =>{
     if(position === angle.position) {
      colors.push(<img key={ angle.id }
      className="color"
      src={"/" + angle.url}
      hidden={!isHidden(angle)}
      />)
      }      
    });
    return colors;
  }

  const getCarouselContent = ({base, angles}) => {
     let items = [];     
      base.map((picture)=>{
        items.push(<Carousel.Item key={picture.id}>
            <figure className="img-wrapper">
              <img
                className="d-block w-100"
                src={"/" + picture.url}
                alt=""
              />
              { renderColors(picture.position, angles) }
            </figure>
          </Carousel.Item>) 
       
      });        
      return items;
 
  };

  return (
    <>
      <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
        { getCarouselContent(data) }
      </Carousel>
    </>
  );
}
export default CarouselComp;
