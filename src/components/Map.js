import React from "react"
import { Pointer } from "./Pointer"

import "./Map.css"

const Map = ({ styles, pointerPos, handleClick }) => {
  const { bgColor } = styles
  return (
    <div className="map" style={styles} onMouseDown={e => handleClick(e)}>
      <div className="color-bg" style={bgColor}>
        <div className="overlay" />
      </div>
      <Pointer coords={pointerPos} />
    </div>
  )
}

export { Map }
