/* eslint-disable no-unused-vars */
/**
 * Class Graph
 */
class Graph {
  /**
   * @function constructor
  */
  constructor() {
    this.vertexList = [];
    this.adjacencyList = {};
  }

  /**
   * @function addVertex
   * @param {type} vertex
   */
  addVertex(vertex) {
    this.vertexList.push(vertex);
    this.adjacencyList[vertex] = [];
  }

  /**
   * @function addEdge
   * @param {type} vertex
   * @param {type} edge
  */
  addEdge(vertex, edge) {
    if (this.adjacencyList.hasOwnProperty(vertex)) {
      this.adjacencyList[vertex].push(edge);
      if (this.adjacencyList.hasOwnProperty(edge)) {
        this.adjacencyList[edge].push(vertex);
      }
    }
  }

  /**
   * @function toString
   * @return {type} {description}
   */
  toString() {
    let stringReturn = '';
    for (const vertex of this.vertexList) {
      stringReturn += `${vertex} -> ` +
        `${this.adjacencyList[vertex]}\n`.replace(/\s*,\s*/g, ' ');
    }

    return stringReturn;
  }

  /**
   * @function breadthFirstSearch
   * @param {type} initialVertex
   * @param {type} callback
   */
  breadthFirstSearch(initialVertex, callback) {
    const vertexMap = {};
    const visitedVertexMap = {};
    vertexMap[initialVertex] = initialVertex;

    while (Object.keys(vertexMap).length > 0) {
      const vertex = Object.keys(vertexMap).shift();
      const adjacencyList = this.adjacencyList[vertex];

      visitedVertexMap[vertex] = vertex;

      for (const adjacency of adjacencyList) {
        if (!visitedVertexMap[adjacency]) {
          visitedVertexMap[adjacency] = adjacency;
          vertexMap[adjacency] = adjacency;
        }
      }
      callback(vertex);
      delete vertexMap[vertex];
    }
  }

  /**
   * @function depthFirstSearch
   * @param {type} initialVertex
   * @param {type} callback
   */
  depthFirstSearch(initialVertex, callback) {
    this.depthFirstVisit(initialVertex, this.adjacencyList[initialVertex],
        {}, callback);
  }

  /**
   * @function depthFirst
   * @param  {type} vertex        {description}
   * @param  {type} adjacencyList {description}
   * @param  {type} visitedVertexMap {description}
   * @param  {type} callback {description}
   */
  depthFirstVisit(vertex, adjacencyList, visitedVertexMap, callback) {
    visitedVertexMap[vertex] = vertex;
    callback(vertex);
    for (const adjacency of adjacencyList) {
      const adjacencyListAux = this.adjacencyList[adjacency];
      if (!visitedVertexMap[adjacency]) {
        this.depthFirstVisit(adjacency, adjacencyListAux,
            visitedVertexMap, callback);
      }
    }
  }
}
