import { describe, it, expect } from 'vitest'
import { powerOfTwo } from './power-of-two'

describe('power-of-two', () => {
  it('should return an empty array if the given array is empty', () => {
    const givenArray: number[] = []
    const expectedArray: number[] = []
    const actualArray = powerOfTwo(givenArray)
    expect(actualArray).toEqual(expectedArray)
  })
  it('should return an array of numbers that are powers of two and that are inside the given array of numbers', () => {
    const givenArray: number[] = [0, -1, 1, 2, 3, 4, 5, 6, 7, 8]
    const expectedArray: number[] = [0, 1, 1, 4, 9, 16, 25, 36, 49, 64]
    const actualArray = powerOfTwo(givenArray)
    expect(actualArray).toEqual(expectedArray)
  })
})
