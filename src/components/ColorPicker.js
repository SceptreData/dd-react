import React, { useState } from "react"
import Slider from "./Slider"
import "./ColorPicker.css"

const ColorPicker = ({ width, height }) => {
  const [sliderVal, setSliderVal] = useState(150)

  const getBackground = () => {
    const backgroundColor = `hsl(${sliderVal}, 100%, 50%)`
    console.log({ backgroundColor })
    return { backgroundColor }
  }

  return (
    <div className="color-picker">
      <div className="map" style={{ width, height }}>
        <div className="color-bg" style={getBackground()}>
          <div className="overlay" />
        </div>
      </div>
      <Slider value={sliderVal} setValue={setSliderVal} />
      <p style={{ textAlign: "center" }}> Hue: {sliderVal}</p>
    </div>
  )
}

export { ColorPicker }
