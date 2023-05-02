const form = document.querySelector("form");
let inputContato = document.querySelector("#inputContato");
let inputNumero = document.querySelector("#inputNumero");
const tbody = document.querySelector("tbody")
const contatos = []
const numeros = []
let contatosCadastrados = 0
let linhas = "";


form.addEventListener("submit", function (e) {
  e.preventDefault();

  let contato = inputContato.value;
  let numero = inputNumero.value;
  let linha = "<tr>";
      linha += `<td>${contato}</td>`;
      linha += `<td>${numero}</td>`;
      linha += "</tr>";
  linhas += linha

  contatos.push(contato)
  numeros.push(Number(numero))

  tbody.innerHTML = linhas;

  contatosCadastrados++
  
  inputContato.value = ""
  inputNumero.value = ""


  resultadoFinal.innerHTML = contatosCadastrados
});

inputNumero.addEventListener("keyup", function (e) {

  const regex = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/;

  let str = e.target.value.replace(/[^0-9]/g, "").slice(0, 11);
  const result = str.replace(regex, "($1)$2-$3");
  console.log(result)

  inputNumero.value = result;
})
