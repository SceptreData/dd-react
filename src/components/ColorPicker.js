import React, { useState } from "react"
import Slider from "./Slider"

const styles = {
  pickerStyle: {
    display: "flex",
  },
  mapStyle: {
    position: "relative",
    width: 800,
    height: 600,
    overflow: "hidden",
  },
  bg: {
    top: 0,
    left: 0,
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  bgOverlay: {
    display: "block",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%),
                 linear-gradient(to right, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%)`,
  },
}

const ColorPicker = ({ width, height }) => {
  const [sliderVal, setSliderVal] = useState(150)
  const { pickerStyle, bg, bgOverlay, mapStyle } = styles

  const getBackground = () => {
    const backgroundColor = `hsl(${sliderVal}, 100%, 50%)`
    console.log({ ...bg, backgroundColor })
    return { ...bg, backgroundColor }
  }

  return (
    <div style={pickerStyle}>
      <div className="map" style={mapStyle}>
        <div className="color-bg" style={getBackground()}>
          <span className="overlay" style={bgOverlay} />
        </div>
      </div>
      <Slider value={sliderVal} setValue={setSliderVal} />
      <p style={{ textAlign: "center" }}> Hue: {sliderVal}</p>
    </div>
  )
}

export { ColorPicker }
