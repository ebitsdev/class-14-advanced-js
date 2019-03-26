function Images(title, path, id, desc){
    this.title = title
    this.path = path
    this.id = id
    this.desc = desc
}
const images = ['images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg','images/img4.jpg']
// Images.prototype.getFilePath(arr){
//     // More to go here
// }
function readFilePath(arr){
    let div = document.getElementById('images')
    arr.forEach(imgpath =>{
        let img = document.createElement('img')
        img.src = imgpath
        div.appendChild(img)
        console.log(imgpath)
    })
}
readFilePath(images)