$(document).ready(function() {
  $('#carrosselContainer').slick({
    autoplay: true
  })

  $('.menu-hamburguer').click(function() {
    $('nav').slideToggle()
  })

  $('#telefone').mask('(00) 00000-0000', {
    placeholder: '(00) 00000-0000'
  })
  $('#nascimento').mask('00/00/0000', {
    placeholder: '__/__/____'
  })
  $('#cpf').mask('000.000.000-00', {
    placeholder: '000.000.000-00'
  })
  $('#cep').mask('00000-000', {
    placeholder: '00000-000'
  })

  $('form').validate({
    rules: {
      nome: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      telefone: {
        required: true
      },
      nascimento: {
        required: true
      },
      cpf: {
        required: true
      },
      endereco: {
        required: true
      },
      cep: {
        required: true
      }
    },
    messages: {
      nome: 'Insira seu nome',
    },
    submitHandler: function(form) {
      console.log(form)
    },
    invalidHandler: function(evento, validador){
      let camposIncorretos = validador.numberOfInvalids();
      console.log(camposIncorretos)

      if(camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`)
      }
    }
  })

  $('.lista-veiculos button').click(function() {
    const destino = $('#contato');

    console.log(destino)
    const nomeVeiculo = ($(this).parent().find('h3').text())

    $('#veiculo-interesse').val(nomeVeiculo)

    $('html').animate({
      scrollTop: destino.offset().top
    }, 1000)
  })
})