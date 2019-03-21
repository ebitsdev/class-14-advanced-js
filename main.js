// IIFE
(function(){
  let number = 9
  return console.log(number * 11)
})()

//Normal function declaration
function divide(){
  return 9 / 5
}
console.log(divide())

function closureDemo(num){
  let text = 'This value will be accessed outside of this enclosing function'
  // I am accessing the main function parameter inside the closure
  return function(){
    return console.log(`${num * 11}. Here is the long text I typed in the enclosing function "${text}"`)
  }
}
let exampleClosure = closureDemo(6)

exampleClosure()
// Closure
function convertMilesToKilometer(k){
  const mile = 1.60934
  //Declare closure function with a name as opposed to the first example, which was anonymous
  function calculateKilos(){
    return console.log(mile * k)
  }
  return calculateKilos
}
//Closure instance
let milesToKilo = convertMilesToKilometer(3)
milesToKilo()

function sayHelloIn(lang){
  let salutation = 'Good morning in '
  let getLanguage = function(){
    console.log(`${salutation} ${lang}`)
  }
  return getLanguage
}
let greeting = sayHelloIn('Konon')
greeting()