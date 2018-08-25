var data = [
    "Argentina",
    "Chile",
    "Paraguay",
    "Uruguay",
    "Brazil",
    "Bolivia",
    "Peru",
    "Colombia",
    "Usa",
    "Mexico",
    "Alaska",
    "Alemania",
    "Canada",
    "Arabia"
];

function AcSearch(container, id){
    this.domContext = container
    this.idForInput = id
    this.createInputField = function(){
        let inputField = document.createElement("input")
        inputField.setAttribute('type', 'text')
        inputField.setAttribute('id', this.idForInput)

        document.getElementById(this.domContext)
        .appendChild(inputField)

        inputField.addEventListener('keyup', this.onKeyUp)
    }
    this.onKeyUp = function(){
        console.log("hello")
    }
}

var newSearchField = new AcSearch("container", "search");
newSearchField.createInputField();