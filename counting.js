let image = document.querySelector('img')
image.addEventListener('click', counter, false)
let p = document.createElement('p')
let count = 0
function counter(event){
    event.preventDefault()
    count++
    p.textContent = count
    addSingleValueToLocalStorage()
    addMultiValueToLocalStorage()
    //   if (count > 4){
    getValueFromLocalStorage()
//   }
}
function addSingleValueToLocalStorage(){
    localStorage.setItem('countkey', count)
}
let storedValues = []
function addMultiValueToLocalStorage(){
    storedValues.push(count)
    localStorage.setItem('elementsclicked', JSON.stringify(storedValues))
    generateList(storedValues)
}

let olEl = document.createElement('ol')
let olEl2 = document.createElement('ol')

function generateList(imgListCount){
    if (localStorage){
        let storedValues = localStorage.getItem('elementsclicked')
        imgListCount.forEach(storedValue => {
            let li = document.createElement('li')
            li.textContent = storedValue
            olEl.appendChild(li)
        })
        console.log(JSON.parse(storedValues))
    }
    imgListCount.forEach(function(clickCount){
        let liElement = document.createElement('li')
        olEl.appendChild(liElement)
        liElement.textContent = clickCount
    })
}
// Generate an ordered list from the localstorage data
function buildListFromLocalStorageContent(){
    if (localStorage){
        //Get the stored data from the localstorage
        let storedValues = localStorage.getItem('elementsclicked')
        //Parse the values that were read from the localstorage
        let parsedValues = JSON.parse(storedValues)
        //Use the parsed values from LS to generate list items
        parsedValues.forEach(storedValue => {
            // Create a list item to be appended to the ordered list olEl2
            let li = document.createElement('li')
            //Set the text of the list item to the storedValue
            li.textContent = storedValue
            //Append the newly created list item to the ordered list olEl2
            olEl2.appendChild(li)
        })
    }
}
//Append the list item from the localstorage to the second ordered list
document.body.appendChild(olEl2)
//Append the list items from the values of the
document.body.appendChild(olEl)
//Call the build the buildListFromLocalStorageContent function to generate the ordered list from localstorage
buildListFromLocalStorageContent()

let h2 = document.createElement('h2')
// Get values from
function getValueFromLocalStorage(){
    let storedValue = localStorage.getItem('countkey')
    document.body.appendChild(h2)
    h2.textContent = storedValue
}
document.body.appendChild(p)
