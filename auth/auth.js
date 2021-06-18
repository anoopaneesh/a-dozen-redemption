var firebaseConfig = {
  apiKey: 'AIzaSyD8FI-52Kpy_ewmOJKkh4oiknGaSD8_3T0',
  authDomain: 'adozenredemption.firebaseapp.com',
  projectId: 'adozenredemption',
  storageBucket: 'adozenredemption.appspot.com',
  messagingSenderId: '494579919840',
  appId: '1:494579919840:web:e3b0cc16e931057e4a9985',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
window.addEventListener('DOMContentLoaded', main)

function main() {
  let form = document.querySelector('form')
  let formContent = document.querySelector('#form-content')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    let email = event.target[0].value
    let password = event.target[1].value
    formContent.innerHTML = `<h1>Loading</h1>`
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user
        localStorage.setItem('user', JSON.stringify({uid:user.uid,quest:0}))
        window.location = '/'
      })
      .catch((error) => {
        var errorCode = error.code
        var errorMessage = error.message
        formContent.innerHTML = `<h1>${errorMessage}</h1>`
        console.log(errorCode, errorMessage)
      })
  })
}
