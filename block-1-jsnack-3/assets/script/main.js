
let numberOne = document.getElementById("numberOne")
let numberTwo = document.getElementById("numberTwo")
let numberThree = document.getElementById("numberThree")
let numberFour = document.getElementById("numberFour")
let numberFive = document.getElementById("numberFive")
let numberSix = document.getElementById("numberSix")
let numberSeven = document.getElementById("numberSeven")
let numberEight = document.getElementById("numberEight")
let numberNine = document.getElementById("numberNine")
let numberTen = document.getElementById("numberTen")

let getResult = document.getElementById("getResult")

let sumResultHtml = document.getElementById("sumResultHtml")

getResult.addEventListener("click", function(){

    let numberOneValue = numberOne.value
    let numberTwoValue = numberOne.value
    let numberThreeValue = numberOne.value
    let numberFourValue = numberOne.value
    let numberFiveValue = numberOne.value
    let numberSixValue = numberOne.value
    let numberSevenValue = numberOne.value
    let numberEightValue = numberOne.value
    let numberNineValue = numberOne.value
    let numberTenValue = numberOne.value

    let sumOfAll = `${+numberOneValue + +numberTwoValue + +numberThreeValue + +numberFourValue + +numberFiveValue + +numberSixValue + +numberSevenValue + +numberEightValue + +numberNineValue + +numberTenValue}`

    sumResultHtml.innerHTML = `${sumOfAll}`

})



