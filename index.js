"use strict";

const button = document.getElementById("btn");
const responseElement = document.getElementById("response");
const previusGames = document.getElementById("previus");

const messages = {
    win : "GANASTE",
    lose : "PERDISTE",
    correctNumbers : "Debes colocar un número correcto",
}

const history = []

const randomNum = () => {
    const randomNumber = Math.ceil(Math.random() * 10)
    return randomNumber
}

const compare = (playerNum, computerNum) => {
    let result;
    if (playerNum === computerNum) {
        result = messages.win;
    } else {
        result = messages.lose;
    }
    return result;
}

function game () {
    const userNum = parseInt(document.getElementById("num").value)
    let playerResult
    const random = randomNum()

    if(userNum > 10 || userNum < 0){
        responseElement.innerHTML = messages.correctNumbers
        return
    }    
    const comparing = compare(userNum, random)
    responseElement.innerHTML = comparing

    history.push({numUser: userNum , numRandom: random, finalResult: comparing})

    console.log(history);   

    previusGames.innerHTML = history
}


