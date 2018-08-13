// En este archivo va la parte de vista (DOM)

// Funcionalidad del side Menú
function toggleMenu() { // Añadir función onclick="toggleMenu()" al botón del nav bar y al botón cerrar.
  if (sideMenu.className.indexOf("menu_closed") >= 0) { // primero revisamos si la clase d-none esta
    openMenu();  // Si esta la clase quiere decir que el menú esta cerrado, asi que llamamos la funcion para abrirlo
  } else {
    closeMenu(); // Si no esta la clase, le indicamos que cierre el menu
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

function registrate() {
  loginPage.style.display = "none";
  registerPage.style.display = "block";
}