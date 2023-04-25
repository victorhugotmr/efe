const form = document.querySelector("form");
let inputMateria = document.querySelector("#inputMateria");
let inputNota = document.querySelector("#inputNota");
const tbody = document.querySelector("tbody")
const materias = []
const notas = []
const mediaFinal = document.querySelector("#mediaFinal")
const resultadoFinal = document.querySelector("#resultadoFinal")
let linhas = "";


form.addEventListener("submit", function (e) {
  e.preventDefault();

  let materia = inputMateria.value;
  let nota = inputNota.value;
  let linha = "<tr>";
      linha += `<td>${materia}</td>`;
      linha += `<td>${nota}</td>`;
      linha += `<td>${nota >= 7 ? `<i class="fa-solid fa-check" style="color: var(--green)"></i>` : `<i class="fa-solid fa-xmark" style="color: var(--red)"></i>`}</td>`;
      linha += "</tr>";
  linhas += linha

  materias.push(materia)
  notas.push(Number(nota))

  tbody.innerHTML = linhas;
  
  inputMateria.value = ""
  inputNota.value = ""

  let notasTotal = 0;

  for (let i = 0; i < notas.length; i++) {
    notasTotal += notas[i]
  }

  const media = notasTotal / notas.length

  console.log(media)

  mediaFinal.innerHTML = media
  resultadoFinal.innerHTML = media >= 7 ? `<p style="color: var(--green)">Aprovado</p>` : `<p style="color: var(--red)">Reprovado</p>`
});
