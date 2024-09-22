export default function bfs(
    graph: WeightedAdjacencyMatrix, // number[][]
    source: number,
    needle: number,
): number[] | null {
    const seen: boolean[] = new Array(graph.length).fill(false);
    const prev: number[] = [];

    do {} while (prev.length > graph.length);

    const path: number[] = [];
    return path;
}
