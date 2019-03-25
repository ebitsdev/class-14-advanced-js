function addTableToBody() {
    let formElement = document.getElementById('data-form')
    let inputElement = formElement.formdata
    let docBody = document.querySelector('body')
    let tbl = document.createElement('table')
    let tblBody = document.createElement('tbody')
    let inputElementName = formElement.names
    return function generateTable() {
        let inputElementNameData = inputElementName.value
        let inputElementData = inputElement.value
        //create table cells
        let row = document.createElement('tr')
        for (var i = 0; i < inputElementData; i++) {
            let cell = document.createElement('td')
            let cellText = document.createTextNode(
                `${inputElementNameData} ${inputElementData}`
            )
            cell.appendChild(cellText)
            row.appendChild(cell)
        }
        tblBody.appendChild(row)
        tbl.appendChild(tblBody)
        docBody.appendChild(tbl)
    }
}
let newTable = addTableToBody()
