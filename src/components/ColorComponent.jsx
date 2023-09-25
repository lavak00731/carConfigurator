
function ColorComponent({colorId, colorData, colorName, feature, triggerFunc}) {
  return (
    <div className="input-wrapper">
        <input className="visually-hidden" type="radio" id={colorId} name={feature} value={colorName} onChange={triggerFunc}/>
        <label htmlFor={colorId} className="chooseStyle" style={{backgroundColor: `${colorData}`}}><span>{colorName}</span></label>        
    </div>
  )
}

export default ColorComponent