const denominations = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]

export const calculateChange = (amount: number): number[] => {
  if (amount <= 0) return []
  const result: number[] = _recursiveCalculateChange(amount, [], 0)
  return result
}

const _recursiveCalculateChange = (
  amount: number,
  result: number[],
  currentIndex: number
): number[] => {
  if (amount === 0) return result
  const currentDenomination = denominations[currentIndex]
  const remainder = Number((amount % currentDenomination).toFixed(2))
  const quotient = Number(Math.floor(amount / currentDenomination))
  for (let i = 0; i < quotient; i++) {
    result.push(currentDenomination)
  }
  return _recursiveCalculateChange(remainder, result, currentIndex + 1)
}
