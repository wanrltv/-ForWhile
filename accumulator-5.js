const array = [22, 33, 22, 12, 13, 15, 16, 17, 19, 20]; 
let accumulatorEven = []; 
for (let i = 0; i < array.length; i++) { 
    if (array[i] % 2 == 0) { 
        accumulatorEven.push(array[i]) 
    } 
} 
 
console.log(accumulatorEven);