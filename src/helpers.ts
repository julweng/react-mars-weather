export const formatDate = (date: Date): string =>
	date.toLocaleDateString(undefined, {day: "numeric", month: "long"})

export const formatTemperature = (
	temperature: number,
	isMetric: boolean
): number => {
	let returnTemp = temperature
	if (isMetric) {
		returnTemp = (temperature - 32) * (5 / 9)
	}
	return Math.round(returnTemp)
}

export const displaySpeed = (speed: number, isMetric: boolean): number => {
	let returnSpeed = speed
	if (!isMetric) {
		returnSpeed = speed / 1.609
	}
	return Math.round(returnSpeed)
}
