chocolateBars = ["snickets", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, element) {
  return [element, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  arr.unshift(element)
  return arr
}

function accessElementInArray(arr, index) {
  return arr[index]
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(arr) {
  arr.slice(1)
  return arr
}