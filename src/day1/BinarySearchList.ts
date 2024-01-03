export default function bs_list(haystack: number[], needle: number): boolean {
    let leftPointer = 0;
    let rightPointer = haystack.length - 1;

    do {
        const pointer = Math.floor((leftPointer + rightPointer) / 2);
        const currentValue = haystack[pointer];

        if (currentValue == needle) {
            return true;
        } else if (currentValue > needle) {
            rightPointer = pointer - 1;
        } else {
            leftPointer = pointer + 1;
        }
    } while (leftPointer <= rightPointer);

    return false;
}
