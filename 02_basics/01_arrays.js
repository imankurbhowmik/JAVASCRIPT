let arr1 = [1, 2, 3, 'hoko']

let arr2 = new Array(1, 2, 2, 4)
console.log(arr2[2]);

arr2.push(3, 2)  // adds the elements
console.log(arr2);

arr2.pop() // removes the last element
console.log(arr2);

arr2.unshift(8) // adds element at the beginning
console.log(arr2);

arr2.shift() // removes the first element
console.log(arr2);

console.log(arr2.includes(6)); // checks whether there is 6 or not 

console.log(arr2.indexOf(3));  // shows index of 3

const arr3 = arr2.join()  // converts to string
console.log(arr3);
console.log(typeof arr3); 

let arr4 = [1,2,3,7,8,9]

console.log(arr4.slice(1,3)); // shows elements at index no 1,2 
console.log(arr4);

console.log(arr4.splice(1,3));  // shows 3 elements starting from index 1 and also deletes them from the actual array ; comma lagaake naya elements bhi daal skte h
console.log(arr4); 