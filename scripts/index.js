var data = [
        "Argentina",
        "chile",
        "paraguay",
        "uruguay",
        "Brazil",
        "bolivia",
        "peru",
        "colombia",
        "usa",
        "mexico",
        "alaska",
        "alemania",
        "Canada",
        "arabia"
    ];

let inputField = document.getElementById("search")

inputField.addEventListener('keyup', function(){
    let searchValue = this.value.toLowerCase();

    if(searchValue !== ""){
        var result = filterData(data, searchValue)
    }else{
        removeResultContainer()
        return
    }

    removeResultContainer()
    addResultContainer(result)
})

function removeResultContainer(){
    let resultContainer = document.querySelector('.results');

    if(resultContainer != null){
        resultContainer.parentNode.removeChild(resultContainer)
    }
}

function addResultContainer(result){
    let context = document.getElementById("container")
    let inputFieldResultContainer = document.createElement('div')
    inputFieldResultContainer.setAttribute('class', 'results')

    inputFieldResultContainer.innerHTML = result;
    context.appendChild(inputFieldResultContainer);
}

function filterData(countries, searchValue){
    return countries.filter(function(item){
        var search = searchValue.length;
        return item.toLowerCase().substring(0, search) === searchValue
    })
    .map(function(itemFiltered){
        return `<p class="country"><i class="fas fa-map-marker-alt"></i> <span>${itemFiltered}</span></p>`
    })
    .reduce(function(acc, element){
        return acc + element
    })
}
