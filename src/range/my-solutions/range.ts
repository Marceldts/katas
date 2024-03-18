export const range = (firstIndex: number, lastIndex: number = 0): number[] => {
  const start = firstIndex < lastIndex ? lastIndex : firstIndex
  const end = firstIndex < lastIndex ? firstIndex : lastIndex

  return Array.from({ length: start - end + 1 }, (_, ind) => ind + end)
}
