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
    console.log(entry)
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