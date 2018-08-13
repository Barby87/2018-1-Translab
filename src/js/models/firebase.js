window.onload = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      loginPage.style.display = "none";
      navBar.style.display = "block";
      homePage.style.display = "block";
      console.log("User > " + JSON.stringify(user));

    } else {
      // User is signed out.
      loginPage.style.display = "block";
      navBar.style.display = "none";
      homePage.style.display = "none";
      console.log('No existe usuario activo');
    }
  });
}

function createAccount() {
  const emailRegister = document.getElementById('emailRegister').value;
  const passwordRegister = document.getElementById('passwordRegister').value;
  const name = document.getElementById('nameInput').value;
  const cellPhone = document.getElementById('cellPhone').value;


  firebase.auth().createUserWithEmailAndPassword(emailRegister, passwordRegister, name, cellPhone)
    .then(function () {

      registerPage.style.display = "none";
      navBar.style.display = "block"; // Mostrar barra de navegación
      homePage.style.display = "block"; // Mostrar página de inicio*
      verifyEmail()
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);

    });
}

function verifyEmail() {
  var user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function () {
    // Email sent.
    console.log('Enviando correo');
  }).catch(function (error) {
    // An error happened.
    console.log(error);
  });
}

// Declarando variables
const loginEmail = document.getElementById('loginEmail').value;
const loginPass = document.getElementById('loginPass').value;
const incorrectPassword = document.getElementById('incorrectPassword').value;

const name = document.getElementById('nameInput').value;
const cellPhone = document.getElementById('cellPhone');
const emailRegister = document.getElementById('emailRegister').value;
const passwordRegister = document.getElementById('passwordRegister').value;
const errorPassword = document.getElementById('errorPassword').value;

const confirmPassword = document.getElementById('confirmPassword').value;
const errorConfirmPassword = document.getElementById('errorConfirmPassword').value;

const rememberMe1 = document.getElementById('rememberMe1').value;
const rememberMe2 = document.getElementById('rememberMe2').value;

/*// Validar que la contraseña tenga minimo 4 caracteres y máximo 8.
passwordRegister.addEventListener('keyup', () => {
  if (passwordRegister.value.length < 4) {
    errorPassword.innerHTML = "La contraseña debe tener como mínimo 4 caracteres";
  } else if (passwordRegister.value.length >= 8) {
    errorPassword.innerHTML = "La contraseña debe tener como máximo 8 caracteres";
  }
})

// Validar que coincidan las contraseñas
confirmPassword.addEventListener('keyup', () => {
  if (passwordRegister.value === confirmPassword.value) {
    errorConfirmPassword.innerHTML = " ";
  } else {
    errorConfirmPassword.innerHTML = "Por favor revisa, ambas contraseñas deben coincidir";
  }
})*/

//guardar datos del usuario en local storage (checkbox recordarme)
/*rememberMe.addEventListener('change', saveLocalUser, false);

function saveLocalUser() {
  let checked = rememberMe1.checked;
  let checked = rememberMe2.checked;
  if (checked) {

    window.localStorage.setItem('loginEmail', JSON.stringify(loginEmail.value));
    window.localStorage.setItem('loginPass', JSON.stringify(loginPass.value));
    window.localStorage.setItem('passwordRegister', JSON.stringify(passwordRegister.value));
    window.localStorage.setItem('emailRegister', JSON.stringify(emailRegister.value));
    window.localStorage.setItem('name', JSON.stringify(name.value));
    window.localStorage.setItem('cellNumber', JSON.stringify(cellNumber.value));
  }
}*/