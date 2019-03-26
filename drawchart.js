let ctx = document.getElementById('mychart').getContext('2d')
let chart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Test one', 'Test two', 'Test three', 'Test four', 'Test five'],
        datasets: [{
            label: 'Test chart',
            backgroundColor: ['blue', 'purple', 'olive', 'orange', 'maroon'],
            data: locallyStoredData()
        }]
    }
})

function locallyStoredData(){
    //Check if localstorage contains data
    if(localStorage){
        // If yes, read the data
        let storedValues = localStorage.getItem('elementsclicked')
        // Convert the data by parsing it and returning it for further processing
        let parsedValues = JSON.parse(storedValues)
        return parsedValues
    } else {
        console.log('No data stored')
    }
}