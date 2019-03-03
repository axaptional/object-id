/**
 * Represents an object ID store.
 */
export interface OidStore {

  /**
   * Retrieves an object identifier for the given object.
   * @param object The object to get the identifier for
   */
  (object: object): number

  /**
   * Retrieves an object identifier for the given object.
   * @param object The object to get the identifier for
   */
  id (object: object): number

  /**
   * Checks whether the given object corresponds to the given ID.
   * @param object The object to check
   * @param id The ID to check against
   */
  has (object: object, id: number): boolean

  /**
   * Clears the object ID store.
   */
  clear (): void

}

/**
 * Retrieves an object identifier for the given object.
 */
export const id: OidStore = (() => {
  let map: WeakMap<object, number> = new WeakMap()
  let next: number = 1

  const _id = (object: object): number => {
    if (!map.has(object)) {
      map.set(object, next++)
    }
    return map.get(object)!
  }

  _id.id = _id

  _id.has = (object: object, id: number): boolean => _id(object) === id

  _id.clear = (): void => {
    map = new WeakMap()
  }

  return _id
})()
