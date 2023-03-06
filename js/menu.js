// var myVar

// function myFunction() {
//   myVar = setTimeout(menuSlideIn, 1300)
  
// }


function menuSlideIn () {
    document.getElementById("navigation").classList.add('menu-slide-in')
    // document.getElementById("navigation").classList.remove('menu-slide-out')    
}


setTimeout(menuSlideIn, 3000)