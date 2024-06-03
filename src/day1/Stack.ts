type StackNode<T> = {
    value: T;
    prev?: StackNode<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: StackNode<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T) {
        const node = { value: item } as StackNode<T>;

        this.length++;
        if (!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }

        this.length--;

        const node = this.head;
        this.head = node.prev;
        node.prev = undefined;

        return node.value;
    }

    peek() {
        return this.head?.value;
    }
}
