const qsort = (arr) => {
  const sortedArr = [];
  let less = [];
  let greater = [];
  
  if (arr.length <= 1) return arr;
  else {
    const pivot = arr[Math.round((arr.length - 1) / 2)];
    arr.forEach(elem => {
      if (elem < pivot) less.push(elem);
      if (elem > pivot) greater.push(elem);
    })  
    return sortedArr.concat(qsort(less), pivot, qsort(greater));
  }
}


const arr = [5,51,4,1,6,8,63,142,2,3]

console.log(`Array: ${arr}`);
console.log(`Sorted Array: ${qsort(arr)}`);
