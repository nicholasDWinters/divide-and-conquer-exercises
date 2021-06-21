function findRotatedIndex(arr, num, low = 0, high = arr.length - 1) {
    let middle = findMiddle(arr, 0, high);

    if (arr[middle] === num) {
        return middle;
    } else if (arr[high] < num) {
        return search(arr, num, low, middle)
    } else {
        return search(arr, num, middle, high);
    }

}

function search(arr, num, low, high) {
    if (arr.length === 0) return -1;

    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        if (arr[mid] === num) {
            return mid;
        } else if (num < arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1
        }
    }
    return -1;
}

function findMiddle(arr, low = 0, high = arr.length - 1) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid - 1] > arr[mid]) {
        return mid;
    } else if (arr[mid - 1] <= arr[mid]) {

        return findMiddle(arr, low, high + 1);
    }
}

findMiddle([6, 7, 8, 9, 1, 2, 3, 4]);

module.exports = findRotatedIndex