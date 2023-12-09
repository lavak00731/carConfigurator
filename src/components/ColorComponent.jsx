import { useState, useEffect } from "react";
import { useAppContent } from "../context/AppContext";

function ColorComponent({ colorId, colorData, colorName, feature, selection }) {
  const { updateSelection } = useAppContent();

  return (
    <div className="input-wrapper">
      <input
        className="visually-hidden"
        type="radio"
        id={colorId}
        name={feature}
        value={colorName}
        onChange={(e) => {
          updateSelection({ [e.target.name]: e.target.value });
        }}
      />
      <label
        htmlFor={colorId}
        className="chooseStyle"
        style={{ backgroundColor: `${colorData}` }}
      >
        <span>{colorName}</span>
      </label>
    </div>
  );
}

export default ColorComponent;
