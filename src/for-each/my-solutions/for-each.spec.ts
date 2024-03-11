import { describe, it, expect } from 'vitest'

import { forEach } from './for-each'

describe('forEach', () => {
  it('should call the callback function for each element in the array', () => {
    const givenArray = [1, 2, 12, 3, 4, 5]
    const expectedArray = [2, 4, 24, 6, 8, 10]
    const resultArray: number[] = []
    const callBack = (element: number) => {
      resultArray.push(element * 2)
    }
    forEach(givenArray, callBack)
    expect(resultArray).toEqual(expectedArray)
  })
})
