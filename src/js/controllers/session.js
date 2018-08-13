// Función para iniciar sesión
function login() {
  loginEmail = document.getElementById('loginEmail').value;
  loginPass = document.getElementById('loginPass').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);

    });
}

// Función para cerrar sesión
function logout() {
  firebase.auth().signOut()
    .then(function () {
      console.log('Cerrando sesión');

    })
    .catch(function (error) {
      console.log(error);
    })
}
