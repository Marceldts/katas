export const fruitCounter = (fruits: string[]): { [key: string]: number } => {
  return fruits.reduce(
    (acc, fruit) => {
      acc[fruit] = (acc[fruit] || 0) + 1
      return acc
    },
    {} as { [key: string]: number }
  )
}
