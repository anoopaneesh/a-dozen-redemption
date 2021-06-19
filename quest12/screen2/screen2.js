window.addEventListener('DOMContentLoaded', main)

function main() {
  let user = JSON.parse(localStorage.getItem('user'))
  if (!user) window.location = '/auth/authorization.html'
  if (user.quest < 12) {
    window.location = '/'
  }
  let hercules = document.getElementById('hercules')
  hercules.addEventListener('mouseenter', () => {
    console.log('reached')
    document.querySelector('html').style.setProperty('--display', 'block')
  })
  hercules.addEventListener('mouseleave', () => {
    document.querySelector('html').style.setProperty('--display', 'none')
  })
}
