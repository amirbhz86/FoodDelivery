// @ts-nocheck
interface InputState {
  array: {}[],
  findKey: {},
  replaceValue: {},
}

export const editArrayObjects = (arrayObject: Object[], findKey: Object, replace: any) => {
  let addObject
  let findProperty = Object.keys(findKey)[0]
  let findValue = findKey[Object.keys(findKey)[0]]
  let replaceProperty = Object.keys(replace)[0]
  let replaceValue = replace[Object.keys(replace)[0]]

    let previousArray = arrayObject
    let deletedArray = previousArray.filter((value) => {
      if (value[findProperty] == findValue) {
        addObject = value

      }
      return value[findProperty] !== findValue
    })
    addObject[replaceProperty] = replaceValue
    let newObject = [ ...deletedArray , addObject ]
    return newObject


}

