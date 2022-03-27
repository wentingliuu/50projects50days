const title = document.querySelector('.title')
const container = document.querySelector('.container')

container.addEventListener('scroll', () => {
  const fontSize = 90 - Number(container.scrollTop)/20
  title.style.fontSize = `clamp(1.5em, ${fontSize}px, 4em)`
})