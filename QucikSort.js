function quickSort(arr) {
  // Base case: if the array has 1 or 0 elements, it is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Choose a pivot (we'll use the last element for simplicity)
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  // Partition the array into left and right sub-arrays
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively sort the left and right partitions, then combine them
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
const arr = [10, 7, 8, 9, 1, 5];
const sortedArr = quickSort(arr);
console.log("Sorted array:", sortedArr);
