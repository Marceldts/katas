import { describe, it, expect } from 'vitest'
import { getHighestNumber } from './sort.highest-number'

describe('getHighestNumber', () => {
  it('should return null given an empty array', () => {
    const givenArray: number[] = []
    const actualNumber = getHighestNumber(givenArray)
    expect(actualNumber).toBeNull()
  })
  it('should return the highest number given an array of numbers', () => {
    const givenArray: number[] = [1, 3, 3, 8, 5, -6]
    const actualNumber = getHighestNumber(givenArray)
    expect(actualNumber).toBe(8)
  })
})
