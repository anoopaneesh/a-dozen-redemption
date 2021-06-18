function main() {
  let user = JSON.parse(localStorage.getItem('user'))
  if (!user) window.location = '/auth/authorization.html'
  switch (user.quest) {
    case 1:
      window.location = '/quest01/screen1/screen1.html'
      break
    case 2:
      window.location = '/quest02/screen1/screen1.html'
      break
    case 3:
      window.location = '/quest03/screen1/screen1.html'
      break
    case 4:
      window.location = '/quest04/level4.html'
      break
    case 5:
      window.location = '/quest05/level5.html'
      break
    case 6:
      window.location = '/quest06/screen1/screen1.html'
      break
    case 7:
      window.location = '/quest07/screen1/screen1.html'
      break
    case 8:
      window.location = '/quest08/screen1/screen1.html'
      break
    case 9:
      window.location = '/quest09/screen1/screen1.html'
      break
    case 10:
      window.location = '/quest10/level10.html'
      break
    case 11:
      window.location = '/quest11/screen1/screen1.html'
      break
    default:
      break
  }
  let body = document.querySelector('body')
  let paperImg = document.getElementById('paper-img')
  document.querySelector('html').style.setProperty('--bg', '#000')
  let content = body.innerHTML
  body.innerHTML = `
  <div id="load">
  <div>G</div>
  <div>N</div>
  <div>I</div>
  <div>D</div>
  <div>A</div>
  <div>O</div>
  <div>L</div>
</div>
  `
  loadImage(paperImg, './images/1-min.png').then((image) => {
    console.log('Loaded image')
    console.log(content)
    body.innerHTML = content
    let btn = document.getElementById('proceed-btn')
    btn.addEventListener('click', () => {
      user.quest = 1
      localStorage.setItem('user', JSON.stringify(user))
      window.location = './quest01/screen1/screen1.html'
    })
    document
      .querySelector('html')
      .style.setProperty('--bg', `url('./images/intro1-min.png')`)
  })
}
main()
function loadImage(img, src) {
  return new Promise((resolve, reject) => {
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}
