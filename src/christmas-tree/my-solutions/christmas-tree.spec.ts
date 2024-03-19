import { describe, it, expect } from 'vitest'
import { drawTree } from './christmas-tree'

const ONE_ROW_TREE = `
*
|
`

const THREE_ROW_TREE = `
  *
 ***
*****
  |
`

const FIVE_ROW_TREE = `
    *    
   ***   
  *****  
 ******* 
*********
    |    
`

describe('christmas tree', () => {
  it('should return an empty string if the height is less than 1', () => {
    expect(drawTree(-1)).toBe('')
  })

  it('should return a tree with 1 row given a height of 1', () => {
    expect(drawTree(1)).toBe(ONE_ROW_TREE)
  })

  it('should return a tree given a valid height', () => {
    expect(drawTree(5)).toBe(FIVE_ROW_TREE)
  })
})
