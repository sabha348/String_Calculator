function add(numbers) {
  if (numbers === '') return 0;
  return Number(numbers) || 0;
}

export { add };