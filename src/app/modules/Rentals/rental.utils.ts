export const getTotalCost = (
  startTime: string,
  returnTime: string,
  pricePerHour: number,
): number => {
  const start = new Date(startTime)
  const end = new Date(returnTime)
  const durationInHours = (end.getTime() - start.getTime()) / (1000 * 60 * 60) //! Convert milliseconds to hours
  const totalCost = parseFloat((durationInHours * pricePerHour).toFixed(2))
  return totalCost
}
