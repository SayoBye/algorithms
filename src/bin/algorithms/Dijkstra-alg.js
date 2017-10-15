const graph = {
  start: {
    A: 6,
    B: 2,
  },
  A: {
    end: 1, 
  },
  B: {
    A: 2,
    end: 5,
  },
  end: {},
} 

const costs = {
  A: 6,
  B: 2,
  end: Infinity,
} 

const parents = {
  A: 'start',
  B: 'start',
  end: null,
}

const processed = []; 

const findSmallestCostNode = (costs) => {
  let smallestPath = Infinity;
  let smallestCostNode = null;
  for (node in costs) {
    if (processed.indexOf(node) <= -1 && smallestPath > costs[node]) {
      smallestPath = costs[node];
      smallestCostNode = node;
    }
  }
  return smallestCostNode;
}

const alg = (graph) => {
  while(Object.keys(graph).length - 1 !== processed.length) {
    let node = findSmallestCostNode(costs);
    let neighbours = Object.keys(graph[node]);
    neighbours.forEach(nbr => {
      if (costs[nbr] > costs[node] + graph[node][nbr]) { 
        costs[nbr] = costs[node] + graph[node][nbr];
        parents[nbr] = node;
        processed.push(node);
      }
    });  
  }
const findWay = parents => {
  let currentNode = parents.end;
  let way = 'end <- ';
  const length = Object.keys(parents).length;
  for (let i = 0; i < length; i++) {
    way += `${currentNode} <- `;
    currentNode = parents[currentNode];
  }
  return way.slice(0,-3);
} 
  return `Кратчайший путь: ${costs.end} \nПуть: ${findWay(parents)}`
}

console.log(alg(graph));
