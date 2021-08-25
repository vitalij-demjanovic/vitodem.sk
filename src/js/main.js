//mobile btn
const mobileBtn = document.querySelector('#mobile-btn')
const mobileMenu = document.querySelector('#mobile-menu')

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active')
})

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active')
})

//Gallery Slider

function gallerySliderFirst() {
    const slideFirst = document.querySelectorAll('.slide-first')
    const activeSlide = "active"
    let index = 0
    setInterval(function (){
        slideFirst[index].classList.remove(activeSlide)
        index++
        if (index + 1 > slideFirst.length) {
            index = 0
        }
        slideFirst[index].classList.add(activeSlide)
    },6000)
}

function gallerySliderSecond() {
    const slideSecond = document.querySelectorAll('.slide-second')
    const activeSlide = "active"
    let index = 0
    setInterval(function (){
        slideSecond[index].classList.remove(activeSlide)
        index++
        if (index + 1 > slideSecond.length) {
            index = 0
        }
        slideSecond[index].classList.add(activeSlide)
    },5000)
}

gallerySliderFirst()
gallerySliderSecond()








