$(document).ready(function(){
    $('.carousel').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev">Anterior</button>',
      nextArrow: '<button type="button" class="slick-next">Próximo</button>',
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });

  //botão de comprar dos produtos
  $('.featured-item a').addClass('btn')
  $('.featured-item a').addClass('btn-success')

$('.featured-item:nth(1)')
  .hide(500, function(){
    //esse é o callback
    console.log( $(this).find('h4').text() + 'esgotado')
    $(this).text('produto esgotado').addClass('esgotado')

  })
   .show(500, function(){
   console.log( $(this).find('h4').text() + 'em estoque')
   })

   /*
    * Ouvinte de menu .nav-modal-open
    */
   $('.nav-modal-open').on('click', function(e){

    e.preventDefault();

    let elem = $(this).attr('rel')
    
    $('.modal-body').html($('#' + elem).html())

   
   })

   //Validação de formulário
   $(document).ready(function() {

    // Função para validar o CEP
    function validarCep(cep) {
      // Expressão regular para validar o formato do CEP
      var regexCep = /^\d{5}-\d{3}$/;
      return regexCep.test(cep);
    }
  
    // Função para validar o número
    function validarNumero(numero) {
      // Expressão regular para validar somente números inteiros positivos
      var regexNumero = /^[1-9]\d*$/;
      return regexNumero.test(numero);
    }
  
    // Função para validar o endereço
    function validarEndereco(endereco) {
      // Expressão regular para validar somente letras, números e espaços em branco
      var regexEndereco = /^[a-zA-Z0-9\s]*$/;
      return regexEndereco.test(endereco);
    }
  
    // Função para validar o formulário
    function validarFormulario() {
      // Pega os valores dos campos do formulário
      var cep = $("#cep").val();
      var numero = $("#numero").val();
      var endereco = $("#endereco").val();
  
      // Variável para indicar se há algum erro de validação
      var hasErrors = false;
  
      // Valida o CEP
      if (!validarCep(cep)) {
        $("#cep").addClass("is-invalid");
        hasErrors = true;
      } else {
        $("#cep").removeClass("is-invalid");
      }
  
      // Valida o número
      if (!validarNumero(numero)) {
        $("#numero").addClass("is-invalid");
        hasErrors = true;
      } else {
        $("#numero").removeClass("is-invalid");
      }
  
      // Valida o endereço
      if (!validarEndereco(endereco)) {
        $("#endereco").addClass("is-invalid");
        hasErrors = true;
      } else {
        $("#endereco").removeClass("is-invalid");
      }
  
      // Retorna true se não houver erros, e false caso contrário
      return !hasErrors;
    }
  
    // Quando o formulário for submetido
    $("#myForm").submit(function(event) {
      // Previne o comportamento padrão de submissão do formulário
      event.preventDefault();
  
      // Valida o formulário
      if (validarFormulario()) {
        // Se tudo estiver válido, envia o formulário
        this.submit();
      }
    });
  
  });