import React from "react";
import { CtnVideo } from "./styles";


function ReactVideoPlayer({ posterThumb, videoLink }) {
  return (
    <CtnVideo>
      <video
        poster={posterThumb}
        className="video-player"
        controls="controls"
        controlls preload="auto"
        loop playsInline
      >
        <source src={videoLink} type="video/mp4" />
      </video>
    </CtnVideo>
  )
}

export default ReactVideoPlayer