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
  if(event.deltaY >40) 
    swiper.slideNext()
  
  if(event.deltaY <-50)
    swiper.slidePrev()

}

const el = document.querySelector('body')
el.onwheel = scrollSlider

document.getElementById('navigation').classList.add('menu-white')


// swiper.on('init', () => {
//   const logo = document.getElementById('logo-img')
//   console.log('hello!')
//   logo.classList.add('logo-hidden')
// })

swiper.on('activeIndexChange', () => {
  console.log(swiper.activeIndex)
  if(swiper.activeIndex !== 0 )
  {
    const logo = document.getElementById('logo-img')
    logo.classList.add('logo-visible')

    document.querySelectorAll(".logo-container")[0].classList.add('logo-container-visible')
  }
  else
  {
    const logo = document.getElementById('logo-img')
    logo.classList.remove('logo-visible')

    document.querySelectorAll(".logo-container")[0].classList.remove('logo-container-visible')
  }




  if((swiper.activeIndex == 1 || swiper.activeIndex == 2 || swiper.activeIndex == 3 || swiper.activeIndex == 4 || swiper.activeIndex == 5 || swiper.activeIndex == 6))
  {
    const menu = document.getElementById('navigation')
    menu.classList.remove('menu-white')
  }
  else
  {
    const menu = document.getElementById('navigation')
    menu.classList.add('menu-white')
  }
})