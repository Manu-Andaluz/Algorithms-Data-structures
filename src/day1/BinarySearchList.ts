export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length - 1;

    do {
        const pivot = Math.round((high + low) / 2);
        const current = haystack[pivot];

        if (current === needle) {
            return true;
        } else if (current > needle) {
            high = pivot - 1;
        } else {
            low = pivot + 1;
        }
    } while (low <= high);

    return false;
}
