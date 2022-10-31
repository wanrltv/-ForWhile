const array = ['js', 'c++', 'python', 'pascal', 'c#', 'cotlin', 'c', 'typescript', 'php', 'chehen']; 
let accumulator = []; 
for (let i = 0; i < array.length; i++) { 
    if (array[i].length > 3) { 
        accumulator.push(array[i]); 
    } 
} 
 
console.log(accumulator);