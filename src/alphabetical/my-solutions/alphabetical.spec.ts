import { describe, it, expect } from 'vitest'
import { alphabetical } from './alphabetical'

describe('alphabetical', () => {
  it('should return an array of strings in alphabetical order', () => {
    const givenArray = ['z', 'a', 'c', 'b']
    const expectedArray = ['a', 'b', 'c', 'z']
    const result = alphabetical(givenArray)
    expect(result).toEqual(expectedArray)
  })
})
