function extractDelimiter(numbers) {
  if (numbers.startsWith('//')) {
    const parts = numbers.split('\n')[0].slice(2);
    if (parts.startsWith('[')) {
      const delimiters = parts.match(/\[([^\]]*)\]/g).map(d => d.slice(1, -1));
      return new RegExp(delimiters.map(d => d.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')).join('|'));
    }
    return new RegExp(parts);
  }
  return /[\n,]/;
}

function parseNumbers(numbers) {
  if (numbers === '') return [];
  const delimiter = extractDelimiter(numbers);
  const numString = numbers.startsWith('//') ? numbers.split('\n').slice(1).join('\n') : numbers;
  const nums = numString.split(delimiter).map(num => Number(num) || 0);
  const negatives = nums.filter(num => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
  }
  return nums.filter(num => num <= 1000);
}

function add(numbers) {
  const nums = parseNumbers(numbers);
  return nums.reduce((sum, num) => sum + num, 0);
}

export { add };