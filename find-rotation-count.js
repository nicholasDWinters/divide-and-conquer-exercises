
function findRotationCount(arr, low = 0, high = arr.length - 1) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid - 1] > arr[mid]) {
        return mid;
    } else if (arr[mid - 1] <= arr[mid]) {

        return findRotationCount(arr, low, high + 1);
    } else {
        return 0;
    }
}

module.exports = findRotationCount