import { describe, it, expect } from 'vitest'
import { fruitCounter } from './fruit-conter'

describe('fruitCounter', () => {
  it('should return the correct count of fruits', () => {
    expect(fruitCounter(['apple', 'banana', 'apple', 'apple', 'banana', 'orange'])).toEqual({
      apple: 3,
      banana: 2,
      orange: 1
    })
  })
})
