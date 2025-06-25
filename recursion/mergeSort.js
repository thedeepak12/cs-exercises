function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = arr.length / 2;
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const res = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      res.push(left[leftIndex]);
      leftIndex++;
    } else {
      res.push(right[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    res.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    res.push(right[rightIndex]);
    rightIndex++;
  }

  return res;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));