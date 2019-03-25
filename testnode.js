const fs = require('fs')
const names = ['Anna', 'Adrian', 'Abiy', 'Paul', 'Joseph', 'JD']
names.forEach(function(name){
  console.log(name)
})
fs.readFile('README.md', 'utf-8', (error, data)=>{
  if (error) throw error
  console.log(data)
})
let numbers = [9, 10, 1, 0, 3, 7, 6, 4]

// Reducer function
numbers.reduce((accumulator, currentValue, currentIndex, array) =>{
  return accumulator + currentValue

}, 9)
