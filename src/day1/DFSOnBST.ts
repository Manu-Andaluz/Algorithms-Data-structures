function walk(node: BinaryNode<number> | null, needle: number): boolean {
    if (node === null) {
        return false;
    }

    if (node.value === needle) {
        return true;
    }

    if (node.value > needle) {
        return walk(node.left, needle);
    }

    return walk(node.right, needle);
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return walk(head, needle);
}
