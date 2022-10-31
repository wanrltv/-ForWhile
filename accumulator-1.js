const array = [11, 52, 38, 46, 78, 56, 17, 85, 49, 10]

let accumulator = 0
for (let i = 0; i < array.length; i++){
    accumulator += array[i]
}
console.log(accumulator);