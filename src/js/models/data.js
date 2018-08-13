// Aquí va la parte de modelo (base de datos) (fetch de la api)

// Función para ver saldo
function balance() {
  const cardNumber = document.getElementById('cardNumber').value;
  const selectCard1 = document.getElementById('selectCard1').value;
  const totalBalance = document.getElementById('totalBalance').value;

    fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${cardNumber}`)
      .then(response => response.json())
      .then(data => { 
        console.log(data);
        renderInfo(data); 
      })
    };
    const renderInfo= (data)=>{
      totalBalance.innerHTML =data.saldoTarjeta;
    }