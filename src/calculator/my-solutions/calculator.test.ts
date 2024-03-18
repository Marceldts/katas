import { describe, it, expect } from 'vitest'
import { calculator } from './calculator'
describe('calculator', () => {
  it('should return 0 when the string is empty', () => {
    const result = calculator('')
    expect(result).toBe(0)
  })
  it('should add two numbers with blank spaces', () => {
    const result = calculator('1 + 1')
    expect(result).toBe(2)
  })

  it('should add two numbers without blank spaces', () => {
    const result = calculator('1+1')
    expect(result).toBe(2)
  })

  it('should add three numbers', () => {
    const result = calculator('1+1+1')
    expect(result).toBe(3)
  })

  it('should add three numbers with blank spaces', () => {
    const result = calculator('1 + 1 + 1')
    expect(result).toBe(3)
  })

  it('should subtract two numbers', () => {
    const result = calculator('1 - 1')
    expect(result).toBe(0)
  })
  it('should subtract three numbers', () => {
    const result = calculator('1 - 1 - 1')
    expect(result).toBe(-1)
  })
  it('should subtract three numbers with blank spaces', () => {
    const result = calculator('1 - 1 - 1')
    expect(result).toBe(-1)
  })

  it('should add and subtract numbers', () => {
    const result = calculator('1 + 1 - 1')
    expect(result).toBe(1)
  })
})
