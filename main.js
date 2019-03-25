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

let elList, addLink, nEl, nText, counter, listItems
elList = document.getElementById('list')
addLink = document.querySelector('a')
counter = document.getElementById('counter')

function addItem(e){
  e.preventDefault()
  nEl = document.createElement('li')
  nText = document.createTextNode('New list item')
  nEl.appendChild(nText)
  elList.appendChild(nEl)
}
let mArr = []
function updateCount(){
  listItems = elList.getElementsByTagName('li').length
  counter.innerText = listItems
  mArr.push(nText.textContent)
  console.log(mArr)
  addToLocalStorage()
  getLocalStorageContent()
}
function addToLocalStorage(){
  localStorage.setItem('elements', JSON.stringify(mArr))
}
let oEl = document.createElement('ol')
function getLocalStorageContent(){
  let allEl = localStorage.getItem('elements')
  let saveItems = JSON.parse(allEl)
  let liEl = document.createElement('li')
  oEl.appendChild(liEl)
  saveItems.forEach(value => {
    liEl.textContent = value
    console.log(value)
  })
  document.querySelector('body').appendChild(oEl)
}
// Calling the eventHandler addItem from above when the link is clicked
addLink.addEventListener('click', addItem, false)

elList.addEventListener('DOMNodeInserted', updateCount, false)

function classRoom(){
  let instructors = ['Emmanuel', 'Zach']
  return {
    getInstructor : function(){
      return instructors
    },
    addInstructor : function(name){
      instructors.push(name)
      return instructors
    }
  }
}
let course = classRoom()
course.addInstructor('Bamba')
let course2 = classRoom()
course2.addInstructor('Mei')
console.log(course2.getInstructor())