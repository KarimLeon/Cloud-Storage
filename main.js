'use strict'
const sC2 = document.querySelector("body > div.side-container2")
const dot1 = document.getElementById('dot1')
const dot2 = document.getElementById('dot2')
const img = document.querySelector("#intro > picture > img")
let beach1920 = "images/s-1920w-1281h.webp", beach5117 = 'images/s-5117w-3414h.webp'
let lantern = "images/lantern.jpg"


//change img src if person clicks next(Arrow)

sC2.addEventListener('click', () => {
     
       function dot2_ () {
         img.setAttribute('src', lantern)
         dot2.style.backgroundColor = "white"
       }

     function revert_dot1_color() { 
       dot1.style.backgroundColor = "rgb(218, 123, 34)"   
     }

       dot2_()
       revert_dot1_color()    

})


dot1.style.backgroundColor = "white"
  

