type Node<T> = {
    value: T;
    nextNode?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T) {
        const node = { value: item } as Node<T>;

        this.length++;
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        this.tail.nextNode = node;
        this.tail = node;
    }

    deque() {
        if (!this.head) {
            return;
        }

        this.length--;

        const item = this.head;
        this.head = this.head.nextNode;

        if (this.length === 0) {
            this.tail = undefined;
        }

        return item.value;
    }

    peek() {
        return this.head?.value;
    }
}
