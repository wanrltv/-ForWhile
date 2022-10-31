const array = ['azda', 'amborgini', 'Audi', 'Lada', 'GAZel', 'Bentley', 'Toyota', 'Mercedes', 'BMW', 'Bugatti']

for(let i = 0; i < array.length; i++) {
    if(array[i][0].toLowerCase() === 'a')
    console.log(array[i])
}