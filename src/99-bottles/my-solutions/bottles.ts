export const LAST_VERSE = `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
`

export const ONE_BOTTLE_VERSE = `1 bottle of beer on the wall, 1 bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.
`

export const TWO_BOTTLES_VERSE = `2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
`

export const sing = (start: number, end: number = start): string => {
  if (start <= 0) return LAST_VERSE
  let result = ''
  for (let i = start; i >= end; i--) {
    result += _getVerse(i)
    if (i !== end) result += '\n'
  }
  return result
}

const _getVerse = (number: number): string => {
  switch (number) {
    case 0:
      return LAST_VERSE
    case 1:
      return ONE_BOTTLE_VERSE
    case 2:
      return TWO_BOTTLES_VERSE
    default:
      return `${number} bottles of beer on the wall, ${number} bottles of beer.
Take one down and pass it around, ${number - 1} bottles of beer on the wall.
`
  }
}
