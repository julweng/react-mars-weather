import React from "react"
import { Weather } from "types"
import { PreviousWrapper, Toggle, PreviousDays, PreviousDay } from "./styles"

type PreviousProps = {
  isMetric: boolean
  previous: boolean
  setPrevious: React.Dispatch<React.SetStateAction<boolean>>
  setSelectedSol: React.Dispatch<React.SetStateAction<number>>
  weather: Weather[]
}

const Previous = ({
  isMetric,
  previous,
  setPrevious,
  setSelectedSol,
  weather
}: PreviousProps) => (
  <PreviousWrapper previous={previous}>
    <Toggle
      className="weather-toggle"
      onClick={() => setPrevious((prev) => !prev)}
      previous={previous}
    >
      <span>&#8593;</span>
      <span className="sr-only">Show previous weather</span>
    </Toggle>

    <h2 className="main-title previous-weather__title">Previous 7 days</h2>
    <PreviousDays>
      {weather.map((sol, i) => (
        <PreviousDay key={sol.sol} previous={previous}>
          <h3 className="previous-day__sol">
            <span>{sol.sol}</span>
            <p className="previous-day__date">{sol.date}</p>
            <p className="previous-day__temp">
              High:
              <span>{sol.maxTemp}</span>
              <span>{isMetric ? " °C" : " °C"}</span>
            </p>
            <p className="previous-day__temp">
              Low:
              <span>{sol.minTemp}</span>
              <span>{isMetric ? " °C" : " °C"}</span>
            </p>
            <button
              className="previous-day__more-info"
              onClick={() => setSelectedSol(i)}
            >
              More info
            </button>
          </h3>
        </PreviousDay>
      ))}
    </PreviousDays>
  </PreviousWrapper>
)

export default Previous
