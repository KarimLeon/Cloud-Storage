'use strict'
const sC2 = document.querySelector("body > div.side-container2")
const dot1 = document.getElementById('dot1')
const img = document.querySelector("#intro > picture > img")



//change img src if person clicks next(Arrow)

function changeImages() {
   img.setAttribute('src', 'images/lantern.jpg')
}

sC2.addEventListener('click', changeImages)



    


