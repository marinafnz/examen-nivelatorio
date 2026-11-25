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



