const form = document.querySelector('form');
const inputNome = document.querySelector('#inputNome');
const inputTelefone = document.querySelector('#inputTelefone');
const inputEmail = document.querySelector('#inputEmail');
const submit = document.querySelector('#submit');

submit.addEventListener('click', (e) => {
  e.preventDefault()

  let nome = inputNome.value;
  let telefone = inputTelefone.value;
  let email = inputEmail.value;

  console.log(nome, telefone, email)

  inputNome.value = '';
  inputTelefone.value = '';
  inputEmail.value = '';

});

inputTelefone.addEventListener("keyup", function (e) {

  const regex = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/;

  let str = e.target.value.replace(/[^0-9]/g, "").slice(0, 11);
  const result = str.replace(regex, "($1)$2-$3");
  console.log(result)

  inputTelefone.value = result;
})