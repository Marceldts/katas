import { describe, it, expect } from 'vitest'
import { getAllPrimeNumbersLesserThanN, isPrime, primeNumbers } from './prime-numbers'

describe('primeNumbers', () => {
  it('should return an empty array when the number is 0', () => {
    const result = primeNumbers(0)
    expect(result).toEqual([])
  })

  it('should return an array with all prime numbers that are factors of n', () => {
    const result = primeNumbers(60)
    expect(result).toEqual([2, 2, 3, 5])
  })
})

describe('isPrime', () => {
  it('should return true when the number is 2', () => {
    const result = isPrime(2)
    expect(result).toBe(true)
  })
  it('should return false when the number is even and not 2', () => {
    const result = isPrime(8)
    expect(result).toBe(false)
  })
  it('should return true when the number is prime', () => {
    const result = isPrime(7)
    expect(result).toBe(true)
  })
})

describe('getAllPrimeNumbersLesserThanN', () => {
  it('should return an empty array when the number is 0', () => {
    const result = getAllPrimeNumbersLesserThanN(0)
    expect(result).toEqual([])
  })
  it('should return an array with all prime numbers lesser than n', () => {
    const result = getAllPrimeNumbersLesserThanN(7)
    expect(result).toEqual([7, 5, 3, 2])
  })
})
