'use strict'


const dot1 = document.getElementById('dot1')
const source = document.querySelector("#intro > picture > source")
const img = document.querySelector("#intro > picture > img")
let moonbig = 'images/moon-big.webp', moon1920 = 'images/moon_1920.webp';



    
if (img.getAttribute('src') === moonbig || moon1920) { 
      dot1.style.backgroundColor = "white"
  }
