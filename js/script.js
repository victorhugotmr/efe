const form = document.querySelector('#form');
const header = document.querySelector('header')
const nome = document.querySelector('#nome')
const telefone = document.querySelector('#telefone')
const email = document.querySelector('#email')
const mensagem = document.querySelector('#mensagem')

document.addEventListener('scroll', () => {
  document.documentElement.scrollTop > 0 ? 
  header.classList.add("scroll") : 
  header.classList.remove("scroll");
})



form.addEventListener('submit', (e) => {
  e.preventDefault()

  console.log(`nome: ${nome.value} | telefone: ${telefone.value} | email: ${email.value} | mensagem: ${mensagem.value}`)

  nome.value = ""
  telefone.value = ""
  email.value = ""
  mensagem.value = ""

})