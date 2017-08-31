function bubbleSort (numberArray) {
  for (let i = 0; i < numberArray.length; i++) {

    for (let j = 0; j < numberArray.length; j ++) {
      // console.log(numberArray)
      if (numberArray[j] > numberArray[j + 1]) {
        [ numberArray[j], numberArray[ j + 1]] = [numberArray[ j + 1], numberArray[j]]
      }
    }

  }
  return numberArray
}

// console.log(bubbleSort([7,4,6,2,3,5,1,8]))

// bubbleSort([10,5,87,2])

module.exports = bubbleSort
