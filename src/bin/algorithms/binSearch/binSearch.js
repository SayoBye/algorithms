const binSearch = (arr, value) => {
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

const phoneNumbers = [];

for (let i = 88005553535; i <= 88005793535; i++) { // Create array of 240 000 phone numbers
  phoneNumbers.push(i);
}


binSearch(phoneNumbers, 88005564151); // "Position: 10616 Steps: 18"
