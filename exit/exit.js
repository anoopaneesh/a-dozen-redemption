window.addEventListener('DOMContentLoaded', () => {
  let user = JSON.parse(localStorage.getItem('user'))
  if (!user) window.location = '/auth/authorization.html'
  let para = document.getElementById('level')
  para.textContent = `You are at level ${user.quest}`
  let backBtn = document.querySelector('#go-back')
  let quitBtn = document.querySelector('#quit-game')
  backBtn.addEventListener('click', () => {
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
      case 12:
        window.location = '/quest12/screen1/screen1.html'
        break
      default:
        break
    }
  })
  quitBtn.addEventListener('click', () => {
    let main = document.querySelector('main')
    let h1 = document.querySelector('h1')
    h1.textContent = `You reached till level ${user.quest}`
    while (main.firstChild) {
      main.removeChild(main.firstChild)
    }
    main.appendChild(h1)
    localStorage.removeItem('user')
  })
})
