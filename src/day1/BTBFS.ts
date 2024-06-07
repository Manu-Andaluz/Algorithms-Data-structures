import Queue from "@code/Queue";

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const queue = new Queue();
    queue.enqueue(head);

    while (queue.peek() !== undefined) {
        let curr = queue.deque() as BinaryNode<number>;

        if (curr.value === needle) {
            return true;
        }

        curr.left && queue.enqueue(curr.left);

        curr.right && queue.enqueue(curr.right);
    }

    return false;
}
