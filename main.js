'use strict'


const sC2 = document.querySelector("body > div.side-container2"),
      dot1 = document.getElementById('dot1'),
      dot2 = document.getElementById('dot2'),
      dot3 = document.getElementById('dot3'),
      img = document.querySelector("#intro > picture > img")

let beach1920 = "images/s-1920w-1281h.webp", 
    beach5117 = 'images/s-5117w-3414h.webp',
    city = "images/city.jpg",
    sunset = 'images/sunset1280.jpg'

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
  img.setAttribute('src', city)
  dot2.style.backgroundColor = "white"
  dot1.style.backgroundColor = ""
  dot3.style.backgroundColor = ""
}

dot3.onclick = () => { 
  let currentColor = dot3.style.backgroundColor
  img.setAttribute('src', sunset)
  dot3.style.backgroundColor = "white"
  dot1.style.backgroundColor = ""
  dot2.style.backgroundColor = ""
}

//*Changes to next image if user clicks the next arrow


function changeImage() {
  const imgSrc = img.getAttribute('src')
   
   switch (imgSrc) { 
      case beach1920 || beach5117: 
      img.setAttribute('src',city) 
      dot1.style.backgroundColor = ""
      dot2.style.backgroundColor = "white"
      break; 

      case city: 
      img.setAttribute("src", sunset)
      dot2.style.backgroundColor = ""
      dot3.style.backgroundColor = "white"
   }

}
sC2.addEventListener('click', changeImage)


