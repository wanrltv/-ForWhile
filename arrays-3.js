const array = [1, 2, 3, 4, -5, 6, 7, -8, 9, -10]
const res = []
for (i = 0; i < array.length; i++) {
    if(array[i] > 0) {
        res.push(array[i])
    }
}
console.log(res)