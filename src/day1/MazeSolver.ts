const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

function walk(maze: string[], wall: string, current: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
    // base cases

    if (current.x > maze[0].length || current.y > maze.length || current.x < 0 || current.y < 0) {
        // we go off the map
        return false;
    }

    if (maze[current.y][current.x] === wall) {
        // we hit a wall
        return false;
    }

    if (current.x === end.x && current.y === end.y) {
        // we hit the end
        path.push(end);
        return true;
    }

    if (seen[current.y][current.x]) {
        // we already visit them
        return false;
    }

    // pre -> recursion -> post

    // pre
    seen[current.y][current.x] = true;
    path.push(current);

    // recursion
    for (let i = 0; i < directions.length; i++) {
        const [x, y] = directions[i];
        if (walk(maze, wall, { x: current.x + x, y: current.y + y }, end, seen, path)) {
            return true;
        }
    }

    // post
    path.pop();

    return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen = [] as boolean[][];
    let path = [] as Point[];

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[i].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);
    return path;
}
