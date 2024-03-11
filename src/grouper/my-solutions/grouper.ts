export type Person = {
  age: number
  name: string
}

export type PeopleByAge = {
  [age: number]: Person[]
}

export const grouper = (people: Person[]): PeopleByAge => {
  return people.reduce((acc, person) => {
    if (!acc[person.age]) {
      acc[person.age] = []
    }
    acc[person.age].push(person)
    return acc
  }, {} as PeopleByAge)
}
