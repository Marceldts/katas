export const primeNumbers = (n: number): number[] => {
  if (n === 0) return []
  const result: number[] = []
  const primeNumbers: number[] = getAllPrimeNumbersLesserThanN(n)
  while (primeNumbers.length > 0) {
    for (let i = primeNumbers.length - 1; i > 1; ) {
      if (n % primeNumbers[i] === 0) {
        result.push(primeNumbers[i])
        n /= primeNumbers[i]
      } else {
        i--
      }
    }
    primeNumbers.pop()
  }
  console.log('🚀 ~ primeNumbers ~ primeNumbers:', result)
  return result
}

export const getAllPrimeNumbersLesserThanN = (n: number): number[] => {
  if (n === 0) return []
  const primeNumbers: number[] = []
  for (let i = n; i > 1; i--) {
    if (isPrime(i)) primeNumbers.push(i)
  }
  return primeNumbers
}

export const isPrime = (n: number): boolean => {
  if (n === 2) return true
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false
  }
  return true
}
