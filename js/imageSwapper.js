let imgIndex = 0

let images = ["images/hero_08.jpg","images/hero_07.jpg","images/hero_06.jpg","images/hero_01.jpg","images/hero_03.jpg","images/hero_02.jpg","images/hero_04.jpg","images/hero_05.jpg"]


function nextTopImage() {
    console.log(imgIndex, images[imgIndex])
    

    document.getElementById("section-one-img").src = images[imgIndex]
    imgIndex++
    // console.log(imgIndex, images[imgIndex])
    if(imgIndex>=images.length) imgIndex = 0
}