const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

// set textarea to be focus when webpage loaded
textarea.focus()

// createTags when typing & start to randomSelect when pressing enter
textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = ''
    }, 10)
    textarea.inputMode = 'none'
    randomSelect()
  }
})

function createTags (input) {
  const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
  tagsEl.innerHTML = ''
  tags.forEach(tag => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  })
}

// show highlight-animation when random selecting & a tag is selected
function randomSelect () {
  const times = 30
  const interval = setInterval(() => {
    const randomTag = pickRandomTag()
    highlightTag(randomTag)

    setTimeout(() => {
      unHighlightTag(randomTag)
    }, 100)
  }, 100)

  setTimeout(() => {
    clearInterval(interval)
    setTimeout(() => {
      const randomTag = pickRandomTag()
      highlightTag(randomTag)
    }, 100)
  }, times * 100)
}

function pickRandomTag () {
  const tags = document.querySelectorAll('.tag')
  textarea.inputMode = 'text'
  return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag (tag) {
  tag.classList.add('highlight')
}

function unHighlightTag (tag) {
  tag.classList.remove('highlight')
}
