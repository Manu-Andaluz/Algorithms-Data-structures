export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    if (a?.value !== b?.value) {
        return false;
    }

    if (a === null && b === null) {
        return true;
    }

    if (a === null || b === null) {
        return false;
    }

    return compare(a.left, b.left) && compare(a.right, b.right);
}
