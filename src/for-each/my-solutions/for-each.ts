export function forEach<T>(list: T[], callback: (element: T) => void) {
  for (const element of list) {
    callback(element)
  }
}
