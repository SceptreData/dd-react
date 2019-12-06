import React, { useState, useEffect } from "react"
import tinycolor from "tinycolor2"

import { Slider } from "./Slider"
import { Map } from "./Map"
import { ColorDisplay } from "./ColorDisplay"
import "./ColorPicker.css"

const ColorPicker = ({ width, height }) => {
  const [sliderVal, setSliderVal] = useState(150)
  const [pointPos, setPointPos] = useState([width / 2, height / 2])
  const [color, setColor] = useState(tinycolor())

  const getBackground = () => {
    const backgroundColor = `hsl(${sliderVal}, 100%, 50%)`
    return { backgroundColor }
  }

  const movePointer = e => {
    let xPos = e.nativeEvent.offsetX
    let yPos = e.nativeEvent.offsetY
    console.log(xPos, yPos)

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

    if (color) {
      updateColor()
    }
  }, [sliderVal, pointPos, width, height])

  return (
    <>
      <div className="color-picker">
        <Map
          styles={{ width, height }}
          bgColor={getBackground()}
          pointerPos={pointPos}
          handleClick={movePointer}
        />
        <Slider value={sliderVal} setValue={setSliderVal} height={height} />
      </div>
      <ColorDisplay color={color} />
    </>
  )
}

export { ColorPicker }
