const track = document.querySelector('.carousel__track')
const slides = Array.from(track.children)
const nextButton = document.querySelector('.carousel__button--right')
const prevButton = document.querySelector('.carousel__button--left')
const dotsNav = document.querySelector('.carousel__nav')
const dots = Array.from(dotsNav.children)

// getting the width of the slide
const slideWidth = slides[0].clientWidth

// push the slides to the left, according the to width of each slide
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px'
}
// start at first
// call the above function/ Print them in the right way
slides.forEach(setSlidePosition)

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
  currentSlide.classList.remove('current-slide')
  targetSlide.classList.add('current-slide')
}

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide')
  targetDot.classList.add('current-slide')
}

// when i click right, move to the right
nextButton.addEventListener('click', () => {
  //get the element that is already showing
  const currentSlide = track.querySelector('.current-slide')
  // get the next one
  const nextSlide = currentSlide.nextElementSibling ?? slides[0]
  // get the current dot
  const currentDot = dotsNav.querySelector('.current-slide')
  const nextDot = currentDot.nextElementSibling ?? dots[0]

  moveToSlide(track, currentSlide, nextSlide)
  updateDots(currentDot, nextDot)
})


// when i click left, move to the left
prevButton.addEventListener('click', () => {
  const currentSlide = track.querySelector('.current-slide')
  const prevSlide = currentSlide.previousElementSibling ?? slides[slides.length - 1]
  const currentDot = dotsNav.querySelector('.current-slide')
  const prevDot = currentDot.previousElementSibling ?? dots[dots.length - 1]

  moveToSlide(track, currentSlide, prevSlide)
  updateDots(currentDot, prevDot)
})

// when i click the nav indicator, move to that slide

dotsNav.addEventListener('click', (e) => {
  // what indicator was clicked on?
  const targetDot = e.target.closest('button') // idk why he did use closest here

  if(!targetDot) return // means if we don't click on the indicators just return nothing and stop here

  const currentSlide = track.querySelector('.current-slide')
  const currentDot = dotsNav.querySelector('.current-slide')

  const targetIndex = dots.indexOf(e.target)
  const targetSlide = slides[targetIndex]

  moveToSlide(track, currentSlide, targetSlide)

  updateDots(currentDot, targetDot)
})