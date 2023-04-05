const form = document.querySelector('#form');
const header = document.querySelector('header')

document.addEventListener('scroll', () => {
  document.documentElement.scrollTop > 0 ? 
  header.classList.add("scroll") : 
  header.classList.remove("scroll");
})

console.log(header)

form.addEventListener('submit', (e) => {
  e.preventDefault()
})