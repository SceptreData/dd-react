import React, { useState } from "react"
import { Slider } from "./Slider"
import { Pointer } from "./Pointer"
import "./ColorPicker.css"

const ColorPicker = ({ width, height }) => {
  const [sliderVal, setSliderVal] = useState(150)
  const [pointPos, setPointPos] = useState([50, 50])

  const getBackground = () => {
    const backgroundColor = `hsl(${sliderVal}, 100%, 50%)`
    console.log({ backgroundColor })
    return { backgroundColor }
  }
  const movePointer = e => {
    let xPos = e.nativeEvent.offsetX
    let yPos = e.nativeEvent.offsetY

    setPointPos([xPos, yPos])
  }

  return (
    <React.Fragment>
      <div className="color-picker">
        <div
          className="map"
          style={{ width, height }}
          onClick={e => movePointer(e)}
        >
          <div className="color-bg" style={getBackground()}>
            <div className="overlay" />
          </div>
          <Pointer coords={pointPos} />
        </div>
        <Slider value={sliderVal} setValue={setSliderVal} height={height} />
      </div>
      <p style={{ textAlign: "center" }}> Hue: {sliderVal}</p>
    </React.Fragment>
  )
}

export { ColorPicker }
