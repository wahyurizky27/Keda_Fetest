function findMaxSubarraySum(arr, length) {
  if (length > arr.length) {
    return null; 
  }

  let maxSum = 0;
  for (let i = 0; i < length; i++) {
    maxSum += arr[i];
  }

  let currentSum = maxSum;
  for (let i = length; i < arr.length; i++) {
    currentSum = currentSum - arr[i - length] + arr[i];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(findMaxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(findMaxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(findMaxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
