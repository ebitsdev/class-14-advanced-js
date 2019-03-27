// Reference the 3 images elements from our html page
let imgElement = document.getElementsByClassName('cool-image')
// Create Images constructor function
function Images(title, path, id, desc){
    this.title = title
    this.path = path
    this.id = id
    this.clicked = 0
    this.shown = 0
    this.alt = desc
}
//Create an empty to store the images later
const allImages = []
// Instantiate the images from the Images constructor function
let image1 = new Images('Image one', 'images/img1.jpg', 'img1', 'Image one is awesome')
let image2 = new Images('Image two', 'images/img2.jpg', 'img2', 'Image two is not so awesome')
let image3 = new Images('Image three', 'images/img3.jpg', 'img3', 'Image three is excellent')
let image4 = new Images('Image four', 'images/img4.jpg', 'img4', 'Image four not so much')
let image5 = new Images('Image five', 'images/img5.jpg', 'img5', 'Image five is cool')

//Add the images to the allImages array for further processing
allImages.push(image1, image2, image3, image4, image5)
console.log(allImages)

function randomNum(){
    return Math.floor(Math.random() * allImages.length)
}
// Create 3 variables that will hold the 3 random images from our page
let firstImage
let secondImage
let thirdImage

//Create a function to handle random image display
function displayImage(){
    // Loop through the 3 random images
    for (let i = 0; i < imgElement.length; i++){
        //Create imgTemp variable element to store the image element
        let imgTemp = imgElement[i]
        // Store the random image source generated our randomNum function in a variable for further processing
        let randomImg = allImages[randomNum()]
        // Changed the if/else statement with switch
        switch (true) {
        case (i === 0):
            firstImage = randomImg
            break
        case ( i === 1):
            secondImage = randomImg
            break
        default:
            thirdImage = randomImg
            break
        }
        // Set the image source attribute randomly using the randomImg variable defined above
        imgTemp.src = randomImg.path
        // Set image id attribute to track the number of clicks and display per image
        imgTemp.setAttribute('id', randomImg.id)
        // Track how many times a particular has been shown
        randomImg.shown++
        // Add a click event listener to the image element on the page
        imgTemp.addEventListener('click', clickHandler)
    }
}
let clickHandler = function(event){
    // Replacing the if/else statement with switch statement
    switch (true) {
    case (firstImage.id === event.target.id):
        firstImage.clicked++
        break
    case (secondImage.id === event.target.id):
        secondImage.clicked++
        break
    default:
        thirdImage.clicked++
        break
    }
    // Call the display on the click event, i.e when a user clicks on an image
    displayImage()
}
// Calling the display() function for the initial display of images
displayImage()
