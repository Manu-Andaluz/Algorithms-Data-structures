type DoublyNode<T> = {
    prev?: DoublyNode<T>;
    value: T;
    next?: DoublyNode<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: DoublyNode<T>;
    private tail?: DoublyNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    insertAt(item: T, index: number): void {
        if (index > this.length || index < 0 || !this.head || !this.tail) {
            throw new Error("Oh no");
        }

        if (index === 0) {
            return this.prepend(item);
        }

        if (index === this.length - 1) {
            return this.append(item);
        }

        this.length++;
        const node = { value: item } as DoublyNode<T>;
        let curr = this.head;

        let i = 1;
        while (curr.next) {
            curr = curr.next;
            if (i === index) {
                node.next = curr;
                if (curr.prev) {
                    curr.prev.next = node;
                }
                curr.prev = node;
                node.prev = curr.prev;
                return;
            }

            i++;
        }
    }

    remove(item: T): T | undefined {
        if (!this.head || !this.tail) {
            return;
        }

        if (item === this.head.value) {
            return this.removeAt(0);
        }

        if (item === this.tail.value) {
            return this.removeAt(this.length - 1);
        }

        let curr = this.head as DoublyNode<T>;
        for (let i = 1; i < this.length && curr; i++) {
            curr = curr.next as DoublyNode<T>;
            if (curr.value === item) {
                this.length--;
                return this.removeNode(curr);
            }
        }

        return;
    }

    removeAt(index: number): T | undefined {
        if (index > this.length - 1 || index < 0 || !this.head || !this.tail) {
            return;
        }

        this.length--;

        if (index === this.length) {
            const temp = this.tail;
            this.tail = this.tail.prev;

            if (this.tail?.next) {
                this.tail.next = undefined;
            }

            return temp.value;
        }

        let curr = this.head as DoublyNode<T>;

        if (this.length === 0) {
            this.head = this.tail = undefined;
            return curr.value;
        }

        if (index === 0) {
            this.head = curr.next;
            if (this.head?.prev) {
                this.head.prev = undefined;
            }
            return curr.value;
        }

        for (let i = 1; i < this.length && curr; i++) {
            curr = curr.next as DoublyNode<T>;
            if (i === index) {
                return this.removeNode(curr);
            }
        }

        return;
    }

    append(item: T): void {
        this.length++;
        const node = { value: item } as DoublyNode<T>;

        if (!this.tail || !this.head) {
            this.head = this.tail = node;
            return;
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    prepend(item: T): void {
        this.length++;
        const node = { value: item } as DoublyNode<T>;

        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        this.head.prev = node;
        node.next = this.head;
        this.head = node;

        if (this.length === 2) {
            this.tail = node;
        }
    }

    get(index: number): T | undefined {
        if (index > this.length || !this.head || !this.tail) {
            return;
        }

        let curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next as DoublyNode<T>;
        }

        return curr.value;
    }

    removeNode(node: DoublyNode<T>): T {
        const aux = node;
        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }
        return aux.value;
    }
}
