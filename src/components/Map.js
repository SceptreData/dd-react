import React from "react"
import { Pointer } from "./Pointer"

import "./Map.css"

const Map = ({ styles, bgColor, pointer, handleClick }) => {
  return (
    <div className="map" style={styles} onClick={e => handleClick(e)}>
      <div className="color-bg" style={bgColor}>
        <div className="overlay" />
      </div>
      <Pointer coords={pointer} />
    </div>
  )
}

export { Map }
