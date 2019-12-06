import React from "react"
import "./ColorDisplay.css"

const ColorDisplay = ({ color }) => {
  if (color) {
    let { h: hue } = color.toHsv()
    let hex = color.toHexString()
    let hsl = color.toHslString()
    let rgb = color.toRgbString()

    return (
      <div className="color-display">
        <div style={{ color: `hsl(${Math.floor(hue)}, 100%, 50%)` }}>
          Hue: {Math.floor(hue)}
        </div>
        <div style={{ color: hex }}>{hex}</div>
        <div style={{ color: rgb }}>{rgb}</div>
        <div style={{ color: hsl }}>{hsl}</div>
      </div>
    )
  } else {
    return null
  }
}

export { ColorDisplay }
