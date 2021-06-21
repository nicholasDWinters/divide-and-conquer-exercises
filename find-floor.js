function findFloor(arr, num, low = 0, high = arr.length - 1) {
    let mid = Math.floor((low + high) / 2);
    console.log(mid);

    if (mid === 0) return -1;
    if (arr[mid] < num && arr[mid + 1] > num) {

        return arr[mid];
    } else if (num > arr[mid]) {
        if (mid === high - 1) return arr[high];
        return findFloor(arr, num, mid, high);
    } else {
        return findFloor(arr, num, low, mid);
    }

}

module.exports = findFloor