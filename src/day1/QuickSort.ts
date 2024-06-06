function swap(arr: number[], i: number, x: number) {
    const temp = arr[i];
    arr[i] = arr[x];
    arr[x] = temp;
}

function qs(arr: number[], low: number, high: number) {
    // base case
    if (low >= high) {
        return;
    }

    const idx = partition(arr, low, high);

    qs(arr, low, idx - 1);
    qs(arr, idx + 1, high);
}

function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];
    let idx = low;

    for (let i = low; i < high; i++) {
        if (arr[i] <= pivot) {
            swap(arr, i, idx);
            idx++;
        }
    }

    arr[high] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
