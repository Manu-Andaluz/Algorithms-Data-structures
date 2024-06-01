export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = 0; j <= arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const x = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = x;
            }
        }
    }
}

/* 
 export default function bubble_sort(arr: number[]): void {
    let len = arr.length - 1;
    do {
        for (let i = 0; i < len; i++) {
            if (arr[i] > arr[i + 1]) {
                const x = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = x;
            }
        }

        len--;
    } while (len > 0);
}
 **/
