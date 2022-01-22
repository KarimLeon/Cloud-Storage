'use strict'

const sC2 = document.querySelector("body > div.side-container2"),
      dot1 = document.getElementById('dot1'),
      dot2 = document.getElementById('dot2'),
      dot3 = document.getElementById('dot3'),
      img = document.querySelector("#intro > picture > img")

let beach1920 = "images/s-1920w-1281h.webp", 
    beach5117 = 'images/s-5117w-3414h.webp',
    lantern = "images/lantern.webp"

function forced_Hover_State() {
   dot1.style.backgroundColor = "white"
}

 forced_Hover_State()


dot1.onclick = () => {
  let currentColor = dot1.style.backgroundColor
  img.setAttribute('src', beach1920)
  dot1.style.backgroundColor = "white"
  dot2.style.backgroundColor = ""
  dot3.style.backgroundColor = ""
} 

dot2.onclick = () => { 
  let currentColor = dot2.style.backgroundColor
  img.setAttribute('src', lantern)
  dot2.style.backgroundColor = "white"
  dot1.style.backgroundColor = ""
  dot3.style.backgroundColor = ""
}

dot3.onclick = () => { 
  let currentColor = dot3.style.backgroundColor
  img.setAttribute('src', 'images/light.webp')
  dot3.style.backgroundColor = "white"
  dot1.style.backgroundColor = ""
  dot2.style.backgroundColor = ""
}