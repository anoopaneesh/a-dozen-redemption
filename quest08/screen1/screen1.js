window.addEventListener('DOMContentLoaded', main)

function main() {
  let user = JSON.parse(localStorage.getItem('user'))
  if (!user) window.location = '/auth/authorization.html'
  if(user.quest < 8){
    window.location='/'
  }
  let toggleMuteBtn = document.getElementById('toggle-mute')
  let video = document.getElementById('bg-video');
  let proceedBtn = document.getElementById('proceed-btn')
  proceedBtn.style.display = 'none';
  setTimeout(()=>{
    proceedBtn.style.display = 'block';
  },40000)
  proceedBtn.addEventListener('click',()=>{
    window.location = '../screen2/screen2.html'
  })
  video.play()
  console.log('loaded')
  toggleMuteBtn.addEventListener('click', (event) => {
      if(video.muted){
        video.muted = false;
        toggleMuteBtn.innerHTML = `<i class="bi bi-volume-up"></i>`;
      }else{
        video.muted = true;
        toggleMuteBtn.innerHTML = `<i class="bi bi-volume-mute"></i>`;
      }
  })
}
