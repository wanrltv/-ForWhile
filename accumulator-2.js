const array = [22, 33, 22, 12, 13, 15, -16, -17, -19, -20]; 
let accumulator = 0; 
let i = 0; 
while (i < array.length) { 
    if (array[i] > 0) { 
        accumulator += array[i]; 
    } 
    i++; 
} 
console.log(accumulator)