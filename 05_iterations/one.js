// for


// for (let i = 0; i < array.length; index++) {
//     const element = array[index];
    
// }

for(let i = 0; i <= 10; i++){
    const element = i;
    console.log(element);
}

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop is ${i}`);
    for(let j = 0; j <= 10; j++){
        console.log(`Inner loop is ${j} and outer loop is ${i}`);
    }
    
}

for (let i = 1; i <= 10; i++) {
   for (let j = 1; j <= 10; j++) {
    console.log(i + '*' + j + ' = ' + i*j );
   }
    
}

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

// break
for (let index = 1; index <= 20; index++) {
    if(index==5){
        console.log("detected 5");
        break;
    }
    console.log(`index is ${index}`);
}

// continue
for (let index = 1; index <= 20; index++) {
    if(index==5){
        console.log("detected 5");
        continue;
    }
    console.log(`index is ${index}`);
}