/**
 * An implementation of linear search in JavaScript, which searches through the entire array for a given value.
 * This algorithm runs in O(n) time and is very, very rarely used in practice save for demonstraing basic algorithms.
 */
function linearSearch(array, target) {

    // Iterates through entire array
    for(let i = 0; i < array.length; i++) {

        // If the value at the current index in the array equals the target, return the index
        if(array[i] == target) {
            return i;
        }
    }

    // Return -1 if no match if found for the target in the array
    return -1;
}