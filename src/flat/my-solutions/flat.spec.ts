import { describe, it, expect } from 'vitest'
import { flat } from './flat'

describe('flat', () => {
  it('should return a flat array given multiple arrays', () => {
    const givenArray = [1, 2, 3]
    const expectedArray = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]
    const result = flat(givenArray, givenArray, givenArray, givenArray)
    expect(result).toEqual(expectedArray)
  })
})
