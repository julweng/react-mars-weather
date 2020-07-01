import {displaySpeed, formatDate, formatTemperature} from "helpers"

describe("formatDate", () => {
	it("Should call locale string to format date", () => {
		const localStringMock = jest.fn()
		const mockDate = {
			...Date.prototype,
			toLocaleDateString: localStringMock
		}
		formatDate(mockDate)
		expect(localStringMock).toHaveBeenCalledWith(undefined, {
			day: "numeric",
			month: "long"
		})
	})
})

describe("formatTemperature", () => {
  it("returns the rounded temperature in Celcius if isMetric is true", () => {
    const temp = formatTemperature(123.45, true)
    expect(temp).toEqual(123)
  })

  it("returns the rounded temperature in Fahrenheit if isMetric is false", () => {
    const temp = formatTemperature(123.45, false)
    expect(temp).toEqual(254)
  })
})

describe("displaySpeed", () => {
  it("returns the rounded speed in km/h if isMetric is true", () => {
    const speed = displaySpeed(12.345, true)
    expect(speed).toEqual(12)
  })

  it("returns the rounded speed in mph if isMetric is false", () => {
    const speed = displaySpeed(12.345, false)
    expect(speed).toEqual(8)
  })
})
