import {formatDate, formatTemperature} from "helpers"

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
  it("returns the rounded temperature in Celcius if isMetric is false", () => {
    const temp = formatTemperature(350.45, false)
    expect(temp).toEqual(177)
  })

  it("returns the rounded temperature in Fahrenheit if isMetric is true", () => {
    const temp = formatTemperature(350.45, true)
    expect(temp).toEqual(350)
  })
})
