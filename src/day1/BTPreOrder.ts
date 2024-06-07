function walk(node: BinaryNode<number> | null, arr: number[]) {
    if (!node) {
        return arr;
    }

    arr.push(node.value);
    walk(node.left, arr);
    walk(node.right, arr);

    return arr;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
