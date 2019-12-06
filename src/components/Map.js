import React from "react"
import { Pointer } from "./Pointer"

import "./Map.css"

const Map = ({ styles, bgColor, pointerPos, handleClick }) => {
  return (
    <div className="map" style={styles} onClick={e => handleClick(e)}>
      <div className="color-bg" style={bgColor}>
        <div className="overlay" />
      </div>
      <Pointer coords={pointerPos} />
    </div>
  )
}

export { Map }
