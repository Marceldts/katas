import { describe, it, expect } from 'vitest'
import { sing, LAST_VERSE, ONE_BOTTLE_VERSE, TWO_BOTTLES_VERSE } from './bottles'

describe('99 bottles', () => {
  it('should return the last verse if start is 0', () => {
    expect(sing(0)).toEqual(LAST_VERSE)
  })
  it('should return the last verse if start is less than 0', () => {
    expect(sing(-1)).toEqual(LAST_VERSE)
  })

  it('should return the first verse if start is 1', () => {
    expect(sing(1)).toEqual(ONE_BOTTLE_VERSE)
  })
  it('should return the second verse if start is 2', () => {
    expect(sing(2)).toEqual(TWO_BOTTLES_VERSE)
  })

  it('should return verses from end to start', () => {
    expect(sing(99, 97)).toBe(`99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.\n
98 bottles of beer on the wall, 98 bottles of beer.
Take one down and pass it around, 97 bottles of beer on the wall.\n
97 bottles of beer on the wall, 97 bottles of beer.
Take one down and pass it around, 96 bottles of beer on the wall.\n`)
  })
})
