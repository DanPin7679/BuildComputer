let v;

let adjList;
let listOfAllPaths = [];

function Graph(vertices) {
  v = vertices;

  initAdjList();
}

function initAdjList() {
  adjList = new Array(v);

  for (let i = 0; i < v; i++) {
    adjList[i] = [];
  }
}

function addEdge(u, v) {
  adjList[u].push(v);
}

function findAllPaths(s, d) {
  let isVisited = new Array(v);
  for (let i = 0; i < v; i++) isVisited[i] = false;
  let pathList = [];

  pathList.push(s);

  printAllPathsUtil(s, d, isVisited, pathList);
}

function printAllPathsUtil(u, d, isVisited, localPathList) {
  if (u == d) {
    console.log(localPathList);
    listOfAllPaths.push.apply(listOfAllPaths, localPathList);
    return;
  }

  isVisited[u] = true;
  for (let i = 0; i < adjList[u].length; i++) {
    if (!isVisited[adjList[u][i]]) {
      localPathList.push(adjList[u][i]);
      printAllPathsUtil(adjList[u][i], d, isVisited, localPathList);

      localPathList.splice(localPathList.indexOf(adjList[u][i]), 1);
    }
  }

  isVisited[u] = false;
}

const myEdges = [
  { from: 0, to: 1 },
  { from: 0, to: 3 },
  { from: 2, to: 0 },
  { from: 2, to: 1 },
  { from: 1, to: 3 },
  { from: 0, to: 4 },
  { from: 4, to: 3 },
];

export const getAllPaths = (source, destination, edges, nbNodes) => {
  Graph(nbNodes);

  edges.map((edge) => addEdge(edge.from, edge.to));

  findAllPaths(s, d);
};

// arbitrary source
let s = 2;

// arbitrary destination
let d = 3;
getAllPaths(s, d, myEdges, 5);
console.log(listOfAllPaths);
