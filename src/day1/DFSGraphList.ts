function walk(
    graph: WeightedAdjacencyList,
    curr: number,
    needle: number,
    seen: boolean[],
    path: number[],
): boolean {
    if (seen[curr]) {
        return false;
    }

    seen[curr] = true;

    path.push(curr);
    if (curr === needle) {
        return true;
    }

    const list = graph[curr]; // you get something like this : [ { to: 1, weigh: 3 }, { to: 2, weight: 1 } ]
    for (let i = 0; i < list.length; i++) {
        const edge = list[i];

        if (walk(graph, edge.to, needle, seen, path)) {
            return true;
        }
    }

    path.pop();

    return false;
}

export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    // you get something like this
    /* 
   *    graph:  [
      [ { to: 1, weight: 3 }, { to: 2, weight: 1 } ],
      [ { to: 4, weight: 1 } ],
      [ { to: 3, weight: 7 } ],
      [],
      [ { to: 1, weight: 1 }, { to: 3, weight: 5 }, { to: 5, weig
ht: 2 } ],
      [ { to: 2, weight: 18 }, { to: 6, weight: 1 } ],
      [ { to: 3, weight: 1 } ]
    ]

*/
    const seen = new Array(graph.length).fill(false);
    const path: number[] = [];

    walk(graph, source, needle, seen, path);

    if (path.length === 0) {
        return null;
    }

    return path;
}

