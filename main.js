'use strict'
const sC2 = document.querySelector("body > div.side-container2")
const dot1 = document.getElementById('dot1')
const img = document.querySelector("#intro > picture > img")
let beach1920 = "images/s-1920w-1281h.webp", beach5117 = 'images/s-5117w-3414h.webp'



//change img src if person clicks next(Arrow)

sC2.addEventListener('click', () => {img.setAttribute('src', 'images/lantern.jpg')})


if (img.getAttribute('src') === beach1920 || beach5117) 
     dot1.style.backgroundColor = "white"
