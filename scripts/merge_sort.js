function sort (unsortedArray) {
  if (unsortedArray.length < 2) {
    let sortedArrayToMerge = unsortedArray

    return sortedArrayToMerge
  }

  let splitPoint = Math.floor(unsortedArray.length / 2)
  let leftUnsortedArray = unsortedArray.slice(0, splitPoint)
  let rightUnsortedArray = unsortedArray.slice(splitPoint, unsortedArray.length)

  return mergeSortedArrays(sort(leftUnsortedArray), sort(rightUnsortedArray))
}

function mergeSortedArrays(leftArray, rightArray) {
  let mergedArray = []

  while (leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] <= rightArray[0]) {
      mergedArray.push(leftArray.shift())
    } else {
      mergedArray.push(rightArray.shift())
    }
  }
  while (leftArray.length) {
    mergedArray.push (leftArray.shift())
  }
  while (rightArray.length) {
    mergedArray.push(rightArray.shift())
  }
  return mergedArray
}


module.exports = sort, mergeSortedArrays
