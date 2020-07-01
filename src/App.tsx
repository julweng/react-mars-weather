import React, { useState, useEffect } from "react"
import { formatDate } from "helpers"
import { API_URL } from "api"
import { Info, Previous, Unit, WeatherData } from "components"
import BGImage from "img/mars.jpg"
import { AppWrapper, GlobalStyle, MarsWeather, InfoWrapper } from "./App.styles"

const App = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [weather, setWeather] = useState<>([])
  const [selectSol, setSelectedSol] = useState<>()
  const [metric, setMetric] = useState<boolean>(true)
  
  return (
    <div>App</div>
  )
}

export default App
