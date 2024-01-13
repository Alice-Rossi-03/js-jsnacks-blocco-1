// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari



// creiamo un array di 10 numeri 
let arrayNumeri = [
    13,
    27,
    82,
    88,
    16,
    3
]

// prendimao le varibaili 
let btnResult = document.getElementById("btnResult")

// inizializziamo la variabile della somma 

let sumOfAll = 0 

btnResult.addEventListener("click", function(){

    for (let i = 0; i <= arrayNumeri.length; i++){
        if(i % 2 !== 0){

            sumOfAll += arrayNumeri[i]
            
            console.log(sumOfAll)

            document.writeln(`<div> The sum of all the numbers in a odd position is: ${sumOfAll} </div>`)
        }
    }
})
