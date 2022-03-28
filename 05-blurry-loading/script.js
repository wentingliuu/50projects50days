const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
const progress = document.querySelector('.progress')
const progressValue = document.querySelector('.progress-value')

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}

let load = 0

let int = setInterval(counting, 30)

function counting() {
  load++

  if (load > 99) {
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
  progressValue.style.width = `${scale(load, 0, 100, 0, 100)}%`
  progressValue.style.opacity = scale(load, 0, 100, 1, 0)
  progress.style.opacity = scale(load, 0, 100, 1, 0)
}