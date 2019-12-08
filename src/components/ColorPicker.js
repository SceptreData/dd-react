import React, { useState, useEffect } from "react"
import tinycolor from "tinycolor2"

import { Slider } from "./Slider"
import { Map } from "./Map"
import { ColorDisplay } from "./ColorDisplay"

const ColorPicker = ({ width, height }) => {
  const [sliderVal, setSliderVal] = useState(150)
  const [pointPos, setPointPos] = useState([width / 2, height / 2])
  const [color, setColor] = useState(tinycolor())

  const movePointer = (x, y) => {
    setPointPos([x, y])
  }

  useEffect(() => {
    function updateColor() {
      const [xPos, yPos] = pointPos

      const h = sliderVal
      const s = xPos / width
      const v = 1 - yPos / (height - 1)

      console.log(`H: ${h}, S: ${s}, V: ${v}, Point: ${pointPos}`)
      const c = tinycolor({ h, s, v })
      setColor(c)
    }

    if (color) {
      updateColor()
    }
  }, [sliderVal, pointPos, width, height])

  return (
    <>
      <div style={{ display: "flex" }}>
        <Map
          width={width}
          height={height}
          bgColor={`hsl(${sliderVal}, 100%, 50%)`}
          dragging={movePointer}
        />
        <Slider value={sliderVal} setValue={setSliderVal} height={height} />
      </div>

      <ColorDisplay color={color} />
    </>
  )
}

export { ColorPicker }
