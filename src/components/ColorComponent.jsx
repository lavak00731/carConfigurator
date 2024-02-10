import { useState } from "react";

function ColorComponent({colorData, colorId, colorName, isChecked, position}) {
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
        onChange={() => setChecked(!checked) }
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
