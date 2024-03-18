import { describe, it, expect } from 'vitest'
import { range } from './range'

describe('range', () => {
  it('should return an array of numbers from the initial to the final one when the first index is lesser than the second', () => {
    const initial = 2
    const final = 5
    const expected = [2, 3, 4, 5]
    const result = range(initial, final)
    expect(result).toEqual(expected)
  })
  it('should return an array of numbers from 0 to the first index if there is only one arg', () => {
    const index = 3
    const result = range(index)
    const expected = [0, 1, 2, 3]
    expect(result).toEqual(expected)
  })
  it('should handle the case where the first parameter is bigger than the second one', () => {
    const initial = 5
    const final = 2
    const expected = [2, 3, 4, 5]
    const result = range(initial, final)
    expect(result).toEqual(expected)
  })
  it('should handle when the parameters are the same number', () => {
    const initial = 0
    const final = 0
    const expected = [0]
    const result = range(initial, final)
    expect(result).toEqual(expected)
  })
  it('should handle when the parameters are negative numbers', () => {
    const initial = -2
    const final = -5
    const expected = [-5, -4, -3, -2]
    const result = range(initial, final)
    expect(result).toEqual(expected)
  })
  it('should handle when there is only one parameter', () => {
    const initial = 5
    const expected = [0, 1, 2, 3, 4, 5]
    const result = range(initial)
    expect(result).toEqual(expected)
  })
})
