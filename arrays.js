chocolateBars = ["snickets", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, element) {
  return [element, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  return arr.unshift(element)
}