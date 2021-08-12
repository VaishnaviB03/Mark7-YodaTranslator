var inputText = document.querySelector("#text");
var output = document.querySelector("#output");
var button = document.querySelector("#btn")

var url = "https://api.funtranslations.com/translate/yoda.json"

function translation(text) {
    return url + "?" + "text=" + text
}

function err(error){
    console.log("Somehing wrong!",error)
    alert("Try Again Later")
}

function clickHandler(){
    var input = inputText.value;
    fetch(translation(input))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated
        output.innerText = translatedText
    })
    .catch(err)
}

button.addEventListener("click", clickHandler)