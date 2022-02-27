'use strict'


const body = document.querySelector('.home')

const sC2 = document.querySelector("body > div.side-container2"),
      dot1 = document.querySelector("#intro > section > button.slide.dot1"),
      dot2 = document.querySelector("#intro > section > button.slide.dot2"),
      dot3 = document.querySelector("#intro > section > button.slide.dot3"),
      img = document.querySelector("#intro > picture > img"),
      divP = document.querySelector("#intro > blockquote"),
      main = document.querySelector('main'),
      picture_end = document.querySelector("body > div.side-container1 > div"),
      leftArrow = document.createElement('img') 

let rainy = 'images/WEBP/rainy1280.webp',
    city = "images/WEBP/city1280.webp",
    sunset = 'images/WEBP/sunset1280.webp',
    currentImgSrc = img.getAttribute('src')

function forced_Hover_State() {
   dot1.style.backgroundColor = "white"
}

 forced_Hover_State()


 function setSrcSet(firstImage, secImage) {
  let firstSrc = document.querySelector("#intro > picture > source.sec")
  let secSrc = document.querySelector("#intro > picture > source.treys")

  firstSrc.setAttribute('srcset', firstImage)
  secSrc.setAttribute('srcset', secImage)


 }

// Change image based off of which dots are clicked
// TODO change dot colors to skyblue 

dot1.onclick = () => {
  img.setAttribute('src', rainy)
  dot1.style.backgroundColor = "white"
  dot2.style.backgroundColor = ""
  dot3.style.backgroundColor = ""
  divP.setAttribute('style', 'display: content')
  picture_end.style.display = ""
  leftArrow.style.display = "none"
  leftArrow.style.cursor = "none"
  removeleftArrow()
  setSrcSet('images/WEBP/rainy1920.webp', 'images/WEBP/rainy5120.webp')
} 

dot2.onclick = () => { 
  img.setAttribute('src', city)
  dot2.style.backgroundColor = "white"
  dot1.style.backgroundColor = ""
  dot3.style.backgroundColor = ""
  divP.setAttribute('style', 'display: none')
  addLeftArrow()
  setSrcSet('images/WEBP/city1920.webp', 'images/WEBP/city2560.webp')
}

dot3.onclick = () => { 
  img.setAttribute('src', sunset)
  dot3.style.backgroundColor = "white"
  dot1.style.backgroundColor = ""
  dot2.style.backgroundColor = ""
  divP.setAttribute('style', 'display: none')
  addLeftArrow()
  setSrcSet('images/WEBP/sunset1920.webp', 'images/WEBP/sunset5184.webp')
}


function removeleftArrow () {
  const sC1 = document.querySelector('.side-container1') 
  picture_end.style.display = ""
  leftArrow.style.display = "none"
}

function addLeftArrow () { 
  const sC1 = document.querySelector('.side-container1') 
   picture_end.style.display = "none"
   leftArrow.setAttribute('src','images/SVG/leftArrow.svg')
   leftArrow.setAttribute('class', 'leftArrow')
   leftArrow.style.display = ""
  
   sC1.addEventListener("mouseover", event => {
      sC1.style.background = 'gray'; 
      sC1.style.cursor = "pointer";
  });
   sC1.addEventListener("mouseout", event => { 
        sC1.style.background = ""
       }) 
  
   sC1.appendChild(leftArrow)
}

//*Changes to next image if user clicks the next arrow


function changeImage() {
  const imgSrc = img.getAttribute('src')
   
   switch (imgSrc) { 
      case rainy: 
      img.setAttribute('src', city) 
      divP.setAttribute('style', 'display:none')
      dot1.style.backgroundColor = ""
      dot2.style.backgroundColor = "white"
      addLeftArrow(); 
      setSrcSet('images/WEBP/city1920.webp', 'images/WEBP/city2560.webp')
      break; 

      case city: 
      img.setAttribute("src", sunset)
      dot2.style.backgroundColor = ""
      dot3.style.backgroundColor = "white"
      setSrcSet('images/WEBP/sunset1920.webp','images/WEBP/sunset5184.webp')
   }

}


// MEDIA QUERY: ADD MENU BUTTON when width is 480px or less (for Phone USERS)

const phoneDevice = window.matchMedia('(max-width: 800px)');

function createSVG_menu() {
  


if (phoneDevice.matches) {
  const divMenu = document.createElement('div'); 
  const imgBase64 = document.createElement('img') 
  imgBase64.setAttribute('src',"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPiAgPGltYWdlIGlkPSJpbWFnZTAiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIgogICAgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFnQUFBQUlBQ0FZQUFBRDBlTlQ2QUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk4KQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQQpDWEJJV1hNQUFBN0RBQUFPd3dISGI2aGtBQUF5UlVsRVFWUjQydTNkZVp4Y1ZaMy8vOWU1MVdHVlRWQlJCQklRMlVIUUdSUVVBZlVuCnVJeCtCYUtzZ2lpNGdqbzY2S0JqSEJSUUdWRTIyUVJaVlVEbU4rTlhZUHdCT2dpNElSQkNBQUZOV0J3R0pjcStwZXQrZm44MGdhWkoKSjUxT1ZaMjd2SjZQUng2UG16cFY1M3pxZHAydWQ5OFZKRW1TSkVtU0pFbVNKRW1TSkVtU0pFbVNKRW1TSkVtU0pFbVNKRW1TSkVtUwpKRW1TSkVtU0pFbVNKRW1TSkVtU0pFbVNKRW1TSkVtU0pFbVNKRW1TSkVtU0pFbVNKRW1TSkVtU0pFbVNKRW1TSkVucXI1UzdnRGFKCklQRWJwakxFTkVxbUVVd0YxZ1pXSjFnRFdQM3BmNGxnR1dERmtSZU83V2dDeS8xb2l6R0xmZXdmZUlSZ1BvbVNZQjdCUEJMM1J6QVAKdUtzSTVwS1l5M3ptOEc3dVRPbDVvMGg5RTBIaUtOYWxaQm9sVTh0Z0tnWHJwQVh6T0o2Wnl3WEJGT0FGejc1NGRFZmpMQzloVzB6awpkUVA4L1REbS80OFNQUFgwSS9NaXVMOUl6SXVTZVJUY0ZjSGNDT1lPd1J5T1oyN0N1VHdvQm9BK2lhRGdkMnhLc0MwRld4RnNTYkFaCkUvbEZNTm0yWmdXQUpXbDdDSmdWaVJzTHVJNHUxL0F1YmpFVXFCY2lTSHlOVGVqeXVoSmVuV0FMWURPQ2xaOTkwdGdYamJPOHFMYm0KQm9BbDZlUGhnSnNTM0VqaXVtS1lhMWlUbTlNTVN0UnpCb0FlaXBsc1Jza3VsT3dJYkF1c1Vyc0pPTUgrS3hZQW50K1crQ3ZCTmFuawpjZ291U2UvaTkwZ1RGRjlqWTdyc0VvbWRDTFlGVnF2eS9HMU1BRmg0MndNSnJvbVNLNG9PbDZZVG1JMTZ3Z0N3Rk9KOE9tekFUc0J1CkJMc3dzam0vaVJQd2VjdVZEd0RQWDU0VGNIRVJYTWhNcnZRdkNvMFc1OU5oRHR1WHdlNXBaQzVQSFdrWS9hU3hMK3B4bXdGZ292M2YKUmVLU3Nzc0ZRMy9sNStrQ3VtaFNEQUNURU5lekhZbTlDWFlGWGxUQkNkTDMvbXNZQUVZdjN4dHdZVkZ5ZHRxVjM2TFdpbSt3VFRuTQozaW14RzdEbXlJT2puekRPY2ovYURBQ1Q2Zi9Qd0lWRmNFNDZtVitpSldJQW1LQzRubFZKVEFjK0NteFpvd25TbC81ckhnQkcvLytXCkJHY0NwNlgzTUE4MVhoekZLaFM4TjRJUEExdFYvUE01b2JZV0I0RFJ5N2NDM3l1Qzc2WlR1Qjh0bGdGZ01XSVc2MU55TU1FSGdSV2UKYlJqOXBMRXZtc0J5UDlvTUFFdlQvNk1CNXhaZHZwbW1lN3hBRThXUnJGY1dISklTQnhCUG4yRURkZmw4THJMTkFQQ2NsaWNKemk5Swpqa3luY1FzYWx3RmdIREdUYllERGdMY3pjaXJQbUNlTXM3eW90dXBNRUFQQStHMWQ0S0tVK0dwNkR6TlI3Y1hYMlRvU2h4RzhHeWhHCkhoejloTEV2bU1CeVA5b01BTDN1djB6d255bngxWFF5MTZMbk1RQ01FVFBaak1TL01ISmczN1BycDVrVFpOTDlOemdBTFBoL0FEOUoKSlY5TTA3a0IxVTRjelNZQk00Z3hjeG1hOFBsOHpySUJZTkZ0Q1M1TGlVUFRLVnlIbm1FQWVGck1aaDFLdmtid1hoYXNsd3A5Z0t2Vwpmd3NDd0FKbEJHY1dCWWVsWGJrWFZWNThrN1hLa2lOVHNCY0wrNHQvN1Avci9mazBBRXk4clFTK1h3U2ZTNmR4RHpJQXhMV3N3REo4CmdzUVhpRkVYNllFcWZvQXIwMytMQXNDQzVVY0RqaTRlNGFpMFAwK2d5b2x2c2p4ZERvN0VZY0JLRmZ2ODlMVi9BOEFTdFQxR2NGeXgKTEY5SkovSUlMZGJxQUJDejJabVNrNEIxUng0WSs0UnhsaWZiMXFEK1d4Z0FSaVQra0lLRDB1NWNqaW9qam1iN2dGT0FEWjk5Y1BRVAp4cjVnRW0wVi9ud2FBQ2JWTnFjcytmQ1UwL2twTGRYS0FCQTNzaG9GUndFSDF2d0RiQURJMDM4RW5GTU04U2xQSGN3cmptSFZNdmhhCkNqNUVML2J6TDZxdHdwOVBBOERrMnhKY2tEcDh0STJuRGhhNUN4aTB1Sm0zVUhBVGNHRHVXbFJiS2NFK01jeE5jVDQ3NXk2bXJlSVkKZG9wZ1Znb09wS1YvekdqcEJleGVEak43K0FEZW5ydVdRV3ZOcElrNUxNZmp6Q0Q0TERFcStEUWd3ZWJvditWYkFFWXZSOEJ4UmVLegphVHBQb2I2TGs1bFNQc0poS2ZIRmNlZnkyUDlYOS9QVGt6N2NBdENUL2dNNHRSamlVK2tVSHFNRldoRUFZamF2SVBFamdpMUdIaGpkCk9NNXlQOW9hMUw4QjRIbkx2MGtsdTZVOXVCdjFUUnpOdXRIaFJ3U3ZIbmxnZE9QWUovZTRyY0w5R3dCNjJIL2loaUx4bm5RYWMyaTQKeHU4Q2lKdDVHL0NiWjc3OHBmNzQrMGhjRitmeGx0eUZORlVjd3c3UjRUZlBmUGxML1JDOHFpeTVZWGgvM3BXN2xINXJkQUNJbXprTQorREd3V3U1YTFBcHJSTUhGOFFNT3lWMUkwOFEzK2NlQXk0QVg1NjVGcmJCeWdvdTZIK0J6dVF2cHAwYnVBb2lmTWNTYUhFOXcwTWdEClk1OHdnZVYrdERXb2YzY0JMR2I5QktjV2EvTFJ0Q1BEYU5MaWZEcmxuL2gyZ284OSsrRG9KNHl6M0krMkN2ZnZMb0MrOW45R01ZV0QKMGluTXAyRWFGd0RpZGxabW1BdUpVWnRpcS84QnExMy9Cb0FKUGU4LzB3dllJNzJ6SFFjVTlWcDhneFZqQ2o4Z2VNZHpHeWF3M0krMgpDdmR2QU9odi95bjRyMVN3ZXpxZGgybVFSdTBDaUJ0WmpXSCtDOXdQcTByNGgzaUVTK01jVnM1ZFNOM0VDYndncHZCakdQUGxMMlVRCjhOWnVseXRpWDFiUFhVc3ZOU1lBeEIyOG1DbjhESGh0N2xxa1VkNFFRMXdSNTdGRzdrTHFJazVrdFpqUFpjQ091V3VSRmtpSjE1UUYKVjhiZXZEUjNMYjNTaUFBUXMzZ0o4L2x2WU12Y3RValBFN3c2NExJNG54Zm1McVhxNG5oV2ovbjhITmdtZHkzU1FteFNUdUh5MktjWgpCNlBXUGdERUhGWmxDaGNERytXdVJWcUVMV09ZUytLN3JKUzdrS3FLWTFrNXVsd0NucktyQ2dzMkxndit2emlnL29HKzFnRWdibWRsCm51U253TmE1YTVFbTRPOWplZjV2L0pnVmNoZFNOZkVOVm96Z0o4RGY1YTVGbW9BdHVzUDhKRDVRNzBCZjJ3QVExektGa2d2eEY0YnEKWmZ0NG1QUGpmRHE1QzZtS09KOU9MTU81d090ejF5Sk5WSUxYUnNrRnNRTkR1V3Vack5vR0FGN0FzYzg1MVUrcWo3ZVh3eHlkdTRpcQpLTy9qR0dqK1ZkZlVQQkc4dFZ5WGszTFhNVm0xREFCeEc0ZVIrSER1T3FUSlNzRW40encra2J1TzNPSTRQcFhDOWFBYUN3N283c3VoCnVjdVlqTnBkQ0NodTR4MEUvd0VVVGJyUVJOMzY5MEpBUGVsak9KVzhKZTNEejJtaE9JNmRJdmd2WUtpaFA5K0I5ZStGZ0xMM1h3YTgKWStnc0xxRkdhclVGSUc1aEtzSDM2bGEzTkk2aEtQaGhuTVBMY3hjeWFIRUNhMGZ3QTZqdi9sTnBsQ0xCdWZFQjFzdGR5QklWbmJ1QQppWXE3V1o2Qy80Qm1YWWxKcmZmaWdQUGpaS2JrTG1SUVlnYkxSSmNmQVMvS1hZdlVRNnVWdzF3WW4yRFozSVZNVkcwQ0FFL3dkVHcvCldNMzB1bkpGL2lWM0VZTlNyczdoSk0vZVVTTnRWZjZOSTNJWE1WRzFPQVlnYnVldEJKY1FZK3F0MWo2Z1Z2WHZNUUE5NzZOTWlUZW4KdmZnWkRSYkhzMzBFVndDZGlxMy9XdmZ2TVFDVjZqOEMzakYwTmhkVGNaWGZBaEMvWncyQ002bEpXSkVtcVlqZ2pDYmZPQ2hPWnBVSQp6Z1d2Z2FCR1N3bE9xOE9WQWlzZkFFaDhDM2hKN2pLa0FWaTNwRDZiRDVkVStSVGZnUFlkOEtoV2VtazV2L3JYK3FoMEFJZzcyQVhZCkszY2QwcUFrK0VpYzFid3I0c1dKdkRIQkIzUFhJUTFNc1AvOHZhdDlzYnJLQm9DWXlZcEVmYSt3SkUxU0VZbVRtM1JXUUJ6THNoR2MKaXJ2eDFESUZmQ2YyWTduY2RTeWl2b3Bha2M4QjYrUXVROHBnRTFabzBOWHhDajVOc0VIdU1xUU0xaSs3ZkNaM0VlT3BaQ0tQTzFpYgo0RlpnaFpvZUJkcjQvajBMb08vOVA1U0cyVER0ei85U1kvRXRYaEpEM0Fhc1hMUDFYNnYrUFF1ZzB2MC9WaFJzbk03aUxpcW1tbHNBClNyNE8zakpWcmJaeU9jU00zRVVzclhLSUk2QzVaelpJRTdCQzJlVXJ1WXRZbU1wdEFZZy9zRGtsTjdBZ25EUWpBVGF1ZjdjQURLVC8KYm9KTjB6NzhuaHFLNDNsbHdHd1dYTzYzZnV1L052MjdCYUR5L1pjRmJKM09ZU1lWVXIwdEFDVkhWTEl1YWZBNkpYd2hkeEdUVlNZTwp4MnY5U3pCeW5ZL0tYZTJ6VWxzQTRnKzhodUEzakw3aVgzTVNZS1A2ZHd2QXdQcnZKdGc4N2NzdDFFaDhoODJpWkNZeEtzelhjLzNYCm9uKzNBTlNpL3loZ20zUXV2NlVpcXZhWDlyOVFzVkFpWmRZcEUvK2N1NGdsVlpaOGdlcjlmcEZ5U2dHZnkxM0Vjd3JLWGNBQzhRZGUKU1hBTFVEUTRBVGFtZjdjQURMVC8rUWxla2ZhdDNsSEVDeFBIczI0azdnQ0dHckwrSzkrL1d3QnEwMzlaQkJ1bDg3aWRDcWhPUWcvKwpzVkwxU05VeHBZejZYQmVnTFBnazd2dVhGcVlvRTUvTVhjUUNsZGdDRUhmelFwN2tIbUQ1a1FkR040NnozSTgyKzU5dy8yNEJHSGovCkQ2YmxlSG1hemlOVVdIeVhsZUlKL2dTc05PRDEwK3IrM1FKUXEvNGZLNEtYcC9QNEc1bFY0eS91cDlpWEJWLytraFptRlo3Z3ZibUwKV0t3bjJZTUZYLzZTRm1hRk1yRjM3aUtnS2dFZ3ZFbUl0RGdSZkNoM0RVMm9VYXFBU3N5VDdBRWc3bUE3WU5QY2RVZzFzRTJjd2VhNQppeGhQZklldFNMd21keDFTRFd3ZTcyT2IzRVZrRHdBazlzbGRnbFFYVmRsMHVORGFjQzVMRTFVVytlZHkxZ0FRUVFmNFA3bFhnbFFYCktmRytpR29jdkR0YUJDa0Z1K2F1UTZxTnhHNnhPNTJjSmVUZEFqQ0huWUFYWjYxQnFwZDFPSnUvejEzRTg1ekV0bmo3Ym1uaWdqV0gKcDdCOXpoTHlCZ0QvWXBDV1dCbnNscnVHNTlXRWMxbGFVa1hLTzVkekh3T3dTK2J4cGRwSndkdHkxN0NRbXQ2ZXV3YXBkakxQNVd3QgpJTzVnTTl4a0tDMjV4Q1p4THV2bUxtT0JPSTVwd0N0ejF5SFYwTlRZZzQxeURaNXpDNEIvL1V1VE5aKzM1aTdoR1ozcWJaR1E2cUlzCjJEblgyRGtEd0pzeWppM1ZXcG1xTTM4aXFsT0xWRGNwNC96SkVnQWlLRWk4TnRlYmx1b3V3ZXR6MXpDcW1OZmxMa0dxcTREdFlrYWUKNytJOFd3RG1zQm13U3BheHBXWjRXWnpCMU54RnhBbThBbGd6ZHgxU2phM0c3WG1PQThnVEFQeUxRVnA2aWUxeWwwRGhYSmFXVnJlYgpaeTduQ1FEQjFsbkdsUnFraEZkbHJ5RTVsNldsbFZLZXVaenJJTUF0TW8wck5VYXF3RHhLa2I4R3FlNGkwMXdlZUFDSW9BQTJ5L0ZtCnBZYXB3cGR2WmU5T0tOVkZnaTJDd2QvalkvQmJBTzVrWGVBRkF4OVhhcDQxNDB4V3p6VjRuTXBMZ0JmbFhnbFNBNnpNKzNqNW9BY2QKZkFEb3N0N0F4NVNhS2pFdDI5ak9aYWwzaXNIUDVjRUhnSnkvc0tTbTZXYWNUNlZ6V2VxVmJyUWhBRkNkYTVoTHRaYzNVRS9OL2ZhbApwa2daNXZMZ0EwQU1maitIMUZRbHJKMXQ3TVJhdWQrLzFCZ3grTG1jWXhlQUJ3MUp2Yk5Hcm9HVGMxbnFtWlJoTHVmWUJaRHRGNWJVCk5JbDhad0hnWEpaNnBvekJ6K1VjV3dEOHBTSDFUcjc1Rk01bHFWZFNodS9HSE1jQXJEVHdNYVhtV2puajJNNWxxWGNHUHBkejdBSlkKTnNPWVVsUGxuRS9PWmFsM0JqNmZjZ1NBWlRLTUtUVlZ6aTloNTdMVU93WUFTVXZFQUNBMVF5c0NRQ2ZEbUZKVERXVWMyN2tzOWM3QQo1M0t1MndGTGtxU01EQUNTSkxXUUFVQ1NwQll5QUVpUzFFSUdBRW1TV3NnQUlFbFNDeGtBSkVscUlRT0FKRWt0WkFDUUpLbUZEQUNTCkpMV1FBVUNTcEJZeUFFaVMxRUlHQUVtU1dzZ0FJRWxTQ3hrQUpFbHFJUU9BSkVrdFpBQ1FKS21GREFDU0pMV1FBVUNTcEJZeUFFaVMKMUVJR0FFbVNXc2dBSUVsU0N4a0FKRWxxSVFPQUpFa3RaQUNRSkttRkRBQ1NKTFdRQVVDU3BCWXlBRWlTMUVJR0FFbVNXc2dBSUVsUwpDeGtBSkVscUlRT0FKRWt0WkFDUUpLbUZEQUNTSkxXUUFVQ1NwQll5QUVpUzFFSUdBRW1TV3NnQUlFbFNDeGtBSkVscUlRT0FKRWt0ClpBQ1FKS21GREFDU0pMV1FBVUNTcEJZeUFFaVMxRUlHQUVtU1dzZ0FJRWxTQ3hrQUpFbHFJUU9BSkVrdFpBQ1FKS21GREFDU0pMV1EKQVVDU3BCWXlBRWlTMUVJR0FFbVNXc2dBSUVsU0N4a0FKRWxxSVFPQUpFa3RaQUNRSkttRkRBQ1NKTFdRQVVDU3BCWXlBRWlTMUVJNQpBa0EzOTV1V0pLbGloZ2M5WUk0QThGU0dNU1ZKcXJJbkJ6MWdqZ0F3OERjcFNWTEZHUUFrU1dxaFZnU0FoektNS1VsU2xUMHc2QUZ6CkJJRDdNNHdwU1ZKbFJZYnZSZ09BSkVtWkZUQXZ3NWdEbGd3QWtpU05GdEdHQUJEY00vQXhKVW1xc3NSZGd4NHlSd0NZTy9BeEpVbXEKc0VpRC8yNGNmQURvTUdmZ1kwcVNWR0dkY3ZEZmpZTVBBQ1YvSFBpWWtpUlZXWGZ3MzQyRER3RFR1QXV2QlNCSjBnSi9TeGZ3cDBFUApPdkFBa0JJQnpCcjB1SklrVlZIQWpUbkd6WE03NEpUbnpVcVNWRFdwVlFFZ3VDN0x1SklrVlV3RU4rUVlOMDhBNkhCTmxuRWxTYXFZClRuQlZqbkh6QklCMXVJVTArS3NlU1pKVU1mZnpRMjdQTVhDV0FKQVNRZkRMSEdOTGtsUVZDYTVLRURuR3pyTUZZTVFWR2NlV0pDbTcKZ010empaMHZBQlJja20xc1NaSXFvQ2k0Tk52WXVRWk8wN2lWNUZVQkpVbXQ5Y2QwRG5ma0dqem5MZ0FJdHdKSWtscnIvK1ljUEc4QQpLTGt3Ni9pU0pHVlNKTTdQT243V2QvOEtyaVQ0bjZ3MVNKSTBlUGV3UWQ2ejRiSUdnSlFvS2ZoUnpob2tTY3JnL0RTRE1tY0JlYmNBCkFBUm41eTVCa3FSQktrck95VjVEN2dMUyt2d1d1RDUzSFpJa0RjanYwZy95Zis5bER3QUFCTi9OWFlJa1NRT1JPRFYzQ1ZDVkFGQncKRHZCSTdqSWtTZXF6aDR2Zys3bUxnSW9FZ0xRK0R3S241NjVEa3FTK1NweVd6dVdoM0dWQVJRSUFBQjJPQVlaemx5RkpVcDhNRnlYZgp6bDNFQXBVSkFHa2FjMG44ZSs0NkpFbnFrd3ZTZWR5WnU0Z0ZLaE1Bbm5ZNDVEMHZVcEtrUGlpTGtxTnlGekZhcFFKQVdwOVpKQzdLClhZY2tTVDMyZy9SOWJzeGR4R2lWQ2dBQWxId0p0d0pJa3Bxalc1UWNucnVJc1NvWEFOSUczQXljbWJzT1NaSjY1THZwKzl5YXU0aXgKS2hjQUFPandlYWpHYVJLU0pDMkZoNG9odnBTN2lJV3BaQUJJNjNFZmNHVHVPaVJKV2lxSkdlbDcvRy91TWhhbWtnSGdhY2NBdCtVdQpRcEtrU2JxNVdKN2pjeGN4bnNvR2dMUUJUd0lIQXBHN0ZrbVNsbEJaRkJ5VVRtRis3a0xHVTlrQUFKQTI0TDlKbkphN0RrbVNsa2h3ClVqcUxxM0tYc1NpVkRnQUFEUEZQd0QyNXk1QWthWUx1TElMUDV5NWljU29mQU5JMEhnRDJBcnE1YTVFa2FUSEtNdGl2S2pmOFdaVEsKQndDQTlFcXVCUDR0ZHgyU0pDM0dFVlBPNGVlNWk1aUlXZ1FBQU9ielJlQTN1Y3VRSkdsaEFxNHBsdWRmYzljeFViVUpBR2xUbnFMRApic0NmYzljaVNkSnpKTzdyd1BRcUgvVS9WbTBDQUVCNkJYY1Q3QUVNNTY1RmtxU25EUmN3UFozRm4zSVhzaVJxRlFBQTBrWmNRZkNaCjNIVklGZkZrUzhlV3FpUDRaRHFUSzNPWHNhUnFGd0FBMGtaOG0rRFkzSFZJMmFXc1J4by9rdnZ0U3hYd3pjN1puSkM3aU1tb1pRQUEKWUVNK0RmeG43aktrckNKckFIZzQ5OXVYY2tyQlJjVjZmRFozSFpOVjJ3Q1FFbDFXNUgxUWo5TXRwRDY1TTl2SXdWMjUzN3lVUzhEVgpLZGczemFETVhjdGsxVFlBQUtTMWVad083OExUQTlWU1FiNTdqRWRSdmZ1YlM0TVFpVjkzT3V5U3p1YlIzTFVzalZvSEFJQzBBUS9SClpSZGdadTVhcEVFcmdsc3lqbjF6N3ZjdlpYQkQ1eWwyU2FmWGZ4ZFk3UU1BUU5xVXYvSUVPd0MvekYyTE5GQkRHWTg4THF0OW94T3AKMXlLNHRpaDVjenFQditXdXBSY2FFUUFBMGxZOHdGTzhoY1RsdVd1UkJ1VHV0QTkzNUJvOGZZeGJvRjduUFV1VEZYQmxwOE5PNlN6bQo1YTZsVnhvVEFBRFNsanpLSS93RGlmODNkeTFTdndWY2tyMkc0TkxjTlVqOWx1QkhuVWZadVFtYi9VZHJWQUFBU0svaE1UYmtQUVJmCnpsMkwxRTlGd2RuWmF3ak96VjJEMUdmSHBxbE1UeGZ3ZU81Q2VxMXhBUUFnSlNKdHlneUNnL0d5d1dxbU9lekQxYm1MNEMvOE56QTMKZHhsU0g4d24rRmpuREE2cDg2bCtpOUxJQUxCQTJwVGpDSFlDL2pkM0xWSXZwZUJiS1JIWjY1aEJtYndxcDVybkx5WHMzUGtlSitZdQpwSjhhSFFBQTBxYjhnaUZlZzJjSXFDbUMrMWlCVTNPWDhZekhPQVg0Uys0eXBGNEl1THFBVjAwNWd5dHkxOUp2alE4QUFHbEQvc1RqCnZCRTRBdWptcmtkYUdnbU9TTk9yc3o4eWZaWkhFeHlWdXc1cEtYVkovR3RuSFhaSXAvTS91WXNaaEpTN2dFR0xtOW1la3JPQWRVY2UKR04wNDlzazlibXRRLzFIeittdmMvOHkwRHE5Sk8xYnIySlk0bVNuUjVUcGdzNGF2LzByMkh4TjVYWVhycjBEL2N3dllPMzIzQXNmVgpERkFydGdDTWxqYmhTcFpsQytBRWFPYUJIV3FzYm9LUFZPM0xIeUFkeFB3VWZBVG5sT3FsSkRpMkNMWm8yNWMvdERBQXdNamxnOU5tCmZCellIcnljcWVvaEJUUFMrNnQ3TEV2NkdGZEZjSGp1T3FRSm1sV1ViTnM1blVPYWRuNy9STFV5QUN5UU51TnFudVJWSkQ0TlBKQzcKSG1sY2laOHlseU55bDdFNHhZczRuR2ord1ZPcXRiK1NPTGg0T1Z1bk0vaDE3bUp5YXQweEFPT0o2M2dSUXh3T0hBQU1qVHc0K2dsagpYekNKdG5ydkkvTVlnSHo5ejB6TDhjWTBuUWVwZ1RpR1ZXTVpyZ1EyYjhqNnIzei9IZ013b2JiNXdLbkZrL3hMa3k3bnV6UU1BR1BFCjlXeEFoMzhCOWlSR2JTR3B4Z2U0TXYwYkFBYlcveDlTNGcxcEgrNmxSdUk0WGhZRlZ4Rk02L1A2NlcwZk5lM2ZBTERJdGk3Qk9VWEoKdjZiVCtTTjZoZ0ZnSERHYlRlanllWUwzQWxNYVBrR1d1SDhEd0VENm41bGdsN3A5K1Qvek5vN2paWkc0Rk5pOFQrdW43ajlmQTBCLworMzhLK0g0eHpKSHBkSDZQbnNjQXNCZ3hpN1VwT1pqZ1FHRGxaeHRHUDJuc2l5YXczSTgyQTBDVCt2OXBXcGJwZGRuc1A1Nm5kd2RjClFQRG1tcTMvV3ZWdkFIaE95NE1FSnhjRng2YVR2RnZsb2hnQUppam1zQndQOEU0S0RuemVMN1A2VFJBRFFIWDc3MGJ3bFdKWkRrL1QKbTNIUnFnZ1NKL0JQRVh3VjZDemwrcW43ejljQTBMLytmd2VjVW5RNEw1M0lJMml4REFDVEVEZXlPVjMyQnFZRFUyczBRWHJXdndHZwpMMzNNVEFVZlNYdFc5MVMvcFJISHNWMEVKNUxZWXBMclo5RnQxZi81OXEzLzFnYUF4QnlDSHhaZHprbW5NaHN0RVFQQVVvZ2djU04vCnp6QzdrWGdic01sSXcrZ25qYlBjanpZRFFGMzd2eThsanVCbG5GakZpL3owVXN4Z2lEWDRlQVNmSjNqeEJOZlB4TnFxKy9QdGUvOHQKQ3dDemdZdUw0TUowRXI5QmsyWUE2S0c0am5VSmRnWjJBcllEMW1yb0JEUUE5S2FQT1FtK3hSUk9yZEsxL1FjaFRtWUZudUpERVJ3QwpUR3ZvejNkZy9UYzhBTnhEY0ZVa3J1akFwZWxFN2tZOVlRRG9vN2llcVpSc1IvQXFZRXVDellFMW4zM0M2Q2VQZmZFazJnd0FkZWovCjdraGNVZ3h6RG50elZSVnU2WnRUQklsdjg0YXlZTzhVN0FLOGZLUmg5SlBHdm1nQ3kvMW9xM0QvRFFvQTl5YVlGU1UzQnR6UVNWeVYKVHVCTzFCY0dnQUdMWDdNNmlmVVkrYXRuR2lPLzhGWW5zUWJCaXhnNTA2QkRqSFBHd2RqL1Z5VUFqRldPMDBkRjZsOXMyM2p2WmVMOQpQd2c4VEhCbndLMEYzRUxKTDlKZTNJN0dGY2Z6U29aNVF3a2JwOFJHd0RxVXJBU3NzdEFYVE9aek50bTJmdlEvM250Wnd2NHJFUUFXCjlYNkNoeGk1RSt1RENlNlA0SDVnSHNIZEFYTTZKWE5KL0RHZDRBVjZKRW1TSkVtU0pFbVNKRW1TSkVtU0pFbVNKRW1TSkVtU0pFbVMKSkVtU0pFbVNKRW1TSkVtU0pFbVNKRW1TSkVtU0pFbVNKRW1TSkVtU0pFbVNKRW1TSkVtU0pFbVNKRW1TSkVtU0pFbVNKRW1TSkVtUwpKRW1TSkVtcWw1UzdnTGFKWC9FU0V1dFJNSlZnS3ZCeVlBMkNGd0dyQXk4Z3NSd2x5ei83b3JHZFRHQzVIMjB4Wm5IczYwWXJsNjcvCmZ0ZS8yTGJ4M3N2RSszK0lra2RKM0JWd1N3RzNFUHdpN2NtdGFGeHhEQnRUOElZeTJEakJSc0M2QkNzQUt5LzBCWlA1bkUyMnJSLzkKai9kZWxyRC9tTWpyK3IxK0Z2Vitnc2VBSjRGSEVzeUw0QzhrN2dmdWlXQnVwMlF1WGY2UVR1TFBhR0FNQUgwVTE3SSt3YllVYkVYSgpGc0NXd0JyUFBtSDBrOGUrZUJKdE9RTkF6ZXJQMlArOWtiaTRDTTdtTm42UlpqenYxMzZyeEF3S1Z1T05KZXlUWUdmZ3BTTU5vNTgwCjlrVVRXTzVIVzRYN3IwUUE2RTMvZjBuQmpRRXpBMjdvbEZ5ZHZzTWZVVjhZQUhvb2ZzdDZGT3dDN0FSc0M2eFp3d2xvQUJoYy8zTVQKSEV1WFU5SytQRXFMeERkWWtXVTRLQklITS9KWC9zTFd6L09YRjlWV3ZaL3Z3UHB2VUFCWVdOdTlLYmdtZ3N1TElTNU54ek1IOVlRQgpZQ2xFa0xpQmJZRmRDZDRPdkhLa1lmU1R4bG51UjVzQm9KNzlsL3dsd1ZFOHhuSHBJT2JUWUhFeVUzaUtReUk0bFBHMmhvMzlmOTEvCnZnYUEzdmFmdUpYZzRxTGtRazdtVjJuUk95SzBDQWFBU1lnYjJJcVN2WUhkU2F4ZHVRa3lnUDROQUgzcDQ2WlU4SkcwSjFmUlFIRTgKMjBkd0lyRHBKTmZQb3R1cS8vUHRXLyt0Q2dEUC9mOWRKTTR2U3M1Skp6TVRMUkVEd0FURnJhekVrL3dmWUIrQ045ZG9ndlNsZndOQQozL3FQQ0w1ZUxNdGhhVHBkR2lET3AxUGV4eGNUZkFIb0xPWDZxZnZQMXdEUXYvNS9CNXhTek9mNzZYUWVSb3RsQUZpTXVJNTFLVGdFCk9JRFJSeUxYYzRMMHJIOERRTi83dnlJTnMydmFud2Vvc1RpUjFhTGtJbUNIbXEzL1d2VnZBSGhPeTBNRXB4WndiRHFGdTlDNERBRGoKaUZsc1Fjay9BN3NDUXcyYklBYUFldlEvS3cyeGM5cUQvNkdHNGp1c0ZjTmNTbUt6UHEyZnV2OThEUUQ5N1g4K2NFRVJISkZPWlRaNgpIZ1BBR0RHTGpTbjVFb25kQ1lwbkc4WStjWnpsUmJWVmI0Sk11bjhEd01ENm41T204UHE2aFlENERtdEZ5VldNWE91aW4rdW50MzNVCnRIOER3Q0xiU29JZkZJa3ZwMU81RFQzREFQQzBtTTJhZFBrcThINFc3S2VzemdlNGN2MGJBQWJhLzQycHl4dnJzanNnVG1TMUNLNEUKTm12SStxOTgvd2FBQ2JVTkEyY1VIYjdnQllkR0ZFdmZSYjNGN1N3Yk4vSTVTbTREUHNEb2c1U2thdGdpT2x3UU02by9YK044T2dFWAp3ZE9iL2FYcUdBSStWQTV6Vy9jQVBoTzdzMHp1Z25Lci9DK1Vmb29iZVNOUE1JdkVrY0JLdWV1UkZ1SE5UT09MdVl0WW5QSitaaERzCmtMc09hUkZXSWZHTmNoVm14Z2Q0ZmU1aWNtcmxMb0M0bmxXWnd0ZUJEeEtqMWtIMU4yRlZwbjkzQVdUcHY1dUNONmI5dUpvS2l1UFoKUGdwK051NnhNL1ZmLzVYdDMxMEFrMjRyZ1pPTEovaGNPcGVIYUpuV2JRR0ltOWlSS2N3Q1BrUkxBNUJxcXhPSmsrSmtwdVF1Wkt5WQp3VkFVSEVjTGY2ZW8xZ3JnSStWeTNEVC9nKzNiY3RXYXlScXpXU1p1NG1za0xtUGtEbnhTSFczRzhud3NkeEhQOHlJK0NXeVJ1d3hwCmt0WXVTaTdyN3M4UmNXRDFBbmEvdE9JdjRKak5Pc0NGd04rTlBEQzZjWnpsZnJRMXFIOTNBV1R0LzgvcENhYWxnM2lNQ29odnNHS3MKeUZ3V1hOcy8vL3BwWGYvdUF1aGQveEg4cXROaDkzUWE5OUJ3amQ4Q0VMZndSdUEzTFBqeWwrcnZ4U3pIaDNJWDhZd1ZPWWpSTi9hUgphaXdsWGx1V1hELy9BN3c1ZHkzOTF1Z0FFRGZ6S1lMTGdaZmtya1hxcFlCREl2SnZ3WXNaRkFFSDU2NUQ2ckUxaXVDUzd2N04vbXczCk1nQkUwSW5aSEFkOEU4L3JWek5ONDNzVk9JWHBKZXdBckp1N0RLa1Bob0J2ZC9mbjVKakJVTzVpK3FGeEFTQm1zaUszOHU4a1BwNjcKRnFtZnlvSjlzdGVRMkR0M0RWS2ZIUmh6dVNBT1pJWGNoZlJhb3dKQXpPWUZMTU9QZ1hmbXJrWHF0eFM4clFJMXZEVjNEVksvQmJ5NworeFNYeGw2ajdnamJBSTBKQUhFanExRndHYkJqN2xxa0FWa3J6bUNEWElQSFNXd0N2Q3ozU3BBR0ljRWJ5aWxjRVFjMjU0RFhSZ1NBCnVJWFZtY0xQZ1cxeTF5SU5WR0w3YkdPWEZUZ0dRUnFzVjVkUGNWa2N3QXR6RjlJTHRROEFjVHNyazdnRUwwS2lGaXBoNDJ4akp6YkoKL2Y2bERMWXNoN2tzOW1QVjNJVXNyVm9IZ0pqSmluUzVHTS94VjBzbDJDamIyTUdHdWQrL2xNbFczZUEvNm41Z1lHMERRQVFkbHVHSAp3SGE1YTVFeVdpZmJ5Q25qMkZKbUNiYVBwemd2ZHEvdnFlYTFEUURjeHJkSXZEMTNHVkpXS2V0UnlkNUNXNjBXd2J2SzVUa2hkeDJUClZjc0FFTC9uSDhIei9DVWlhd0I0UWU2M0wxWEFRZDE5T1NSM0VaTlJ1d0FRdC9FVzRHdTU2NUFxWXRtV2ppMVZ5ZEh6OTYzZktlaTEKQ2dEeEI5WWhPQTh2N3l0SnFvNmhBaTZJL1ppYXU1QWxVWnNBRUxlekxGMHV3cnVPU1pLcVovVnV5US9pUUtia0xtU2lhaE1BZ0s4Uwp2RHAzRVpJa0xVeUNiY3JIK1hMdU9pYXFGZ0VnYnVlTkJKL0tYWWNrU1l0eDZQeDkyQ2wzRVJOUitRQVFkN0lhd2JsMXFGV1MxSHBGCkFkK0wzVmtsZHlHTExUUjNBWXYxSlA4R3JKVzdERW1TSm1qdGNqbU95bDNFNGxRNkFNVHQ3QURzbDdzT1NaS1cwRUZWM3hWUTJRQVEKZDdNOGNCcVFjdGNpU2RJU1NrVndZbnlpdXRmTHFHd0E0SEUrQTZ5ZnV3eEpraVpwdy9LQjZsNGxzSklCSUg3UFdpUU96VjJISkVsTApKZmhDN00xTGM1ZXhNSlVNQUJRY0NheVl1d3hKa3BiU1NpVWNucnVJaGFsY0FJamIyUlRZSzNjZGtpVDF5SDZ4RHh2bkxtS3N5Z1VBCkVvZFhzaTVKa2lhblU1WjhLWGNSWTFYcWl6WnVaMnZnM2JucmtDU3B4NmJIM215WnU0alJLaFVBU0J5R3AvMUprcG9ubGNIbmN4Y3gKV21VQ1FOektOT0JkdWV1UUpLbFBkb3YzVnVmMDlzb0VBS2J3ajBBbmR4bVNKUFZKcCt6d2lkeEZMRkNKQUJCeldCVXYrU3RKYXJyRQpBVlc1VVZBbEFnQmQ5aVk4NzErUzFIZ3ZLS2V3Wis0aW9Db0JJSEZBN2hJa1NScUlnZy9uTG1Ha2pNeGlEdHNRdkNwM0haSWtEVVN3ClJlekpxM09Ya1QwQVVMSlA3aElrU1Jxa2t2emZmVmtEUUFRRjhKN2NLMEdTcEFHYkhydm5QZk10N3hhQVA3QURWUE11U1pJazlkRkwKbWNKMk9RdklHd0FTdTJZZFg1S2tUTXJFYmpuSHp4MEFkczQ2dmlSSnVRVHZ5RGw4dGdBUWM5bVlZTDJjYjE2U3BJeW14WjVza0d2dwpmRnNBdXV5U2JXeEpraXFnSk45M1ljNWRBRHRsSEZ1U3BPeFN4dS9DTEFFZ2dnUzhMdGVibGlTcENnSzJDMGc1eHM2ekJlQU9OZ0ZlCm1HVnNTWktxWXczMllNTWNBK2NKQUIyMnpUS3VKRWtWMDAxNXJnZVFKd0FFVzJjWlY1S2tpa213Vlk1eDh3U0FnaTJ5akN0SlVzVkUKc0htT2NRY2VBQ0pJQkp2bGVMT1NKRlZOZ2kxeUhBZzQrQzBBYzFrWFdIbmc0MHFTVkUycnNoZHJEWHJRd1FlQXJsZi9reVRwT2JwTQpHL1NRZ3c4QWlha0RIMU9TcEFyckZnWUFTWkphSjVWdENBREIyZ01mVTVLa0trdXNNK2doYzJ3QldHUGdZMHFTVkdFcFdIM1FZK2E0CkRvQUJRSktrVWNvTTM0MEdBRW1TTWt1cEhWc0FWc293cGlSSlZiYktvQWZNRVFDV3pUQ21KRWxWTnZEdlJnT0FKRW41dFNJQUxKTmgKVEVtU3Fxd1ZBYUNUWVV4SmtxcHNhTkFENXJrZHNDUkp5c29BSUVsU0N4a0FKRWxxSVFPQUpFa3RaQUNRSkttRkRBQ1NKTFdRQVVDUwpwQll5QUVpUzFFSUdBRW1TV3NnQUlFbFNDeGtBSkVscUlRT0FKRWt0WkFDUUpLbUZEQUNTSkxXUUFVQ1NwQll5QUVpUzFFSUdBRW1TCldzZ0FJRWxTQ3hrQUpFbHFJUU9BSkVrdFpBQ1FKS21GREFDU0pMV1FBVUNTcEJZeUFFaVMxRUlHQUVtU1dzZ0FJRWxTQ3hrQUpFbHEKSVFPQUpFa3RaQUNRSkttRkRBQ1NKTFdRQVVDU3BCWXlBRWlTMUVJR0FFbVNXc2dBSUVsU0N4a0FKRWxxSVFPQUpFa3RaQUNRSkttRgpEQUNTSkxXUUFVQ1NwQll5QUVpUzFFSUdBRW1TV3NnQUlFbFNDeGtBSkVscUlRT0FKRWt0WkFDUUpLbUZEQUNTSkxXUUFVQ1NwQll5CkFFaVMxRUlHQUVtU1dzZ0FJRWxTQ3hrQUpFbHFJUU9BSkVrdFpBQ1FKS21GREFDU0pMV1FBVUNTcEJZeUFFaVMxRUlHQUVtU1dzZ0EKSUVsU0N4a0FKRWxxSVFPQUpFa3RsQ01BZEhPL2FhbEJoak9PN1Z5V2VtZmdjemxIQUhncXc1aFNVejJaY1d6bnN0UTdBNS9MQmdDcAozZ3dBVWpPMElnRGsvSVVsTlUzTytlUmNsbnFuRlFIZ3dReGpTazJWY3o0NWw2WGVHZmg4eWhFQTVtVVlVMnFxK3pPTzdWeVdlaVF5CnpPVWNBU0RuTHl5cFVTTGpsM0NPWDFoU1V4VXgrTGs4K0FBUS90S1FlaWpuWCtIT1phbEhJclVoQUNUdUdmaVlVa01WY0hlMnNaM0wKVXUra3djL2xITHNBNW1ZWVUycW1ZRTdHMGVmbWZ2dFNVMFNHdVp4akY4RGNnWThwTlZYSEFDQTFRU2UxSVFCMCtPUEF4NVNhS3VjVwpBT2V5MUR0bEd3TEF1c3dGSGhyNHVGTHovRTk2Zjc2REFOT0h1QS80Yys2VklEWEFBL3hnOE1mVUREd0FwRVFBc3djOXJ0UTR3YXpjCkpVQWxhcEJxTFdCV2doajB1SGx1Qnh6TXpES3UxQ0JSY0dQMkdwekwwbEpMS2M5Y3poTUFDcTdQTXE3VUlFWEpEZGxyU1BscmtPb3UKSXM4OHloTUF1bHlUWlZ5cFNUcGNsYnNFZ3F0emx5RFZYWWM4Y3psUEFGaWYyY0JmczR3dE5jT2YwcjdjbGJ1STlGSCtDTnlidXc2cAp4dTduKy93K3g4QlpBc0RUQndMK0tzZllVaE1FWEptN2htY2t0d0pJazVYZzZod0hBRUt1TFFBajcvcG4yY2FXYXE2bzBQeEpaWFZxCmtlb215RGQvOGdXQUxwZGtHMXVxdi8vS1hjQXpTdWV5TkZsRnh1L0NiQUVnYmNCczRNNWM0MHMxZGxNVjl2OHZrRDdCSE1pekQxT3EKdVRucGg5eVdhL0I4V3dCRytKZUR0SVNpZ3ZNbTRDZTVhNUJxNk9LY2crY09BQmRtSGwrcW5hTGtndHcxUEsrbXdya3NMYWtpOHM3bAp2QUZnUFg0TzNKZTFCcWxlNXJBZjErWXU0bmtPNGxkNGQwQnA0aEwveTNEZWEzbGtEUUFwMFFWK2xMTUdxVTRDZnZqMGFiU1ZraElSCmJ0R1RKaTQ0UDExQU4yY0p1WGNCUU1rNXVVdVE2cUpJbkp1N2huRnJLNXpMMGtRVktmOTh5UjRBMGdiODBwc0RTUlB5eTdRdk4rVXUKWWp6cHc4d0VmcHU3RHFueUVqZW1jL1BQbGV3QjRPa3F6c2hkZ2xSMUtUZzFkdzFOcUZIS0xqZ2xkd2xRbFFDd0RHY0RqK1V1UTZxdwpCeWs0UDNjUkUvQjk0S0hjUlVnVjltZ3hwUnE3OGlvUkFOTGEvSlhnek54MVNGVVZ3VWxwWHg3TlhjZmlwSS94U09CV0FHa1JUay9mCjQ0SGNSVUJGQXNEVGxSd0RsTG5Ma0Nwb2Z0SGxoTnhGVEZUUjVWdkEvTngxU0JYVUxZYjVkdTRpRnFoTUFFanJjenZ3bjducmtLb20KRXVlbEQzQjM3am9tS2gzTVBaSDVBaWRTRmFYRVJlbUgvQ0YzSFF0VUpnQTg3U3RrdWkyaVZGSGRZcGlqY2hleHBBbzRBcmZvU2FORgpLamtpZHhHalZTb0FwRmZ3Tzl3S0lEMGpFdWVrL2JrMWR4MUxLbjJjMlFFL3pGMkhWQlVwY1dFNmp4dHkxekZhcFFMQTA3NkFmemxJCk1MTHYvL0RjUlV4VzBlRkx3SER1T3FRS0tGTlVieTVYTGdDa1YzQVRJNmNTU2EwV2NHcmFyenI3QzVkVStqQzNSM2lORDRuZ3JIUXUKczNLWE1WYmxBZ0FBSllkQzlVOTVrdnJvYjAvL0JWMXJ4UkJmQUI3TVhZZVUwY05GNHA5ekY3RXdsUXdBYVVQK0JIdzlkeDFTTGlueApwYlFuOStldVk2bmZ4MGY0Y3dxK2tyc09LYU92cG5PNE4zY1JDMVBKQUFEQWNud0RtSk83RENtRFdhekZkM0lYMFRQek9CYnFkeUNqCjFBTzNGYXZ4cmR4RmpLZXlBU0N0emVNa1BvaW5CYXBkeWdRZlRqczI1K0M1TklPbkVud0FEKzVWdTBRWmZEUWR4NU81Q3hsUFpRTUEKUUhvRlY1QTRPM2NkMHFBRUhKLzI0WnJjZGZSYStqaS9ES3B4QXhScElCTGZuWEl1bCtjdVkxRXFIUUFBR09iVFVNMzlKMUtQelMyZQo1QXU1aStpWElqZ1V1Q3QzSGRJQS9La1k1cDl5RjdFNGxROEFhV1Bta2RnUGR3V28yY3BVc0Y4NmdJZHpGOUl2NldBZVNzSGVRRGQzCkxWSWZsV1ZpdjNRZWY4dGR5T0pVUGdBQXBBMzRLWEJzN2pxa2Zvbmc4TFFuLzUyN2puNUxCL09MOEF3Zk5WbndiMVBPNHJMY1pVeEUKTFFJQUFGUDRIRlRyTW9wU1R3UlhGUzl2ejZseXhUSjhDZmhWN2pxa1hndTR0azY3OFdvVEFOSTBucURMdTZIKzUwWkxvOXlYU3Q3WApwS1ArRnljZHhQdzB6SHZ3MkI0MXkxODd3ZlIwQVUvbExtU2lhaE1BQU5JbTNFbGlEOXlIcUdZWVRqQTl2WjgvNVM1azBOS251RGNsCmRnZm01NjVGNm9HeUxOZ3JuVjJ2YTlmVUtnQUFwRmR5R2RSbkU0czBucFE0Sk8zRmxibnJ5UGIrUDhIVkNUNlR1dzVwcVNVT25mSTkKTHMxZHhwS3FYUUFBU0J0eUZIQmk3anFreVlyRXY2VTkvUXluZ3prMmdtL25ya05hQ3FkMnp1VG8zRVZNUmkwREFBQ3Y1R0RneDduTAprQ2JoeDhVUWgrWXVvaXFLdi9GcDROOXoxeUV0cVFTWEZIZngwZHgxVEZadEEwQktkSUc5Q0g2ZHV4WnBDZndzRGZIZU5OM2pXQlpJCk15alRjdXdON2QwZG92cUo0SnBVc252NmVYMFA0SzF0QUFCSUcvRXd5L0JXNExyY3RVZ1Q4T3YwT085SzAzazhkeUZWa3c3aXNmUVUKYnlPNE9uY3QwbUlGTXp2RHZDT2RYZS9iMXRjNkFBQ2s5WG1RSVhZaHVDVjNMZElpWEorQ1hacDhwYitsbFQ3TG82bmtINENadVd1UgpGbUYyMGVFdGRialMzK0xVUGdBQXBGZndaNVpoQjVJWENsSWxYWnZtODVhMFYvMS9ZZlJiK2pSL1RTVTc0SVdDVkVXSjY0dkVqdWtNCi9wSzdsRjVvUkFDQXAwUEE0K3dJL0RKM0xkSXpnaXRUbHplbDl6TXZkeWwxa1Q3RkEyaytiNFpxMzBsTjdSTHcyNkxnelUzNThvY0cKQlFDQXRCVVBVUEwvUVAzT3gxUWpYWlNHMkRudHpVTzVDNm1iOUZrZVRjdnpEd1Qva2JzV0tjRlBPbDEyVE4vbHI3bHI2YVZHQlFDQQp0Q21Qc0JIdndPc0VLS05JSEp0K3orNGU4RGQ1NlNBZVMydXhhNFEzQWxOV3A2V3B2THZ1Qi93dFRNcGRRRC9GelJ3S0hFR01DVG94CmdlVit0RFdvLzZoNS9YM3NmemdGbjB4N2NBTHFtZmdtaDBUaWFHQ280WitmU2JYRlJGNVg0Zm9yMm44WCtGem5qSHBlNUdjaUdoMEEKQU9KV2RxVExENEFYUC92ZzZDZU1zOXlQdGdiMWJ3Qlk2UEpmVXJCSDJzTjkxLzBRMzJMN2dCOVNzdWF6RDQ1K3d0Z1g5TGl0d3YwYgpBSHJlLzd3UzlweHlPaitsd1JxM0MyQ3N0QkUvbzhOcmdldHoxNklHUzF5VENyYnl5NzkvMGllNU1oWDhIWGp4TC9WUHdMVkY0dFZOCi8vS0hGZ1FBZ0xRUmMxaUcxNUg0R2xEbXJrZU5VZ1ljbTJESE5MMTlkL1VidEhRdzk2U0hlSDBFWDhhN2dxcTNBamkyc3lLdlQ5L2wKenR6RkRFTGpkd0dNRmJONUUzQW13Vm9qRDR4dUhQdmtIcmMxcUg5M0FRQndWd3IyU2UvMUVyWTV4REc4TGtyT0FkWWJlV0RzRThaWgpubXhiaGZ0M0Y4QlN0OTBYd2Y1RHAzTUpMZEtLTFFDanBVMjVuS2ZZRERpRjUzODBwSW1JZ0ZQU1UyenVsMzgrNlZQOE1zMW42NEJqCmNjdWVKaWVBczR2NWJOcTJMMzlvNFJhQTBXSTJiNkxrWkdEOWtRZkdQbUdjNWNtMk5hai9GbThCdURuQmg5THVYSU1xSTQ1bSt4Z0oKOVJzKysrRG9KNHg5d1NUYUt2ejVkQXZBcE5wdUsrR2dLYWZ4YzFxcWRWc0FSa3ViY2prRm13Q2ZCSy9ScmtWNkpPRExhVVcyOXN1LwpldEpudURLdHhPWnBaQzQvbUxzZVZkcWp3SmVMWWJaczg1Yy90SHdMd0doeEEydVJPSkxFWGl3SVJ0VlBzRzRCNkgvL3d3R25GeVZmClNOT2Jjd25RSm91dnMyYlo0U3VwWkQrZ00vTGcyQ2VOczd5b3RtcCtQdDBDTVBHMmtzU1pCUnlXVHVGZVpBQVlLMmF6Q1YxbUFMc1IKbzlaUE5UN0FsZW0vQlFHZ0pQR2oxT1dMYVRxL1I3VVRSN05SR2Z4emdqMkpwNFBBTTQzakxDK3FyVnFmeitjc0d3QVcyUllKZnBMZwppK2xVYnhnM21nRmdIREdUcllIRGdIY0RSY01ueUJMMzMrQUFNQnlKQzRxU3I2YmRtSTFxTDc3SjV1VXdoeVhZallWdEVhalg1M09oCmJRYUFoYloxRTF5VUVsOU5KM3VMNllVeEFDeEczTWg2QkljUUhBQ3MrR3pENkNlTmZkRUVsdnZSWmdCWW12NGZpZUQwSXZITnRHczcKemdGdW16aVNxZVVRSDA3QlFRU3JQdHN3OW9rVFdPNUhtd0dnVi8wL1NYQiswZUdyNlR0dXZWc1VBOEFFeGJXc3doRHZCVDRDdktybQpFOFFBOE96L2IwNXdGc09jbXFZMzYwNWZXcmc0bHBWNWd2ZEZjQkN3ZGNVL254TnFNd0FBd1Mwa3ppeUdPQzJkNE8yM0o4SUFNQWt4CmsyM29zamNGdXhHc1dac0owc1ArYXg0QTdvbmdncUxrN0xTYmw0aHVzemlTVjVlSmZaN2VQYkRvaTROVmVQNjJPQURjQzF4UWREa24KbmNwdjBSSXhBQ3lGT0o4T3IyUjdTbllIZGdHbWpqU01mdEk0eS8xb013QXNxdTJPZ0l1TGtndTRrV3ZTREM4Y28yZkZEQXFXNC9VbAo3SlpLM2taYXlMVkJLangvV3hZQTVnQVhsOEdGUTJ0eXBYTjU4Z3dBUFJUWHNoR0pYWUNkU0d4TDhNS0dUc0E2QklDL0FOY2t1QXk0Ck5MMkxPNUFtS0w3T0JneXpTOENiQ0xZbHNVYVY1Mi9EQThDOEJOY0VYRjRFbDdwZnYzY01BSDBTUWVKNk5pYllqbUFyWUhPQ3pZRlYKbm4zUzZCZU03V0FTYmUwTkFIOERaa1V3cTREcktMZ212Wk5ia1hvZ2dzU1JiQWhzVndaYkpkZ2MySUxKSEVpNHFEWURBTUNERWN4SwpNQ3ZndXM0dzEzQXl0NlRuOTZBZU1BQU1XRnpMT3BSTUE2WVJUQ1d4RHJBNkphc0RxNU5ZRlZpV2tmT1dWeDU1MGRoT0pyRGNqN2JCCkJvQ0hDTHJBRThBREJQT0FlUUh6aXNSZGxNd2hNWWZnaittZDNvVlBneGN6ZURsRHJFZGlLaVhUeXNRNktWZ0RXSjFnZFViQy9uTFAKbWN2UXhnQ3dZQzQvQ1R3UWlYbEZ5YnhJekFQdWlpNXpPakNIWUU0NmtidVg0a2NpU1pJa1NaSWtTWklrU1pJa1NaSWtTWklrU1pJawpTWklrU1pJa1NaSWtTWklrU1pJa1NaSWtTWklrU1pJa1NaSWtTWklrU1pJa1NaSWtTWklrU1pJa1NaSWtTWklrU1pJa1NaSWtTWklrClNaSWtTWklxNXY4SDF3U2xmK0I4Vy9nQUFBQWxkRVZZZEdSaGRHVTZZM0psWVhSbEFESXdNakl0TURJdE1USlVNREk2TlRNNk5ESXIKTURBNk1EQy9sL3A2QUFBQUpYUkZXSFJrWVhSbE9tMXZaR2xtZVFBeU1ESXlMVEF5TFRFeVZEQXlPalV6T2pReUt6QXdPakF3enNwQwp4Z0FBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUFBQVNVVk9SSzVDWUlJPSIgLz4KPC9zdmc+Cg==")
  imgBase64.setAttribute('width', '30 ')
  imgBase64.setAttribute('height', '30')
  divMenu.setAttribute('class', 'menuContainer')
    

   divMenu.appendChild(imgBase64);
   body.prepend(divMenu);
   main.prepend(divMenu);
}

}
createSVG_menu()

