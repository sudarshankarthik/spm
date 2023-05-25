class cpMap {
    constructor(activities) {
        this.nodes = activities.map((activity) => activity.name)
        this.adj = {}
        this.nodes.map(
            (node) => {
                let adj = []
                for (let i in activities) {
                    const list = activities[i].predecessors;
                    if (list.includes(node))
                        adj.push(activities[i].name)
                }
                this.adj[node] = adj
                
            }
        )
        this.attributes = activities.map(
            (activity) => {
                return {duration: activity.duration}
            }
        )

        // Forward Pass Breath First Searsh from starting
        const fp_bfs = (Graph,node) => {
            var queue = []
            queue.push(node)
            var visited = [node]
            while (queue.length >= 1) {
                var v = queue.shift()
                for (const w in this.adj[v]) {
                    if (!visited.includes(w)) {
                        queue.push(w)
                        console.log(w);
                        visited.push(w)
                    }
                }
            }
            return 1
        }
        console.log(fp_bfs(this.nodes,this.adj));

    }

}

const exampleActivites = [
    {
        name: "A",
        duration: 6,
        predecessors: [],
    },
    {
        name: "B",
        duration: 4,
        predecessors: [],
    },
    {
        name: "C",
        duration: 3,
        predecessors: ["A"],
    },
    {
        name: "D",
        duration: 4,
        predecessors: ["B"],
    },
    {
        name: "E",
        duration: 3,
        predecessors: ["B"],
    },
    {
        name: "F",
        duration: 10,
        predecessors: [],
    },
    {
        name: "G",
        duration: 3,
        predecessors: ["E", "F"],
    },
    {
        name: "H",
        duration: 2,
        predecessors: ["C","D"],
    }
];

const cpm = new cpMap(exampleActivites);

// console.log(cpm.nodes);
// console.log(cpm.adj);
// console.log(cpm.attributes);