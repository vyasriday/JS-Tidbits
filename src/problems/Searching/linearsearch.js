/* Linear search to search element in array */

var arr = [4,8,13,17,19,22,25,35,39,41,49,53,59,67,69,75,78,83,90,99]


function LinearSearch(arr, item) 
{
    for(var i=0;i<arr.length;i++)   //Loop for traversing the array
    {
        if(arr[i]===item)  //if the item is found at particular index i it will give its position
        {
        return i;           //it will give index at which element is present
        }
        else
        {
        return null;         //if the element is not found
        }

    }
}

console.log(LinearSearch(arr,4));