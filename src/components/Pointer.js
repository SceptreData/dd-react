import React from "react"
import "./Pointer.css"

const Pointer = ({ coords }) => {
  return (
    <React.Fragment>
      <div
        className="pointer"
        style={{ left: coords[0], top: coords[1] }}
      ></div>
    </React.Fragment>
  )
}

export { Pointer }
