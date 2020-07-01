import React from "react"
import { PreviousWrapper, Toggle, PreviousDays, PreviousDay } from "./styles"


const Previous = ({ weather, previous, setPrevious, setSelectedSol }) => (
  <PreviousWrapper previous={false}>
    <Toggle className="weather-toggle" previous={false}>
      <span>&#8593;</span>
      <span className="sr-only">Show previous weather</span>
    </Toggle>

    <h2 className="main-title previous-weather__title">Previous 7 days</h2>
    <PreviousDays>Previous days</PreviousDays>
  </PreviousWrapper>
)

export default Previous
