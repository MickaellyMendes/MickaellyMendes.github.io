//  Tittle Modificado Começo
let docTitle = document.title;
window.addEventListener("blur", () =>{
document.title = "Volte Aqui ಥ_ಥ";
})
window.addEventListener("focus", () =>{
document.title = docTitle;
})
//  Tittle Modificado Fim

const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});
