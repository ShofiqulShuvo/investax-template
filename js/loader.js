var myVar

function myFunction() {
  myVar = setTimeout(fadeOut, 500)
  
}

function showPage() {
  document.getElementById("loader").style.display = "none"
}
function fadeOut () {
    document.getElementById("loader").classList.add('loader-fade-none')
    //document.getElementById("loader").classList.remove('loader-fade-full')
    let xVar = setTimeout(showPage, 600)
}