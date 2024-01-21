export default function bfs(
    graph: WeightedAdjacencyMatrix, // number[][]
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);

    seen[source] = true;
    const q: number[] = [source];

    do {
        const curr = q.shift() as number;
        if (curr === needle) {
            break;
        }

        const adjs = graph[curr];
        for (let i = 0; i < adjs.length; i++) {
            if (adjs[i] === 0) {
                continue;
            }

            if (seen[i]) {
                continue;
            }

            seen[i] = true; // curr = [0 => 1 => 2 => => 4 => 3 => => 5 => 6]
            prev[i] = curr; // 1 = 0, 2 = 0 || 4 = 1 || 3 = 4 || 5 = 4 || 6 = 5
            console.log("curr in prev: ", i);
            q.push(i);
        }

        seen[curr] = true;
    } while (q.length);
    console.table(prev);

    if (prev[needle] === -1) {
        // check we didn't did the prev[i] = curr where is the needle
        return null;
    }

    // build it backwards

    let curr = needle;
    const out: number[] = [];

    while (prev[curr] !== -1) {
        console.log("in while: ", prev[curr]);
        out.push(curr); //   6 5 4 1
        curr = prev[curr]; // 5 4 1 0
    }

    console.log("out: ", out);

    return [source].concat(out.reverse());
}
