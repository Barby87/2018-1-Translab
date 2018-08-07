window.validateEmail = function(email){
  if(email.indexOf('@') < 0) {
    return false;
  }

  const tokens = email.split('@');
  if(tokens.length != 2){ //Verifica que el correo SÓLO tenga 2 partes, lo que está antes del arroba y después del arroba 
      return false; //Si es distinto de 2, será false
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
  }1
  if(domTokens[1].length < 1){
      return false
  }    

  return true;
};

window.validatePassword = function(password){
    if(password.length < 0 && password.length > 8) {
      return false;
}else{
    return true;
}