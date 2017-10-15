const graph = {
  start: {
    A: 5,
    B: 2,
  },
  A: {
    C: 4,
    D: 2,
  },
  B: {
    A: 8,
    D: 7,
  },
  C: {
    D: 6,
    end: 3,
  },
  D: {
    end: 1,
  },
  end: {},
} 

const costs = {
  A: 5,
  B: 2,
  C: Infinity,
  D: Infinity,
  end: Infinity,
} 

const parents = {
  A: 'start',
  B: 'start',
  C: null,
  D: null,
  end: null,
}

const processed = []; 
 
const findSmallestCostNode = (costs) => {
  let smallestPath = null;
  let smallestCostNode = Infinity;
  for (node in costs) {
    if (processed.indexOf(node) == -1 && smallestCostNode > costs[node] && node !== 'end') {
      smallestCostNode = costs[node];
      smallestPath = node;
    }
  }
  return smallestPath;
}
 
const alg = (graph) => {
  while (Object.keys(graph).length - 2 !== processed.length) {
    let node = findSmallestCostNode(costs);
    let neighbours = Object.keys(graph[node]);
    neighbours.forEach(nbr => {
      if (costs[nbr] > costs[node] + graph[node][nbr]) {
        costs[nbr] = costs[node] + graph[node][nbr];
        parents[nbr] = node;
      } 
    });  
    processed.push(node);
  }
const findWay = parents => {
  let currentNode = parents.end;
  let way = 'end <- ';
  while (currentNode !== 'start') {
    way += `${currentNode} <- `;
    currentNode = parents[currentNode];  
  }
  way += 'start';
  return way;
}
  return `Cost: ${costs.end} \nPath: ${findWay(parents)}`
}

console.log(alg(graph));


