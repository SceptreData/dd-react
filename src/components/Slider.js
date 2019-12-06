import React from "react"
import "./Slider.css"

const Slider = ({ value, setValue, height }) => {
  const handleChange = e => {
    setValue(e.target.value)
  }

  let origin = height / 2 - 5

  return (
    <div className="slider-wrapper">
      <input
        type="range"
        id="range"
        min="0"
        max="360"
        step="1"
        value={value}
        onChange={handleChange}
        style={{ width: height, transformOrigin: `${origin}px ${origin}px` }}
      />
    </div>
  )
}

export { Slider }
