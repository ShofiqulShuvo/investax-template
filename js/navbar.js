// const navigation = document.querySelector('#navigation')

// window.addEventListener('scroll', ()=>{

//   if(window.scrollY >= 200) {    
//     navigation.style.backgroundColor = '#fff'
//   }
  
//   if(window.scrollY < 200) {
//     navigation.style.backgroundColor = "rgb(255 255 255 / 40%)"
//   }
// })


// // show mega menu
// const navItem = document.querySelectorAll('.menu-item');

// navItem.forEach(item => {
//     // const menuBtn = item.querySelector('a')
//     // const subMenu = item.querySelector('.sub-menu')

//     // if(menuBtn && subMenu) {
//     //     menuBtn.addEventListener( "mouseover", () => {
//     //         item.classList.add('show')

//     //         navItem.forEach(menu => {
//     //             if(menu !== item) {
//     //                 menu.classList.remove('show')
//     //             }
//     //         })
//     //     })

//     //     item.addEventListener( "mouseleave", () => {
//     //         item.classList.remove('show')

//     //     })
//     // }

//     function showMenuItemPc (item) {

//         const menuBtn = item.querySelector('a')
//         const subMenu = item.querySelector('.sub-menu')

//         if(menuBtn && subMenu) {
//             menuBtn.addEventListener( "mouseover", () => {
//                 item.classList.add('show-sub-menu')
    
//                 navItem.forEach(menu => {
//                     if(menu !== item) {
//                         menu.classList.remove('show-sub-menu')
//                     }
//                 })
//             })
    
//             item.addEventListener( "mouseleave", () => {
//                 item.classList.remove('show-sub-menu')
    
//             })
//         }
//     }

//     function showMenuItemMobile (item) {

//         const menuBtn = item.querySelector('a')
//         const subMenu = item.querySelector('.sub-menu')

//         if(menuBtn && subMenu) {
//             menuBtn.addEventListener( "click", () => {
//                 item.classList.toggle('show')
    
//                 navItem.forEach(menu => {
//                     if(menu !== item) {
//                         menu.classList.remove('show')
//                     }
//                 })
//             })
    
//             // item.addEventListener( "click", () => {
//             //     item.classList.remove('show')
    
//             // })
//         }
//     }


//     function resizeFunction() {
//         if(window.innerWidth <= 1000){
//             showMenuItemMobile(item)

//         } else {
//             showMenuItemPc(item)
//         }
//     }

//     resizeFunction();

//     window.addEventListener("resize", resizeFunction)


// })




// // show sub-menu of mega menu
// const subMenuContainer = document.querySelectorAll('.sub-menu-container');
// const subMenuItem = document.querySelectorAll('.sub-menu-item');


// subMenuContainer.forEach(container => {
//     const showSubMenu = container.querySelector('.show-sub-menu');

//     const subMenuItem = container.querySelectorAll(".sub-menu-item");

//     const menuBtnAll = document.querySelectorAll(".menu-btn")

//     if(subMenuItem){
//         subMenuItem.forEach(item => {
//             const menuBtn =  item.querySelector(".menu-btn")
//             const secondSubMenuContainer = item.querySelector('.second-sub-menu-container')

//             if(menuBtn ) {
//                 menuBtn.addEventListener("mouseover",  ()=> {

//                     menuBtn.classList.add('active');

                   

//                     menuBtnAll.forEach(btn => {
//                         if(menuBtn !== btn){
//                             btn.classList.remove("active");
                            
                            
//                         }
//                     })


//                     showSubMenu.innerHTML = "";

//                     if(secondSubMenuContainer && showSubMenu){

//                         showSubMenu.innerHTML = secondSubMenuContainer.innerHTML;

//                     }


//                 })

//             }

//         })
//     }

// })
// // show sub-menu of mega menu end



// // show submenu in mobile device
// const secondSubMenu = document.querySelectorAll(".second-sub-menu-container");

// subMenuItem.forEach(menu => {

//     const singleSecondSubMenu = menu.querySelector(".second-sub-menu-container")
//     menu.addEventListener('click', () => {
//         singleSecondSubMenu.classList.toggle('show');

//         secondSubMenu.forEach(item => {
//             if(singleSecondSubMenu !== item){
//                 item.classList.remove('show')
//             }
//         })
//     })
// })




// //  hamburger mobile menu
// const allLink = document.querySelector('.all-link');
// const hamburgerMenuBtn = document.querySelector('.hamburger-menu');

// if(allLink && hamburgerMenuBtn){
//     hamburgerMenuBtn.addEventListener('click', () => {
//         allLink.classList.toggle('show')
//     })
// }
// //  hamburger mobile menu end
