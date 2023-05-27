const cursor = new MouseFollower({
  className: 'mf-cursor',
  speed: 0.9,
  ease: 'expo.out',
  skewing: 3,
  skewingDelta: 0.001,
  skewingDeltaMax: 0.05,
  stickDelta: 0.15,
    
})


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry)
    if(entry.isIntersecting)
      entry.target.classList.add('show')
    // else
    //   entry.target.classList.remove('show')
  })
})

const hiddenElements = document.querySelectorAll('.hide')
hiddenElements.forEach(el => {
  observer.observe(el)
})


function showMobileMenu () {
  const fullScreenMenu = document.getElementById('mobile-fs-menu')
  fullScreenMenu.classList.add("cross-visible")
}

function hideMobileMenu () {
  const fullScreenMenu = document.getElementById('mobile-fs-menu')
  fullScreenMenu.classList.remove("cross-visible")
}


const sliderPrev = document.querySelector('.prev')
const sliderNext = document.querySelector('.next')
const firstSlide = document.querySelector('.mySlide-1')
const secondSlide = document.querySelector('.mySlide-2')

function showSecondBlogRow(){
  console.log("next btn pressed")
  firstSlide.style.left = "-100vw"
  secondSlide.style.left = "0vw"
  sliderNext.classList.add('hide-button')
  sliderPrev.classList.remove('hide-button')
}

function showFirstBlogRow(){
  console.log("prev btn pressed")
  firstSlide.style.left = "0vw"
  secondSlide.style.left = "100vw"
  sliderPrev.classList.add('hide-button')
  sliderNext.classList.remove('hide-button')
  
}