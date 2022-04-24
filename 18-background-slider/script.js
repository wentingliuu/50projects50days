const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
  clearInterval(autoSlide)
  activeSlide++
  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }
  setBgToBody()
  setActiveSlide()
})

leftBtn.addEventListener('click', () => {
  clearInterval(autoSlide)
  activeSlide--
  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }
  setBgToBody()
  setActiveSlide()
})

setBgToBody()

function setBgToBody () {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide () {
  slides.forEach(slide => slide.classList.remove('active'))
  slides[activeSlide].classList.add('active')
}

const autoSlide = setInterval(() => {
  activeSlide++
  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }

  setBgToBody()
  setActiveSlide()
}, 3000)
