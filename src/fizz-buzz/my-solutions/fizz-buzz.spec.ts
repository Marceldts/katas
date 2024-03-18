import { describe, it, expect } from 'vitest'
import { FizzBuzz, fizzBuzz } from './fizz-buzz'

describe('fizzBuzz', () => {
  it('should replace numbers with modulus 15 === 0 to "fizzbuzz", numbers with modulus 5 === 0 to "buzz" and numbers with modulus 3 === 0 to "fizz"', () => {
    const givenNumber = 15
    const expected: FizzBuzz[] = [
      1,
      2,
      'fizz',
      4,
      'buzz',
      'fizz',
      7,
      8,
      'fizz',
      'buzz',
      11,
      'fizz',
      13,
      14,
      'fizzbuzz'
    ]
    const result: FizzBuzz[] = fizzBuzz(givenNumber)
    expect(result).toStrictEqual(expected)
  })
})
