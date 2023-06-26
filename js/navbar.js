// show mega menu
const navItem = document.querySelectorAll('.menu-item');

navItem.forEach(item => {
    const menuBtn = item.querySelector('a')
    const subMenu = item.querySelector('.sub-menu')

    if(menuBtn && subMenu) {
        menuBtn.addEventListener( "mouseover", () => {
            item.classList.add('show')

            navItem.forEach(menu => {
                if(menu !== item) {
                    menu.classList.remove('show')
                }
            })
        })

        item.addEventListener( "mouseleave", () => {
            item.classList.remove('show')

        })
    }

})


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
                            btn.classList.remove("active")
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