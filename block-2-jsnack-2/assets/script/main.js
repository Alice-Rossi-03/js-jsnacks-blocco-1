// Consegna - Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.


// creazione array nomi 
let nomiInglesi = [
    "James",
    "Emma",
    "Sophia",
    "Michael",
    "Olivia",
    "William",
    "Ava",
    "Alexander",
    "Mia",
    "Ethan"
];
  
// creazione array cognomi 
let cognomiInglesi = [
    "Smith",
    "Johnson",
    "Williams",
    "Jones",
    "Brown",
    "Davis",
    "Miller",
    "Wilson",
    "Moore",
    "Taylor"
];

// generazione delle variabili 
let generateRandomNames = document.getElementById("generateRandomNames")
let arrayLength = cognomiInglesi.length

// funzione custom sulla generazione di un nome random
function RandomNames(){
    return nomiInglesi[Math.floor(Math.random() * nomiInglesi.length )]
}

// funzione custom sulla generazione di un cognome random
function RandomSurnames(){
    return cognomiInglesi[Math.floor(Math.random() * cognomiInglesi.length)]
}

// funzione add.event.listener per generare la lista al click 
generateRandomNames.addEventListener("click", function(){

    let randomName = RandomNames()
    let randomSurname = RandomSurnames()

    // ciclo for 
    for(let i = 0; i < arrayLength; i++){

        // definiamo i valori 
        let randomName = RandomNames()
        let randomSurname = RandomSurnames()


        // modo 1 - con le funzioni custom 
        console.log(`<div> ${randomName} ${randomSurname} </div>`)
        document.writeln(`<div> ${randomName} ${randomSurname} </div>`)

        
        // modo 2 - semplicemente richiamando gli array 
        console.log(`<div> ${nomiInglesi[i]} ${cognomiInglesi[i]} </div>`)
        document.writeln(`<div> ${nomiInglesi[i]} ${cognomiInglesi[i]} </div>`)

    }
    
})

