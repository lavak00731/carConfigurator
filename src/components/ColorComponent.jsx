
function ColorComponent({colorId, colorData, colorName, feature, triggerFunc, selection}) {
  return (
    <div className="input-wrapper">
        <input className="visually-hidden" type="radio" id={colorId} name={feature} value={colorName} onChange={triggerFunc} checked={ (selection[feature] === colorName) ? true : false }/>
        <label htmlFor={colorId} className="chooseStyle" style={{backgroundColor: `${colorData}`}}><span>{colorName}</span></label>        
    </div>
  )
}

export default ColorComponent