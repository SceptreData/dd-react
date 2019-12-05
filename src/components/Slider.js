import React from "react"

const Slider = ({ value, setValue }) => {
  const handleChange = e => {
    setValue(e.target.value)
  }

  return (
    <input
      type="range"
      id="range"
      min="0"
      max="360"
      step="1"
      value={value}
      orient="vertical"
      onChange={handleChange}
      onClick={() => console.log("CLICK")}
      style={{ WebkitAppearance: "slider-vertical" }}
    />
  )
}

export default Slider
