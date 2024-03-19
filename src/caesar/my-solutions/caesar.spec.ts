import { describe, it, expect } from 'vitest'
import { caesarCypher } from './caesar'

describe('caesarCypher', () => {
  it('should return an empty string when given an empty string', () => {
    expect(caesarCypher('', 1)).toBe('')
  })
  it('should shift the letters of the alphabet by the given number', () => {
    expect(caesarCypher('abcd', 1)).toBe('bdfh')
  })

  it('should ignore the blank spaces to increase the shift', () => {
    expect(caesarCypher('a b c d', 1)).toBe('b d f h')
  })

  it('should work with negative shifts', () => {
    expect(caesarCypher('abcd', -1)).toBe('zbdf')
  })

  it('should work with large shifts', () => {
    expect(caesarCypher('abcd', 27)).toBe('bdfh')
  })

  it('should work with large negative shifts', () => {
    expect(caesarCypher('abcd', -27)).toBe('zbdf')
  })

  it('should work with the example from the README', () => {
    expect(
      caesarCypher('I should have known that you would have a perfect answer for me!!!', 1)
    ).toBe('J ukszrk pjfp wacld kztn tkr unumf keak h xnbqqph pdjoxl ako kd!!!')
  })
})
