import { useState, memo } from "react";

const ColorComponent = memo(function ColorComponent({colorData, colorId, colorName, isChecked, position}, selectColor) {
  const [checked, setChecked] = useState(isChecked)
  return (
    <div className="input-wrapper">
      <input
        className="visually-hidden"
        type="radio"
        id={ colorId }
        name={ position }
        value={ colorName }
        checked={ checked }
        onChange={(e) => { setChecked(!checked); selectColor(e) }}
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
});

export default ColorComponent;
