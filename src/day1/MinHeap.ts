export default class MinHeap {
    private data: number[];
    public length: number;

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number) {
        this.data[this.length] = value;
        this.length++;
        this.heapifyUp(this.length - 1);
    }

    delete(): number | undefined {
        if (this.length === 0) {
            return;
        }

        const head = this.data[0];
        this.length--;
        this.data[0] = this.data[this.length];
        this.data.length = this.length;

        this.heapifyDown(0);
        return head;
    }

    heapifyUp(index: number): void {
        if (index === 0) {
            return;
        }

        const parentIndex = Math.floor((index - 1) / 2);
        const current = this.data[index];
        const parent = this.data[parentIndex];

        if (parent > current) {
            this.data[parentIndex] = current;
            this.data[index] = parent;
            return this.heapifyUp(parentIndex);
        }
    }

    heapifyDown(index: number): void {
        const left = 2 * index + 1;
        const right = 2 * index + 2;

        if (index >= this.length || left >= this.length) {
            return;
        }

        const current = this.data[index];

        const minVal = this.data[left] < this.data[right] ? this.data[left] : this.data[right];
        const minValIndex = this.data[left] < this.data[right] ? left : right;

        if (minVal && minVal < current) {
            this.data[minValIndex] = current;
            this.data[index] = minVal;
            return this.heapifyDown(minValIndex);
        }
    }
}
