type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head = node;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length || !this.head) {
            throw new Error("Oh no");
        }

        const node = { value: item } as Node<T>;

        let current = this.head as Node<T> | undefined;

        for (let i = 0; current && i < idx - 1; i++) {
            current = current.next;
        }

        if (!current) {
            throw new Error("Oh no");
        }

        this.length++;

        if (current == this.head) {
            return this.prepend(node.value);
        } else if (current == this.tail) {
            return this.append(node.value);
        }

        node.next = current.next;
        current.next = node;
    }

    append(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    remove(item: T): T | undefined {
        if (!this.head) {
            return;
        }

        let current = this.head as Node<T> | undefined;
        let prev: Node<T> | undefined;

        for (let i = 0; i < this.length; i++) {
            if (current?.value == item) {
                break;
            }
            prev = current;
            current = current?.next;
        }

        if (!current || current.value !== item) {
            // throw new Error("Oh no");
            return;
        }

        this.length--;

        if (this.length == 0) {
            this.head = this.tail = undefined;
        } else if (!prev) {
            const temp = this.head;
            this.head = this.head.next;
            temp.next = undefined;
        } else if (current == this.tail) {
            prev.next = undefined;
            this.tail = prev;
        } else {
            prev.next = current.next;
        }

        return current.value;
    }

    get(idx: number): T | undefined {
        if (!this.head) return;

        let current = this.head as Node<T> | undefined;

        for (let i = 0; i < idx; i++) {
            current = current?.next;
        }

        if (!current) return;

        return current.value;
    }

    removeAt(idx: number): T | undefined {
        if (!this.head) return;
        else if (idx > this.length) throw new Error("Oh no");

        let current = this.head as Node<T> | undefined;

        for (let i = 0; i < idx; i++) {
            current = current?.next;
        }

        if (!current) {
            throw new Error("Oh no");
        }

        return this.remove(current.value);
    }
}

