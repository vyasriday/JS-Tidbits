
// selection sort to sort elements in ascending Order



function selectionSort(arr) { 
    let n = arr.length;
        
    for(let i = 0; i < n-1; i++) {
        let min=i;
        for(let j=i+1;j<n;j++)
        {
            if(arr[j]<arr[min])
            {
                min=j;
            }
        }
        //swapping the elements.
        const temp=arr[i];
        arr[i]=arr[min];
        arr[min]=temp;

    }
    return arr;
}


console.log(selectionSort([3, 5, 1, 11, 4, 1, 21, 19, 17, 6]));

// The best-case performance of Selection Sort is also O(n2), so checking whether 
// the array or list is sorted or not is also really inefficient.

// O(n2) is a pretty bad time complexity for a sorting algorithm. 
// When sorting a collection, you'd use faster sorting algorithms like 
// Quicksort or Merge Sort with a time complexity of O(nlogn).
