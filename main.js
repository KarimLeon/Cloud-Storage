'use strict'

/*
const babel = require("@babel/core");
import * as babel from "@babel/core";
import { transform } from "@babel/core";
*/

const body = document.querySelector('.home')

const sC2 = document.querySelector("body > div.side-container2"),
      dot1 = document.querySelector("#intro > section > button.slide.dot1"),
      dot2 = document.querySelector("#intro > section > button.slide.dot2"),
      dot3 = document.querySelector("#intro > section > button.slide.dot3"),
      img = document.querySelector("#intro > picture > img"),
      divP = document.querySelector("#intro > blockquote"),
      main = document.querySelector('main')



let coffee = 'images/WEBP/coffee1280.webp',
    city = "images/WEBP/city1280.webp",
    sunset = 'images/WEBP/sunset1280.webp',
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
  setCoffeeSrcSet()
} 

dot2.onclick = () => { 
  img.setAttribute('src', city)
  dot2.style.backgroundColor = "white"
  dot1.style.backgroundColor = ""
  dot3.style.backgroundColor = ""
  divP.setAttribute('style', 'display: none')
  setCitySrcSrcset()
}

dot3.onclick = () => { 
  img.setAttribute('src', sunset)
  dot3.style.backgroundColor = "white"
  dot1.style.backgroundColor = ""
  dot2.style.backgroundColor = ""
  divP.setAttribute('style', 'display: none')
  setSunsetSrcset()
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
      setSunsetSrcset()
   }

}

// TODO Download different size images for sunset image
//* Changes source elements srcset to current img source when user clicks to the next slide

let firstSrc = document.querySelector("#intro > picture > source.sec")
let secSrc = document.querySelector("#intro > picture > source.treys")
let sourceForImgs = document.createElement('source') 

function setCitySrcSrcset() {   
  firstSrc.setAttribute('srcset', 'images/WEBP/city1920.webp')
  secSrc.setAttribute('srcset', 'images/WEBP/city2560.webp')
}

function setCoffeeSrcSet() {
  firstSrc.setAttribute('srcset', 'images/WEBP/coffee1920.webp')
  secSrc.setAttribute('srcset', 'images/WEBP/coffee5616.webp')
}

function setSunsetSrcset() { 
  firstSrc.setAttribute('srcset', 'images/WEBP/sunset1920.webp')
  secSrc.setAttribute('srcset', 'images/WEBP/sunset5184.webp')
}



// MEDIA QUERY: ADD MENU BUTTON when width is 480px or less (for Phone USERS)

const phoneMedia = window.matchMedia('(max-width: 480px');

function createSVG_menu() {
  

if (phoneMedia.matches) {
  const menuSVG = document.createElementNS("http://www.w3.org/2000/svg",'svg');
  const path1 = document.createElementNS("http://www.w3.org/2000/svg",'path')
  const path2 = document.createElementNS("http://www.w3.org/2000/svg",'path');
  const divForSVG = document.createElement('div');

 
  let svgAttr = [['xmlns', "http://www.w3.org/2000/svg"], ["height","48"], ['viewBox','0 0 48 48'], ['width','48']];

    
  svgAttr.forEach(attribute => { 
      menuSVG.setAttribute(attribute[0], attribute[1])
  });
   
   
   path1.setAttribute('d',"M0 0h48v48h-48z"); 
   path1.setAttribute('fill', 'none');
   path2.setAttribute('d', 'M24 4c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm0 24l-8-8h16l-8 8z');
   path2.setAttribute('fill', 'black');
   divForSVG.setAttribute('class', 'menuContainer')
    

   menuSVG.append(path1, path2);
   divForSVG.appendChild(menuSVG);
   body.prepend(divForSVG);
   main.prepend(divForSVG);
}

else { 
  let menuContainer = document.querySelector(".menuContainer")
  menuContainer.remove();
}
    

};

phoneMedia.addEventListener('change', createSVG_menu);

