import React from "react"
// Styles
import { UnitStyles, Toggle } from "./styles"

const Unit = ({ metric, setMetric }) => (
  <UnitStyles>
    <label htmlFor="cel">°C</label>
    <Toggle metric={metric} />
    <label htmlFor="fah">°F</label>
  </UnitStyles>
)
export default Unit
