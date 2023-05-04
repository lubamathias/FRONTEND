function validateForm() {
    var endereco = document.getElementById('endereco').value;
  
    if (endereco == "") {
      document.getElementById('enderecoError').innerHTML = 'Por favor, preencha o endereço';
      return false;
    } else {
      document.getElementById('enderecoError').innerHTML = '';
      return true;
    }
  }