import React, { useState, useEffect } from "react"
import tinycolor from "tinycolor2"
import { Slider } from "./Slider"
import { Pointer } from "./Pointer"
import "./ColorPicker.css"

const ColorPicker = ({ width, height }) => {
  const [sliderVal, setSliderVal] = useState(150)
  const [pointPos, setPointPos] = useState([width / 2, height / 2])
  const [color, setColor] = useState(
    tinycolor({ h: sliderVal, s: "50%", v: "50%" })
  )

  const getBackground = () => {
    const backgroundColor = `hsl(${sliderVal}, 100%, 50%)`
    return { backgroundColor }
  }

  const movePointer = e => {
    let xPos = e.nativeEvent.offsetX
    let yPos = e.nativeEvent.offsetY

    setPointPos([xPos, yPos])
  }

  useEffect(() => {
    function updateColor() {
      const [xPos, yPos] = pointPos

      let h = sliderVal
      let s = (xPos / width) * 100
      let v = 100 - (yPos / height) * 100

      let c = tinycolor({ h, s, v })
      setColor(c)
    }

    updateColor()
  }, [sliderVal, pointPos])

  return (
    <>
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
      <p style={{ textAlign: "center" }}>
        Hue: {sliderVal}
        <br />
        Hex:
        <span style={{ color: color.toHexString() }}>
          {color.toHexString()}
        </span>
        <br />
      </p>
    </>
  )
}

export { ColorPicker }
