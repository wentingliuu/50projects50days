const items = [
  {sound: 'do', color: '#EC7063'},
  {sound: 're', color: '#F5B041'},
  {sound: 'mi', color: '#F7DC6F'},
  {sound: 'fa', color: '#7DCEA0'},
  {sound: 'sol', color: '#85C1E9'},
  {sound: 'la', color: '#2980B9'},
  {sound: 'si', color: '#AF7AC5'}
]

items.forEach(item => {
  const btn = document.createElement('button')
  btn.classList.add('btn')
  btn.innerText = item.sound
  btn.style.backgroundColor = item.color

  btn.addEventListener('mouseenter', () => {
    document.getElementById(item.sound).play()
  })
  btn.addEventListener('touchstart', () => {
    document.getElementById(item.sound).play()
  })

  document.getElementById('buttons').appendChild(btn)
})

/*
function stopSounds() {
  items.forEach(item => {
    const sound = document.getElementById(item.sound)
    sound.pause()
    sound.currentTime = 0
  })
}
*/