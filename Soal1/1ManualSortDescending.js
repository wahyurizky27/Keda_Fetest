function manualSortDescending(numbers) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] < numbers[j]) {
        const temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
      }
    }
  }
  return numbers;
}

const input = [1, 2, 4, 3, 5, 3, 2, 1];
const output = manualSortDescending(input);
console.log(output); // [5, 4, 3, 3, 2, 2, 1, 1]
