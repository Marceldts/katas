export const addAllNumbers = (givenArray: number[]): number => {
  return givenArray.reduce((acc, curr) => acc + curr, 0)
}
