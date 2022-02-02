'use strict'


const sC2 = document.querySelector("body > div.side-container2"),
      dot1 = document.getElementById('dot1'),
      dot2 = document.getElementById('dot2'),
      dot3 = document.getElementById('dot3'),
      img = document.querySelector("#intro > picture > img"),
      divP = document.querySelector("#intro > blockquote")
    

let coffee = 'images/WEBP/coffee1280.webp',
    city = "images/city1280.jpg",
    sunset = 'images/sunset1280.jpg',
    currentImgSrc = img.getAttribute('src')

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
  img.setAttribute('src', currentImgSrc ? city || 'images/city1920.jpg' || 'images/city2560.jpg' : null)
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
      setCitySrcSrcset();
      break; 

      case city: 
      img.setAttribute("src", sunset)
      dot2.style.backgroundColor = ""
      dot3.style.backgroundColor = "white"
   }

}
sC2.addEventListener('click', changeImage)


// TODO Download different size images for sunset image

function setCitySrcSrcset() {  
  let firstSrc = document.querySelector("#intro > picture > source.\\31 920w")
  let secSrc = document.querySelector("#intro > picture > source.\\35 618w")
  firstSrc.setAttribute('srcset', 'images/city1920.jpg')
  secSrc.setAttribute('srcset', 'images.city2560.jpg')
}

function setSunSrcset() {}   

