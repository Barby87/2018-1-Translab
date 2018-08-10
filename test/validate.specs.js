const assert = require('chai').assert;
global.window = global;
require('../src/js/validate');

describe('validar emails', ()=>{
  describe('Debería verificar si existe el arroba', ()=>{
    it('Debería el correo tener sólo un arroba', ()=>{
            assert.equal(validateEmail("asdf@asdf.com"), true); //assert.equal verifica que el parámetro 1 sea igual al parámetro 2
            assert.equal(validateEmail("asdf@@asdf.com"), false);
            assert.equal(validateEmail("asdf.com"), false);
        });
        it('Debería el correo tener un arroba antes del dominio', ()=>{
            assert.equal(validateEmail(".com@asdf"), false);
            assert.equal(validateEmail("fabian@laboratoria.la"), true);
        });
    });(
    describe('Debería verificar si tiene un dominio', ()=>{
        it('Tiene un punto y luego solo caracteres del alfabeto', ()=>{
            assert.equal(validateEmail('asdf@asdf'), false);
            assert.equal(validateEmail('asdf@asdf.'), false);
            assert.equal(validateEmail('asdf@asdf.com'), true);
        });
    }));
    describe('Debería verificar que no tenga carácteres raros antes del arroba', ()=>{
        assert.equal(validateEmail('abvsh!@'), false);
        assert.equal(validateEmail('abvsh@'), true);

    });(
    describe('Debería verificar que tenga al menos 3 caracteres antes del arroba', ()=>{
        assert.equal(validateEmail('@gmail.com'), false);
        assert.equal(validateEmail('gen@gmail.com'), true);

    }));
});

describe('validar password', () =>{
  describe('Debería verificar el largo de la contraseña', ()=>{
    it('Debería verificar que la contraseña como mínimo 4 caracteres', ()=>{
      assert.equal(validatePassword('123'), false);
      assert.equal(validatePassword('1234'), true);

  });

    it('Debería verificar que la contraseña tenga un máximo de 8 caracteres', ()=>{
      assert.equal(validatePassword('123456789'), false);
      assert.equal(validatePassword('12345678'), true);

  });

    it('Debería verificar que la contraseña contenga sólo números', () =>{
      assert.equal(validatePassword('abcdefgh'), false);
      assert.equal(validatePassword('12345678'), true);

  });

  })

  /*describle('Debería validar que ingrese dos veces la misma contraseña', () =>{
      assert.equal(validatePassword(password.value === confirmPassword.value), true);
      assert.equal(validatePassword(password.value != confirmPassword.value), true);
        
  })*/

})


