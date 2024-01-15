export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        if (this.length === 0) {
            return -1;
        }

        const temp = this.data[0];
        this.length--;
        if (this.length === 0) {
            this.data = [];
            return temp;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return temp;
    }

    private heapifyDown(idx: number): void {
        const lIndex = this.leftChild(idx);
        const rIndex = this.rightChild(idx);

        if (idx >= this.length || lIndex >= this.length) {
            return;
        }

        const lValue = this.data[lIndex];
        const rValue = this.data[rIndex];
        const currValue = this.data[idx];

        if (lValue < rValue && lValue < currValue) {
            this.data[idx] = lValue;
            this.data[lIndex] = currValue;
            this.heapifyDown(lIndex);
        } else if (rValue < lValue && rValue < currValue) {
            this.data[idx] = rValue;
            this.data[rIndex] = currValue;
            this.heapifyDown(rIndex);
        }
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }

        const p = this.parent(idx);
        const pValue = this.data[p];
        const currValue = this.data[idx];

        if (pValue > currValue) {
            this.data[p] = currValue;
            this.data[idx] = pValue;
            this.heapifyUp(p);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }
    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }
}

