export function forEach<E>(list: E[], callback: (element: E) => void) {
  for (const element of list) {
    callback(element)
  }
}
