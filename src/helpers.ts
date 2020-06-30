export const formatDate = (date: Date): string => 
  date.toLocaleDateString(undefined, { day: "numeric", month: "long" })

export const formatTemperature = (temperature: number, isMetric: boolean): number => {
  let returnTemp = temperature
  if (!isMetric) {
    returnTemp = (temperature - 32) * (5 / 9);
  }
  return Math.round(returnTemp)
}