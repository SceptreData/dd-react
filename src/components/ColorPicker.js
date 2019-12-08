import React, { useState, useEffect } from "react"
import tinycolor from "tinycolor2"

import { Slider } from "./Slider"
import { Map } from "./Map"
import { ColorDisplay } from "./ColorDisplay"

const ColorPicker = ({ width, height }) => {
  const [sliderVal, setSliderVal] = useState(150)
  const [pointPos, setPointPos] = useState([width / 2, height / 2])
  const [color, setColor] = useState(tinycolor())

  const getBackground = () => {
    const backgroundColor = `hsl(${sliderVal}, 100%, 50%)`
    return { backgroundColor }
  }

  const movePointer = (x, y) => {
    setPointPos([x, y])
  }

  useEffect(() => {
    function updateColor() {
      const [xPos, yPos] = pointPos

      const h = sliderVal
      const s = (xPos / width) * 100
      const v = 100 - (yPos / height) * 100

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
          styles={{ width, height, bgColor: getBackground() }}
          dragging={movePointer}
        />
        <Slider value={sliderVal} setValue={setSliderVal} height={height} />
      </div>
      <ColorDisplay color={color} />
    </>
  )
}

export { ColorPicker }
