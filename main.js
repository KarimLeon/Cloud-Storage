const img = document.querySelector("#intro > picture > img")
const sideContainer2 = document.querySelector("#intro > div.side-container2")
const dot1 = document.getElementById('dot1')
let picSrc = document.querySelector("#intro > picture > source")



function changeImages() {
  img.setAttribute('src', 'images/wetpaint.webp');
  picSrc.setAttribute('srcset', 'images/wetpaint.webp')
}


sideContainer2.addEventListener('click', changeImages())
    



/*
right_arrow.onmouseover = () => {
 let right_arrowSrc = right_arrow.getAttribute('src') 
  
  if(right_arrowSrc === 'images/right-arrow.svg') {

   right_arrow.setAttribute('src', 'images/right-arrow-hover.svg')
  

  }

  else {right_arrow.setAttribute('src', 'images/right-arrow.svg')}
}
*/
