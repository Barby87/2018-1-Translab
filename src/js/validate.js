window.validateEmail = function(email){
    //
  if(email.indexOf('@') < 0) {//comprueba existencia de @
    return false;
  }

  const tokens = email.split('@');
  if(tokens.length != 2){ //Verifica que el correo SÓLO tenga 2 partes, lo que está antes del arroba y después del arroba 
      return false; //Si es distinto de 2, será false
  }
  if(tokens[0].length < 3 ) { // Verifica si antes del @ hay al menos 3 caracteres
      return false;
  }

  if(tokens[1].indexOf('.') < 0){
      return false;
  }

  const domTokens = tokens[1].split('.'); // verificar dominio
  if(domTokens.length != 2){
      return false;
  }
  if(domTokens[0].length < 1){
      return false
  }
  if(typeof(domTokens[0]) != "number") {
      return false;
  }
  if(domTokens[1].length < 1){
      return false
  }    

  return true;
};

//Funciones para validar contraseña

window.validatePassword = function(password){
    //
  if(password.length < 4) { //comprueba que el largo de la contraseña sea de al menos 4 caracteres.
    return false;
  }

  if(password.length > 8){ //comprueba que el largo de la contraseña sea de 8 caracteres como máximo. 
      return false; 
  }

  if (password.typeof != "number") {// comprueba que la contraseña contenga sólo caracteres numéricos
    return false;
  }

  return true;

}

