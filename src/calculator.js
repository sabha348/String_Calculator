function extractDelimiter(numbers) {
  if (numbers.startsWith('//')) {
    return new RegExp(numbers.split('\n')[0].slice(2));
  }
  return /[\n,]/;
}

function parseNumbers(numbers) {
  if (numbers === '') return [];
  const delimiter = extractDelimiter(numbers);
  const numString = numbers.startsWith('//') ? numbers.split('\n').slice(1).join('\n') : numbers;
  return numString.split(delimiter).map(num => Number(num) || 0);
}

function add(numbers) {
  const nums = parseNumbers(numbers);
  return nums.reduce((sum, num) => sum + num, 0);
}

export { add };