// Scroll down to change the title's font-size
const title = document.querySelector('.title')
const container = document.querySelector('.container')

container.addEventListener('scroll', () => {
  const fontSize = 90 - Number(container.scrollTop)/20
  title.style.fontSize = `clamp(1.5em, ${fontSize}px, 4em)`
})

// click info-key to show the popup message
const infoKey = document.querySelector('.info-key')
const popup = document.getElementById('popup')
const close = document.querySelector('.close')

infoKey.addEventListener('click', () => {
  popup.style.display = 'block'
})

close.addEventListener('click', () => {
  popup.style.display = 'none'
})

// toggle theme color
const themeBtn = document.querySelector('.theme-btn')
const body = document.getElementById('body')

themeBtn.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    document.documentElement.setAttribute('data-theme', 'light')
    body.classList.remove('dark')
    body.classList.add('light')
  } else {
    document.documentElement.setAttribute('data-theme', 'dark')
    body.classList.remove('light')
    body.classList.add('dark')
  }
})

// detect browser theme mode to chang favicon style
matcher = window.matchMedia('(prefers-color-scheme: dark)');
matcher.addListener(onUpdate);
onUpdate();

lightSchemeIcon = document.querySelector('link#light-scheme-icon');
darkSchemeIcon = document.querySelector('link#dark-scheme-icon');

function onUpdate() {
  if (matcher.matches) {
    lightSchemeIcon.remove();
    document.head.append(darkSchemeIcon);
  } else {
    document.head.append(lightSchemeIcon);
    darkSchemeIcon.remove();
  }
}