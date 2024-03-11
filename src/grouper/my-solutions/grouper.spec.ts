import { describe, it, expect } from 'vitest'
import { PeopleByAge, Person, grouper } from './grouper'

describe('grouper', () => {
  it('should return an array of people grouped by age', () => {
    const people: Person[] = [
      { age: 23, name: 'Marcel' },
      { age: 23, name: 'Paco' },
      { age: 25, name: 'Juan' },
      { age: 25, name: 'Pedro' },
      { age: 23, name: 'Luis' },
      { age: 52, name: 'Pablo' }
    ]
    const expected: PeopleByAge = {
      23: [
        { age: 23, name: 'Marcel' },
        { age: 23, name: 'Paco' },
        { age: 23, name: 'Luis' }
      ],
      25: [
        { age: 25, name: 'Juan' },
        { age: 25, name: 'Pedro' }
      ],
      52: [{ age: 52, name: 'Pablo' }]
    }
    const result = grouper(people)
    expect(result).toEqual(expected)
  })
})
