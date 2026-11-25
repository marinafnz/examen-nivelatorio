"use strict";

const userNum = parseInt(document.getElementById("num")).value 
const button = document.getElementById("btn");
const responseElement = document.getElementById("response");
const previusGames = document.getElementById("previus");

const messages = {
    win : "GANASTE",
    lose : "PERDISTE",
    correctNumbers : "Debes colocar un número correcto",
}

const record = {}

const randomNum = () => {
    const randomNumber = Math.floor(Math.random() * 10)
    return randomNumber
}

console.log(randomNum());




