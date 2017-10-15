const graph = {
  start: ['Bob', 'Claire', 'Alice'],
  Bob: ['Anuj', 'Peggi'],
  Claire: ['Tom', 'Jonny'],
  Alice: ['Peggi'],
  Peggi: [],
  Anuj: [],
  Tom: [],
  Jonny: [],
}


const checkPerson = (person) => person === 'Peggi' ? true : false; // Нужный нам элемент - "Peggi"
const searched = [];
let queue = [];

const BFS = (graph) => {
  queue = queue.concat(graph.start);
  let count = 0;
  while (queue.length !== 0) {
    count += 1;
    let person = queue.shift();
    if (searched.indexOf(person) >= -1) {
      if (checkPerson(person)) {
        return [person, count]; 
      } 
      else {
        queue = queue.concat(graph[person]); 
        searched.push(person);   
      }   
    }
  }
  return ['Trader not found', count]
}


const result = BFS(graph);
console.log(`Person: ${ result[0]}\n Steps: ${result[1]}`);

