import React from "react"
// Styles
import { UnitStyles, Toggle } from "./styles"

type UnitProps = {
  metric: boolean
  setMetric: React.Dispatch<React.SetStateAction<boolean>>
}

const Unit = ({ metric, setMetric }: UnitProps) => (
  <UnitStyles>
    <label htmlFor="cel">°C</label>
    <Toggle metric={metric} onClick={() => setMetric((prev) => !prev)} />
    <label htmlFor="fah">°F</label>
  </UnitStyles>
)

export default Unit
