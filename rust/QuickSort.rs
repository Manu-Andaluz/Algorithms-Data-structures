fn quick_sort(array: &mut [u8], low: usize, high: usize) {
    if low >= high {
        return;
    }

    let pivot: u8 = array[high];
    let mut i = low;

    for j in low..high {
        if array[j] <= pivot {
            array.swap(i, j);
            i += 1;
        }
    }

    array.swap(i, high);

    quick_sort(array, low, i - 1);
    quick_sort(array, low + 1, high);
}

fn main() {
    let mut arr: [u8; 9] = [77, 6, 35, 2, 3, 32, 11, 25, 9];
    let high = arr.len() - 1;

    quick_sort(&mut arr, 0, high);

    println!("Ordered array : {:?}", arr);
}
