let base = document.getElementById('base')
let altura = document.getElementById('altura')
const resultado = document.querySelector('#resultado')
const submit = document.querySelector('#submit')
const limpar = document.querySelector('#limpar')
let area = ''




submit.addEventListener('click', (e) => {
  e.preventDefault()

  area = base.value * altura.value

  let numeroFormatado = area.toLocaleString('pt-br', {minimumFractionDigits: 2});

  if(!base.value || !altura.value){
    console.log('vazio')
    resultado.innerHTML = 'ERRO: Verifique os campos'
  } else {
    resultado.innerHTML = numeroFormatado + '/m²'
    
  }
})



limpar.addEventListener('click', () => {
  resultado.innerHTML = ''
  base.value = ''
  altura.value = ''
})