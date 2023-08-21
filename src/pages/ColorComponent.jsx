
function ColorComponent({colorId, colorData, colorName, feature}) {
  return (
    <div className="input-wrapper">
        <input className="visually-hidden" type="radio" id={colorId} name={feature} value={colorId}/>
        <label htmlFor={colorId} className="chooseStyle" style={{backgroundColor: `${colorData}`}}><span>{colorName}</span></label>        
    </div>
  )
}

export default ColorComponent