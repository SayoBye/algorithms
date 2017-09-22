export default (arr, value) => {
  const low = 0;
  const high = arr.length - 1;

  const search = (low, high, steps) => {
    const mid = (high === 1) ? 0 : Math.ceil((low + high) /2);;
    const result = arr[mid];
    
    if (result === value) return `Position: ${mid} Steps: ${steps}`;
    if (mid <= 0 || mid === arr.length - 1) return null;
    if (value < result) return search(low, mid, ++steps);
    if (value > result) return search(mid, high, ++steps);
  }
  return search(low, high, 1);
}


