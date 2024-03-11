import { describe, it, expect } from 'vitest'
import { addAllNumbers } from './add-all-numbers'

describe('addAllNumbers', () => {
  it('should add all numbers of a given array', () => {
    const givenArray = [1, 2, 3, 4, 5]
    const expected = 15
    const result = addAllNumbers(givenArray)
    expect(result).toBe(expected)
  })
})
