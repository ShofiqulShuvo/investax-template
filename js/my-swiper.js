const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  resistance: true,
  effect: 'slide',
  speed: 700,
  preventInteractionOnTransition: true,
  cssMode: false,

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

function scrollSlider (event) {
  event.preventDefault()
  if(event.deltaY >40) 
    swiper.slideNext()
  
  if(event.deltaY <-50)
    swiper.slidePrev()

}

const el = document.querySelector('body')
el.onwheel = scrollSlider