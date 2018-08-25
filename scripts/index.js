var data = [
        "argentina",
        "chile",
        "paraguay",
        "uruguay",
        "brazil",
        "bolivia",
        "peru",
        "colombia",
        "usa",
        "mexico",
        "alaska",
        "alemania",
        "canada",
        "arabia"
    ];

let inputField = document.getElementById("search")

let context = document.getElementById("container")
context.appendChild(inputField)

inputField.addEventListener('keyup', function(){
    let searchValue = this.value;
    let result = data.filter(function(item){
        return item.indexOf(searchValue) > -1
    })
    .map(function(itemFiltered){
        return `<p>${itemFiltered}</p>`
    })
    .reduce(function(acc, element){
        return acc + element
    })

    let resultContainer = document.querySelector('.results');

    if(resultContainer != null){
        resultContainer.parentNode.removeChild(resultContainer)
    }

    let inputFieldResultContainer = document.createElement('div')
    inputFieldResultContainer.setAttribute('class', 'results')

    inputFieldResultContainer.innerHTML = result;
    context.appendChild(inputFieldResultContainer);
})