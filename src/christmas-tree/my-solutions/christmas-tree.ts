export const drawTree = (height: number): string => {
  if (height < 1) return ''
  let tree = '\n'
  for (let i = 1; i <= height; i++) {
    tree += _drawRow(height, i)
  }
  tree += _drawTrunk(height)
  console.log('🚀 ~ drawTree ~ tree:', tree)
  return tree
}

const _drawRow = (height: number, currentRow: number): string => {
  const spaces = ' '.repeat(height - currentRow)
  const stars = '*'.repeat(currentRow * 2 - 1)
  return `${spaces}${stars}${spaces}\n`
}

const _drawTrunk = (height: number): string => {
  const spaces = ' '.repeat(height - 1)
  return `${spaces}|${spaces}\n`
}
