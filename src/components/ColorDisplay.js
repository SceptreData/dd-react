import React from "react"
import "./ColorDisplay.css"

const ColorDisplay = ({ color }) => {
  if (color) {
    let hex = color.toHexString()
    let hsl = color.toHslString().slice(4, -1)
    let rgb = color.toRgb()

    return (
      <div className="color-display">
        <div className="color-preview" style={{ backgroundColor: hex }}></div>
        <div>
          <div>HEX</div> {hex}
        </div>
        <div>
          <div>RGB</div>
          {rgb["r"]}, {rgb["g"]}, {rgb["b"]}
        </div>
        <div>
          <div>HSL</div>
          {hsl}
        </div>
      </div>
    )
  } else {
    return null
  }
}

export { ColorDisplay }
