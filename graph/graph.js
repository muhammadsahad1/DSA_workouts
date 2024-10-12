class Graph {
    constructor() {
        this.adjecentList = {}
    }

    addVertex(vertex) {
        const graph = this.adjecentList
        if (!graph[vertex]) {
            graph[vertex] = []
        }
    }

    addEdge(vertex, destinationVertex, biDirection = false) {
        let graph = this.adjecentList
        if (!graph[vertex]) {
            this.addVertex(vertex)
        }

        if (!graph[destinationVertex]) {
            this.addVertex(destinationVertex)
        }

        if (graph[vertex].indexOf(destinationVertex) === -1) {
            graph[vertex].push(destinationVertex)
        }

        if (biDirection) {
            if (graph[destinationVertex].indexOf(vertex) === -1) {
                graph[destinationVertex].push(vertex)
            }
        }

    }

    deleteEdge(vertex, destinationVertex) {
        const graph = this.adjecentList

        if (graph[vertex]) {
            graph[vertex] = graph[vertex].filter(stay => stay != destinationVertex)
        }

        if (graph[destinationVertex]) {
            graph[destinationVertex] = graph[destinationVertex].filter(stay => stay != vertex)
        }
    }

    deleteVertex(vertex) {
        const graph = this.adjecentList

        if (graph[vertex]) {
            while (graph[vertex].length) {
                let destinationVertex = graph[vertex].pop()
                this.deleteEdge(vertex, destinationVertex)
            }
        }
        delete graph[vertex]
    }

    bfs(start) {
        let queue = [start]
        let result = []
        let visited = new Set()

        visited.add(start)

        while (queue.length > 0) {
            let vertex = queue.shift()
            result.push(vertex)

            this.adjecentList[vertex].forEach(neighbour => {
                if (!visited.has(neighbour)) {
                    visited.add(neighbour)
                    queue.push(neighbour)
                }
            })
        }
        return result
    }

    dfs(start) {
        let stack = [start]
        let visited = new Set()
        let result = []
        visited.add(start)
        while (stack.length > 0) {
            let vertex = stack.pop()
            result.push(vertex)
            this.adjecentList[vertex].forEach(neighbour => {
                if (!visited.has(neighbour)) {
                    visited.add(neighbour)
                    stack.push(neighbour)
                }
            })
        }
        return result
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('G');
graph.addEdge('A', 'B', true);
graph.addEdge('A', 'C', true);
graph.addEdge('B', 'C', true);
graph.addEdge('C', 'D', true);

console.log("BFS travsal => ", graph.bfs("A"));
console.log("DFS traversal from vertex 'B':", graph.dfs('B'));
