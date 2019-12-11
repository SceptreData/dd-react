import React from "react"
import Draggable from "react-draggable"

import "./Map.css"

const Map = ({ width, height, bgColor, dragging, target }) => {
  let [x,y] = target;
  let pointerStyle = {};
  return (
    <div className="map" style={{ width, height }}>
      <div className="color-bg" style={{ backgroundColor: bgColor }}
        onMouseDown={e => {
          pointerStyle = dragging(e.nativeEvent.offsetX, e.nativeEvent.offsetY, true)
        }}
      >
        <div className="overlay" />
      </div>
      <Draggable
        bounds="parent"
        defaultPosition={{ x: width / 2, y: height / 2 }}
        position={{x,y}}
        onDrag={(e, data) => dragging(data.x, data.y)}
      >
        <div className="pointer" style={pointerStyle}></div>
      </Draggable>
    </div>
  )
}

export { Map }
