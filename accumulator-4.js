const array = ['Ayub', 'Baysangur', 'Rashid', 'Muhammad', 'Ibragim', 'Islam', 'Artur', 'Ramzan', 'Yusup', 'Unadi']; 
let accumulator = []; 
for (let i = 0; i < array.length; i++) { 
    if (array[i][0].toLowerCase() == 'a') { 
        accumulator.push(array[i]) 
    } 
} 
console.log(accumulator);