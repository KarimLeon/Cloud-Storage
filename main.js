'use strict'


const sC2 = document.querySelector("body > div.side-container2"),
      dot1 = document.getElementById('dot1'),
      dot2 = document.getElementById('dot2'),
      dot3 = document.getElementById('dot3'),
      img = document.querySelector("#intro > picture > img"),
      divP = document.querySelector("#intro > blockquote")

let coffee = 'images/coffee1920.jpg',
    city = "images/city.jpg",
    sunset = 'images/sunset1280.jpg'

function forced_Hover_State() {
   dot1.style.backgroundColor = "white"
}

 forced_Hover_State()

// Change image based off of which dots are clicked

dot1.onclick = () => {
  img.setAttribute('src', coffee)
  dot1.style.backgroundColor = "white"
  dot2.style.backgroundColor = ""
  dot3.style.backgroundColor = ""
  divP.setAttribute('style', 'display: content')
} 

dot2.onclick = () => { 
  img.setAttribute('src', city)
  dot2.style.backgroundColor = "white"
  dot1.style.backgroundColor = ""
  dot3.style.backgroundColor = ""
  divP.setAttribute('style', 'display: none')
}

dot3.onclick = () => { 
  img.setAttribute('src', sunset)
  dot3.style.backgroundColor = "white"
  dot1.style.backgroundColor = ""
  dot2.style.backgroundColor = ""
  divP.setAttribute('style', 'display: none')
}

//*Changes to next image if user clicks the next arrow


function changeImage() {
  const imgSrc = img.getAttribute('src')
   
   switch (imgSrc) { 
      case coffee: 
      img.setAttribute('src', city) 
      divP.setAttribute('style', 'display:none')
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


