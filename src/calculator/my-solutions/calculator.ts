export const calculator = (input: string): number => {
  if (input === '') return 0
  const stringifiedSequence = _getStringifiedSequence(input.replace(/ /g, ''))
  const numberSequence = stringifiedSequence.map(value => parseInt(value))

  return numberSequence.reduce((result, value) => result + value, 0)
}

const _getStringifiedSequence = (input: string): string[] => {
  let stringifiedNumber = ''
  const sequence: string[] = []

  for (const char of input) {
    const thereIsSign: boolean = ['+', '-'].includes(char)
    if (thereIsSign) {
      sequence.push(stringifiedNumber)
      stringifiedNumber = ''
    }
    stringifiedNumber += char
  }
  const parsedNumber = stringifiedNumber
  sequence.push(parsedNumber)
  return sequence
}
