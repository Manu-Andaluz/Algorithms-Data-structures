export default function two_crystal_balls(breaks: boolean[]): number {
    // jump the square root of n && breaks[index] === true
    // then walkf from the prev starting point,
    // and find where is the ofther breaks[index] === true
    let prevStart = 0;
    let root = Math.round(Math.sqrt(breaks.length));
    let pivot = root;

    do {
        const current = breaks[pivot];

        if (current) {
            for (let i = prevStart; i < pivot; i++) {
                if (breaks[i]) {
                    return i;
                }
            }
        } else {
            prevStart = pivot + 1;
            pivot += root;
        }
    } while (pivot <= breaks.length - 1);

    return -1;
}

