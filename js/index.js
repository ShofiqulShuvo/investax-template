// const cursor = new MouseFollower({
//   className: 'mf-cursor',
//   speed: 0.9,
//   ease: 'expo.out',
//   skewing: 3,
//   skewingDelta: 0.001,
//   skewingDeltaMax: 0.05,
//   stickDelta: 0.15,
    
// })


// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     // console.log(entry)
//     if(entry.isIntersecting)
//       entry.target.classList.add('show')
//     // else
//     //   entry.target.classList.remove('show')
//   })
// })

// const hiddenElements = document.querySelectorAll('.hide')
// hiddenElements.forEach(el => {
//   observer.observe(el)
// })


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





function menuSlideIn () {
  document.getElementById("navigation").classList.add('menu-slide-in')
  
}


setTimeout(menuSlideIn, 3000)








// navbar
const nav = document.querySelector('#navigation')
window.addEventListener('scroll', ()=>{
  if(window.scrollY >= 300)
  {    
    nav.style.backgroundColor = '#fff';
    nav.classList.remove('menu-white')
  }
  
  if(window.scrollY < 300)
  {
    nav.style.backgroundColor = "rgb(255 255 255 / 0%)";
    nav.classList.add('menu-white')

  }
})


// show mega menu
const navItem = document.querySelectorAll('.menu-item');

navItem.forEach(item => {

    function showMenuItemPc (item) {

        const menuBtn = item.querySelector('a')
        const subMenu = item.querySelector('.sub-menu')

        if(menuBtn && subMenu) {
            menuBtn.addEventListener( "mouseover", () => {
                item.classList.add('show-menu')
    
                navItem.forEach(menu => {
                    if(menu !== item) {
                        menu.classList.remove('show-menu')
                    }
                })
            })
    
            item.addEventListener( "mouseleave", () => {
                item.classList.remove('show-menu')
    
            })
        }
    }

    function showMenuItemMobile (item) {

        const menuBtn = item.querySelector('a')
        const subMenu = item.querySelector('.sub-menu')

        if(menuBtn && subMenu) {
            menuBtn.addEventListener( "click", () => {
                item.classList.toggle('show-menu')
    
                navItem.forEach(menu => {
                    if(menu !== item) {
                        menu.classList.remove('show-menu')
                    }
                })
            })
    
        }
    }


    function resizeFunction() {
        if(window.innerWidth <= 1000){
            showMenuItemMobile(item)

        } else {
            showMenuItemPc(item)
        }
    }

    resizeFunction();

    window.addEventListener("resize", resizeFunction)


})




// show sub-menu of mega menu
const subMenuContainer = document.querySelectorAll('.sub-menu-container');
const subMenuItem = document.querySelectorAll('.sub-menu-item');


subMenuContainer.forEach(container => {
    const showSubMenu = container.querySelector('.show-sub-menu');

    const subMenuItem = container.querySelectorAll(".sub-menu-item");

    const menuBtnAll = document.querySelectorAll(".menu-btn")

    if(subMenuItem){
        subMenuItem.forEach(item => {
            const menuBtn =  item.querySelector(".menu-btn")
            const secondSubMenuContainer = item.querySelector('.second-sub-menu-container')

            if(menuBtn ) {
                menuBtn.addEventListener("mouseover",  ()=> {

                    menuBtn.classList.add('active');

                   

                    menuBtnAll.forEach(btn => {
                        if(menuBtn !== btn){
                            btn.classList.remove("active");
                            
                            
                        }
                    })


                    showSubMenu.innerHTML = "";

                    if(secondSubMenuContainer && showSubMenu){

                        showSubMenu.innerHTML = secondSubMenuContainer.innerHTML;

                    }


                })

            }

        })
    }

})
// show sub-menu of mega menu end



// show submenu in mobile device
const secondSubMenu = document.querySelectorAll(".second-sub-menu-container");

subMenuItem.forEach(menu => {

    const singleSecondSubMenu = menu.querySelector(".second-sub-menu-container")
    menu.addEventListener('click', () => {
        singleSecondSubMenu.classList.toggle('show');

        secondSubMenu.forEach(item => {
            if(singleSecondSubMenu !== item){
                item.classList.remove('show')
            }
        })
    })
})




//  hamburger mobile menu
const allLink = document.querySelector('.all-link');
const hamburgerMenuBtn = document.querySelector('.hamburger-menu');

if(allLink && hamburgerMenuBtn){
    hamburgerMenuBtn.addEventListener('click', () => {
        allLink.classList.toggle('show')
    })
}
//  hamburger mobile menu end










// newsletter popup modal
// Config
const isOpenClass = "modal-is-open";
const openingClass = "modal-is-opening";
const closingClass = "modal-is-closing";
const animationDuration = 400; // ms
let visibleModal = null;

// Toggle modal
const toggleModal = (event) => {
  event.preventDefault();
  const modal = document.getElementById(event.currentTarget.getAttribute("data-target"));
  typeof modal != "undefined" && modal != null && isModalOpen(modal)
    ? closeModal(modal)
    : openModal(modal);
};

// Is modal open
const isModalOpen = (modal) => {
  return modal.hasAttribute("open") && modal.getAttribute("open") != "false" ? true : false;
};

// Open modal
const openModal = (modal) => {
  if (isScrollbarVisible()) {
    document.documentElement.style.setProperty("--scrollbar-width", `${getScrollbarWidth()}px`);
  }
  document.documentElement.classList.add(isOpenClass, openingClass);
  setTimeout(() => {
    visibleModal = modal;
    document.documentElement.classList.remove(openingClass);
  }, animationDuration);
  modal.setAttribute("open", true);
};

// Close modal
const closeModal = (modal) => {
  visibleModal = null;
  document.documentElement.classList.add(closingClass);
  setTimeout(() => {
    document.documentElement.classList.remove(closingClass, isOpenClass);
    document.documentElement.style.removeProperty("--scrollbar-width");
    modal.removeAttribute("open");
  }, animationDuration);
};

// Close with a click outside
document.addEventListener("click", (event) => {
  if (visibleModal != null) {
    const modalContent = visibleModal.querySelector("article");
    const isClickInside = modalContent.contains(event.target);
    !isClickInside && closeModal(visibleModal);
  }
});

// Close with Esc key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && visibleModal != null) {
    closeModal(visibleModal);
  }
});

// Get scrollbar width
const getScrollbarWidth = () => {
  // Creating invisible container
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll"; // forcing scrollbar to appear
  outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement("div");
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
};

// Is scrollbar visible
const isScrollbarVisible = () => {
  return document.body.scrollHeight > screen.height;
};

