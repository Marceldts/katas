import { describe, it, expect } from 'vitest'
import { wrap } from './word-wrap'

describe('word wrap', () => {
  it('should return an empty string if the text is empty', () => {
    expect(wrap('', 1)).toBe('')
  })
  it('shuold return the text if the column is greater than the length of the text', () => {
    expect(wrap('hello', 10)).toBe('hello')
  })
  it('should wrap the text at the column', () => {
    expect(wrap('foobar', 3)).toBe('foo\nbar')
  })
})
