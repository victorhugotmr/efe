const maiorNumero = document.querySelector('#maiorNumero')
const menorNumero = document.querySelector('#menorNumero')
const resultado = document.querySelector('#resultado')
const reset = document.querySelector('#resetar')
const form = document.querySelector('#form')


form.addEventListener('submit', (e) => {
  e.preventDefault()
   
  let maior = Number(maiorNumero.value)
  let menor = Number(menorNumero.value)


  if(menor > maior) {

    resultado.innerHTML = `❌ ${maior} deve ser maior que ${menor} `

  }

  else if (menor == maior) {
    resultado.innerHTML = `❌ ${maior} é igual a ${menor}`

  }
  
  else {
    resultado.innerHTML = `✔️ ${maior} é maior que ${menor}`

  }

})

reset.addEventListener('click', () => {
  maiorNumero.value = '2'
  menorNumero.value = '1'
  resultado.innerHTML = ''
})
