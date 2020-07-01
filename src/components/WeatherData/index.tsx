import React from "react"
import { formatTemperature } from "helpers"
import { Weather } from "types"
import { Date, Temp, Wind, Wrapper } from "./styles"

type WeatherProps = {
  sol: Weather | undefined
  isMetric: boolean
}

const WeatherData = ({ sol, isMetric }: WeatherProps) => (
  <Wrapper>
    {sol ? (
      <>
        <Date>
          <h2>{sol.sol}</h2>
          <p>{sol.date}</p>
        </Date>
        <Temp>
          <h2 className="section-title">Temp</h2>
          <p className="reading">
            High:
            <span>
              {" "}
              {/* if sol.maxTemp is number, format temp */}
              {/* otherwise render sol.maxTemp which is "no Data" */}
              {typeof sol.maxTemp === "number"
                ? formatTemperature(sol.maxTemp, isMetric)
                : sol.maxTemp}
            </span>
            <span> {isMetric ? " C" : " F"}</span>
          </p>
          <p className="reading">
            Low:
            <span>
              {" "}
              {typeof sol.minTemp === "number"
                ? formatTemperature(sol.minTemp, isMetric)
                : sol.minTemp}
            </span>
            °<span> {isMetric ? " C" : " F"}</span>
          </p>
        </Temp>

        <Wind deg={sol.windDirectionDegrees}>
          <h2 className="section-title">Wind</h2>
          <p className="reading">
            <span>{sol.windSpeed}</span>
            <span>{isMetric ? " kph" : " mph"}</span>
          </p>

          <div className="wind__direction">
            <div className="wind__arrow"></div>
          </div>
        </Wind>
      </>
    ) : (
      <h2>No data</h2>
    )}
  </Wrapper>
)

export default WeatherData
