import React from "react"
import { Chrono } from "react-chrono";

function Timeline(){

  const items = [{
    title: "May 2017 - We met & fell in love",
    cardTitle: "Dunkirk",
    url: "http://www.history.com",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    media: {
      type: "IMAGE",
      source: {
        url: "http://someurl/image.jpg"
      }
    }
  }];

  return (
    <div>
      <Chrono items={items} style={{ width: "100%", height: "600px" }} mode="HORIZONTAL" />
      {/* <Chrono items={data} mode="VERTICAL_ALTERNATING" /> */}
    </div>
  )
}
export default Timeline;