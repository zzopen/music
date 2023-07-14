import _ from 'lodash-es'

function isEmptyObject(obj: object) {
  if (typeof obj == 'object' && !Array.isArray(obj)) {
    for (const _ in obj) {
      return false
    }

    return true
  }

  return false
}

const isEmpty = _.isEmpty //  // [],{},'',null,undefined,map,set
const omit = _.omit

export { omit, isEmpty, isEmptyObject }
