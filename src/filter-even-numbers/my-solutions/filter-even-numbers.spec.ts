import { describe, it, expect } from 'vitest'
import { filterEvenNumbers } from './filter-even-numbers'

describe('filterEvenNumbers', () => {
  it('should return an array of even numbers', () => {
    const givenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const expectedArray = [2, 4, 6, 8, 10]
    const resultArray = filterEvenNumbers(givenArray)
    expect(resultArray).toEqual(expectedArray)
  })
})
