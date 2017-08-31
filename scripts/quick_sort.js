function quickSort(unsortedArray) {
  if (unsortedArray <= 1) {
    return unsortedArray
  }

  let splitPoint = unsortedArray[unsortedArray.length - 1 ]
  let leftArray = []
  let rightArray = []

  for (let i = 0; i < unsortedArray.length - 1; i ++) {
    if (unsortedArray[i] < splitPoint) {
      leftArray.push(unsortedArray[i])
    } else {
      rightArray.push(unsortedArray[i])
    }
  }
  return [...quickSort(leftArray), splitPoint, ...quickSort(rightArray)]

}


module.exports = quickSort
