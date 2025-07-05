function parseNumbers(numbers) {
  if (numbers === '') return [];
  if (numbers.includes(',')) return numbers.split(',').map(Number);
  return [Number(numbers) || 0];
}

function add(numbers) {
  const nums = parseNumbers(numbers);
  return nums.reduce((sum, num) => sum + num, 0);
}

export { add };