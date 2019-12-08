import React from "react"
import Draggable from "react-draggable"

import "./Map.css"

const Map = ({ width, height, bgColor, dragging }) => {
  return (
    <div className="map" style={{ width, height }}>
      <div className="color-bg" style={{ backgroundColor: bgColor }}>
        <div className="overlay" />
      </div>
      <Draggable
        bounds="parent"
        defaultPosition={{ x: width / 2, y: height / 2 }}
        onDrag={(e, data) => dragging(data.x, data.y)}
      >
        <div className="pointer"></div>
      </Draggable>
    </div>
  )
}

export { Map }
