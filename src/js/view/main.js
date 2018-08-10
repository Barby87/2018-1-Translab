//En este archivo va la parte de vista (DOM)
//funcionalidad del side Menú
function toggleMenu() { // añadir función onclick="toggleMenu()" al botón del nav bar y al botón cerrar.
  if (sideMenu.className.indexOf("menu_closed") >= 0) { // primero revisamos si la clase d-none esta
    openMenu();  // si esta la clase quiere decir que el menú esta cerrado, asi que llamamos la funcion para abrirlo
  } else {
    closeMenu(); //si no esta la clase, le indicamos que cierre el menu
  }
}

function openMenu() {
  sideMenu.classList.remove('menu_closed'); // quitando clase display-none
  sideMenu.classList.add('menu_open');
}

function closeMenu() {
  sideMenu.classList.add('menu_closed'); // añadimos la clase display-none
  sideMenu.classList.remove('menu_open');
}

//validar que la contraseña tenga minimo 8 caracteres
const password = document.getElementById('password');
const consfirmPassword = document.getElementById('consfirmPassword');
const errorConfirmPassword = document.getElementById('errorConfirmPassword');

password.addEventListener('keyup', () => {
    if (password.value.length < 8) {
      errorMsg.innerHTML = "La contraseña debe tener minimo 8 caracteres";
    } else if (password2.value.length >= 8) {
      errorMsg.innerHTML = " ";
    }
  })
  
  //validar que sea la misma contraseña 
  confirmPassword.addEventListener('keyup', () => {
    if (password.value === confirmPassword.value) {
      errorConfirmPassword.innerHTML = " ";
    } else {
      errorConfirmPassword.innerHTML = "Porfavor revisa la contraseña debe coincidir";
    }
  })
