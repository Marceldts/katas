export const alphabetical = (unsorted: string[]): string[] => {
  return unsorted.sort((a, b) => a.localeCompare(b))
}
