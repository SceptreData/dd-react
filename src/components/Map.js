import React from "react"
import Draggable from "react-draggable"

import "./Map.css"

const Map = ({ styles, dragging }) => {
  const { bgColor } = styles

  return (
    <div className="map" style={styles}>
      <div className="color-bg" style={bgColor}>
        <div className="overlay" />
      </div>
      <Draggable
        bounds="parent"
        defaultPosition={{ x: styles.width / 2, y: styles.height / 2 }}
        onDrag={(e, data) => dragging(data.x, data.y)}
      >
        <div className="pointer"></div>
      </Draggable>
    </div>
  )
}

export { Map }
