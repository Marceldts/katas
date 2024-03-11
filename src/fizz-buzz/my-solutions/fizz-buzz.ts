export type FizzBuzz = number | 'fizz' | 'buzz' | 'fizzbuzz'

export const fizzBuzz = (givenNumber: number): FizzBuzz[] => {
  return Array.from({ length: givenNumber }, (_, i) => i).map((number: number) => {
    const isDivisibleBy3 = (number + 1) % 3 === 0
    const isDivisibleBy5 = (number + 1) % 5 === 0

    return isDivisibleBy3 && isDivisibleBy5
      ? 'fizzbuzz'
      : isDivisibleBy3
      ? 'fizz'
      : isDivisibleBy5
      ? 'buzz'
      : number + 1
  })
}
