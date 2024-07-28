fn main() {
    let arr: [u8; 11] = [3, 4, 6, 8, 11, 55, 66, 67, 68, 69, 123];
    let number_to_find: u8 = 11;

    let mut low: usize = 0;
    let mut high: usize = arr.len() - 1;

    while low <= high {
        let middle: usize = (high + low) / 2;
        let needle: u8 = arr[middle];
        print!("{needle} - ");

        if needle == number_to_find {
            print!("Number found : {needle:?}");
            return;
        } else if needle > number_to_find {
            high = middle - 1;
        } else {
            low = middle + 1;
        }
    }

    print!("Number not found");
    return;
}
