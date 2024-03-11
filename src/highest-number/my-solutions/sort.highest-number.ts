export const getHighestNumber = (numbers: number[]): number | null => {
  if (numbers.length === 0) {
    return null
  }
  return numbers.sort((a, b) => b - a)[0]
}
