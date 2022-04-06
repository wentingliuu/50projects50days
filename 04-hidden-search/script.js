const search = document.querySelector('.search')
const title = document.querySelector('.title')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
  search.classList.toggle('active')
  title.classList.toggle('active')
  input.focus()
})
