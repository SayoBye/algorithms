const binSearch = (arr, value) => {
  let low = 0;
  let high = arr.length - 1;
  let steps = 1;
  
  while(low !== high) {
    let mid = (high === 1) ? 0 : Math.ceil((low + high) /2);;
    let result = arr[mid];
    if (result === value) {
      return console.log(`Position: ${mid} Steps: ${steps}`);
    };
    if (result > value) {
      high = mid;
      steps += 1;
    };
    if (result < value) {
      low = mid;
      steps += 1;
    };
    if (mid <= 0 || mid === arr.length - 1) {
      return console.log(null);
    }
  };
}

const phoneNumbers = [];

for (let i = 88005553535; i <= 88005793535; i++) { // Create array of 240 000 phone numbers
  phoneNumbers.push(i);
}

binSearch(phoneNumbers, 88005564151); // "Position: 10616 Steps: 18";
