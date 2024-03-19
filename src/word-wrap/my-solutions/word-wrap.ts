export const wrap = (text: string, column: number): string => {
  if (text === '') return ''
  if (text.length <= column) return text
  let counter = 0
  let result = ''
  for (let i = 0; i < text.length; i++) {
    if (counter === column) {
      result += '\n'
      counter = 0
    }
    result += text[i]
    counter++
  }
  return result
}
