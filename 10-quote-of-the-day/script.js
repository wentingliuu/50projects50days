/* get today's date */
const title = document.querySelector('.title')
const date = new Date().getDate()
switch (new Date().getMonth()) {
  case 0:
    month = 'January'
    break
  case 1:
    month = 'February'
    break
  case 2:
    month = 'March'
    break
  case 3:
    month = 'April'
    break
  case 4:
    month = 'May'
    break
  case 5:
    month = 'June'
    break
  case 6:
    month = 'July'
    break
  case 7:
    month = 'August'
    break
  case 8:
    month = 'September'
    break
  case 9:
    month = 'October'
    break
  case 10:
    month = 'November'
    break
  case 11:
    month = 'December'
}

title.innerText = `Quote of ${month} ${date}`

/* get background image */
async function changeBackground () {
  const image = new Image()

  image.onload = function () {
    document.body.appendChild(image)

    const images = document.querySelector('img')
    images.remove()

    generateQuote()
    quoteBtn.disabled = false
    quoteBtn.innerText = 'Get More'
  }

  image.src = `https://source.unsplash.com/random/1440x900?sig=${Math.random()}`
}
changeBackground()

/* fetch quote */
const text = document.querySelector('.text')
const author = document.querySelector('.author')

async function generateQuote () {
  const response = await fetch('https://type.fit/api/quotes')
  const quotes = await response.json()
  const num = Math.floor(Math.random() * quotes.length)

  text.innerText = `"${quotes[num].text}"`
  author.innerText = `- ${quotes[num].author}`
}

/* hook addEventListener knob to button */
const quoteBtn = document.getElementById('quoteBtn')
quoteBtn.addEventListener('click', () => {
  quoteBtn.disabled = true
  quoteBtn.innerText = 'loading'
  changeBackground()
})
