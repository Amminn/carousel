const buttons = document.querySelectorAll("[data-carousel-button")
const slides = document.querySelector('[data-slides]') 

buttons.forEach(buttons => {
  buttons.addEventListener('click', () => {
    const offset = buttons.dataset.carouselButton === "next" ? 1 : -1

    const activeSlide = slides.querySelector('[data-active]')
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})