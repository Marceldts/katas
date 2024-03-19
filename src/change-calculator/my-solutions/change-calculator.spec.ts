import { describe, it, expect } from 'vitest'
import { calculateChange } from './change-calculator'

describe('change calculator', () => {
  it('should return an empty array when the amount is 0', () => {
    expect(calculateChange(0)).toEqual([])
  })
  it('should return an empty list when the amount is negative', () => {
    expect(calculateChange(-1)).toEqual([])
  })
  describe('base case for each denomination', () => {
    it('should return [0.01] when the amount is 0.01', () => {
      expect(calculateChange(0.01)).toEqual([0.01])
    })
    it('should return [0.02] when the amount is 0.02', () => {
      expect(calculateChange(0.02)).toEqual([0.02])
    })
    it('should return [0.05] when the amount is 0.05', () => {
      expect(calculateChange(0.05)).toEqual([0.05])
    })
    it('should return [1] when the amount is 1', () => {
      expect(calculateChange(1)).toEqual([1])
    })
    it('should return [2] when the amount is 2', () => {
      expect(calculateChange(2)).toEqual([2])
    })
    it('should return [5] when the amount is 5', () => {
      expect(calculateChange(5)).toEqual([5])
    })
    it('should return [10] when the amount is 10', () => {
      expect(calculateChange(10)).toEqual([10])
    })
    it('should return [20] when the amount is 20', () => {
      expect(calculateChange(20)).toEqual([20])
    })
    it('should return [50] when the amount is 50', () => {
      expect(calculateChange(50)).toEqual([50])
    })
    it('should return [100] when the amount is 100', () => {
      expect(calculateChange(100)).toEqual([100])
    })
    it('should return [200] when the amount is 200', () => {
      expect(calculateChange(200)).toEqual([200])
    })
    it('should return [500] when the amount is 500', () => {
      expect(calculateChange(500)).toEqual([500])
    })
  })
  describe('complex cases', () => {
    it('should return every denomination when the amount is 888.89', () => {
      expect(calculateChange(888.88)).toEqual([
        500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01
      ])
    })
  })
})
