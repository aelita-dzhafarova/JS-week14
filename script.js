// Intersection function for 2 arrays
function getIntersection2(arr1, arr2) {
  return [arr1, arr2].reduce((acc, currentValue) => {
    return acc.filter(res => currentValue.includes(res));
  })
}

// Intersection function for 3 arrays
function getIntersection3(arr1, arr2, arr3) {
  return [arr1, arr2, arr3].reduce((acc, currentValue) => {
    return acc.filter(res => currentValue.includes(res));
  })
}