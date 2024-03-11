export const flat = <T>(...givenArrays: T[]): T[] => {
  return givenArrays.reduce((acc, val) => acc.concat(val), [] as T[])
}
