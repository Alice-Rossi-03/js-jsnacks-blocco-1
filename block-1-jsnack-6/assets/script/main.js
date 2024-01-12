// Stampa il cubo dei primi N numeri
// Dove N è un numero indicato dall’utente


let number = document.getElementById("number")

let resultHtml = document.getElementById("resultHtml")
// let numberValue = number.value;  

let getResult = document.getElementById("getResult")

getResult.addEventListener("click", function(){

    for(let i = 1; i <= number.value; i++){ 

        let cubeOf = i * i * i; 

        console.log(`Il cubo di ${i} è: ${cubeOf}`)

        document.writeln(`<div> The Cube Of ${i} is ${cubeOf} </div>`)
    }
})
