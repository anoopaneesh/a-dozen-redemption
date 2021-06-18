window.addEventListener('DOMContentLoaded', main)

function main() {
  let user = JSON.parse(localStorage.getItem('user'))
  if (!user) window.location = '/auth/authorization.html'
  if (user.quest < 2) {
    window.location = '/'
  }
  localStorage.setItem('user',JSON.stringify(user))
  let proceedBtn = document.getElementById('proceed-btn')
  proceedBtn.style.display = 'none';
  setTimeout(()=>{
    proceedBtn.style.display = 'block';
  },56000)
  proceedBtn.addEventListener('click',()=>{
    window.location = '../screen2/screen2.html'
  })
  console.log('loaded')
}
