// delete and insert

function dfsDelete(curr: BinaryNode<number> | null, value: number): any {
    if (!curr) {
        return false;
    }

    if (!curr.right && curr.left) {
        curr = null;
    }

    if (curr?.left && !curr?.right) {
        // point
    }

    if (curr?.right && !curr.left) {
        // point
    }

    // you will have to find either the smallest in the right side or the greater in the left side
    // then you will have to replace head with the value that you found, and point the children side to the parent of the current
    // -----
    // for example, we found the greater value in the left side of the current head ( not the actual head, just only the temporal head)
    // then we will have to replace the head with the value, and point the left side (the smallest side) to the parent, of the element
    // that we recently remove
}

function dfsInsert(
    curr: BinaryNode<number> | null,
    value: number,
): BinaryNode<number> {
    if (!curr) {
        const node = { value: value } as BinaryNode<number>;
        curr = node;
        return curr;
    }

    if (curr.value < value) {
        return dfsInsert(curr.right, value);
    }

    return dfsInsert(curr.left, value);
}

function search(curr: BinaryNode<number> | null, needle: number): boolean {
    if (!curr) {
        return false;
    }

    if (curr.value === needle) {
        return true;
    }

    if (curr.value < needle) {
        return search(curr.right, needle);
    }

    return search(curr.left, needle);
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return search(head, needle);
}

