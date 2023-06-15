const nav = document.querySelector('#navigation')
window.addEventListener('scroll', ()=>{
  if(window.scrollY >= 300)
  {    
    console.log("moved.down ", scrollY)
    nav.style.backgroundColor = '#fff'
  }
  
  if(window.scrollY < 300)
  {
    nav.style.backgroundColor = "rgb(255 255 255 / 40%)"
  }
})