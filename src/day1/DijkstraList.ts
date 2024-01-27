function getLowestUnvisited(seen: boolean[], dists: number[]): number {
    let idx = -1;
    let lowestDistance = Infinity;

    for (let i = 0; i < seen.length; i++) {
        //
        if (seen[i]) {
            continue;
        }

        if (lowestDistance > dists[i]) { 
            lowestDistance = dists[i];
            idx = i;
        }
    }

    return idx;
}

function hasUnvisited(seen: boolean[], dists: number[]): boolean {
    return seen.some((s, i) => !s && dists[i] < Infinity);
}

export default function dijkstra_list(
    source: number,
    sink: number,
    arr: WeightedAdjacencyList,
): number[] {
    const seen = new Array(arr.length).fill(false); 
    const dists = new Array(arr.length).fill(Infinity); // this keeps track of the weights,is used to keep track of the current known distances
    const prev = new Array(arr.length).fill(-1); // this keeps tracks of what vertex is connected to the other ones, is used to store 
// predecessor information for reconstructing the shortest paths
    dists[source] = 0;

    while (hasUnvisited(seen, dists)) { // check whether if there are still unvisited vertices 
        const curr = getLowestUnvisited(seen, dists); // index of the lowest distance value
        seen[curr] = true;

        const adj = arr[curr]; // [{to: 1, weight: 3}]
        for (let i = 0; i < adj.length; i++) {
            const edge = adj[i];

            if (seen[edge.to]) {
                continue;
            }

            const dist = dists[curr] + edge.weight; // get the distance for the next vertex

            if (dist < dists[edge.to]) { // compare new weight with the old one, can be infinity or some value 
                dists[edge.to] = dist; // set the total value of with the weights
                prev[edge.to] = curr;  // set the index 
            }
        }
    }

    const out: number[] = [];
    let curr = sink;

    while (prev[curr] !== -1) { // walk backwards
        out.push(curr);
        curr = prev[curr];
    }

    out.push(source);
    return out.reverse();
}
