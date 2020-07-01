import React, { useState, useEffect } from "react"
import { formatDate } from "helpers"
import { API_URL } from "api"
import { Weather } from "types/weatherType"
import { Info, Previous, Unit, WeatherData } from "components"
import BGImage from "img/mars.jpg"
import { AppWrapper, GlobalStyle, InfoWrapper, MarsWeather, Spinner } from "./App.styles"

const App = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [weather, setWeather] = useState<Weather[] | []>([])
  const [selectSol, setSelectedSol] = useState<number | null>(null)
  const [metric, setMetric] = useState<boolean>(true)

  useEffect(() => {
    const fetchFromAPI = async () => {
      // first "await": wait for data to be retrieved from API
      // second "await": wait for data to be converted to json
      const weather = await (await fetch(API_URL)).json()
      const marsWeather = weather.sol_keys.map((key: string) => {
        return {
          sol: key,
          maxTemp: weather[key].AT?.mx ?? "No data",
          minTemp: weather[key].AT?.mn ?? "No data",
          windSpeed: Math.round(weather[key].HWS?.av ?? 0),
          windDirectionDegrees:
            weather[key].WD?.most_common?.compass_degrees ?? 0,
          date: formatDate(new Date(weather[key].First_UTC))
        }
      })
      setWeather(marsWeather)
      // set the default selected day to the most recent/latest
      setSelectedSol(marsWeather.length - 1)
      setLoading(false)
    }

    fetchFromAPI()
  }, [])

  return (
    <>
      <GlobalStyle bgImage={BGImage} />
      <AppWrapper>
        <MarsWeather>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <h1 className="main-title">
                Latest Weather at Elysium Plantitia
              </h1>
              <WeatherData />
              <InfoWrapper>
                <Info />
                <Unit />
              </InfoWrapper>
            </>
          )}
        </MarsWeather>
        <Previous />
      </AppWrapper>
    </>
  )
}

export default App
