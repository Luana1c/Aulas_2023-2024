let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 09 Manipular CSS'
//titulo.innerHTML = 'Aula Manipular CSS'
let imagem = document.querySelector('#foto')
imagem.setAttribute('src', 'img/colorido.avif')
imagem.setAttribute('width', '280px')

/* MANIPULAR CSS */
document.querySelector('h1').style.color = "pink";
titulo.style.color = "pink";
titulo.style.backgroundColor = "#faebd7";
titulo.style.borderBottom = "2px solid pink";
titulo.style.padding = "0.625rem";
titulo.style.borderRadius = "5px";

let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'escura')
box[0].removeAttribute('class')

/////// MODOS DE COR ///////
let tela = document.querySelector('main')

let btnDark = document.querySelector('#btdark')

let btnLight = document.querySelector('#btlight')

let btnpink = document.querySelector('#btpink')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)
btnpink.addEventListener('click', modopink)


function modoDark() {
    event.preventDefault();
    console.log('modo dark')
    tela.classList.add("dark");
    tela.classList.remove("light");
    tela.classList.remove("pink");}

function modoLight() {
    event.preventDefault();
    console.log('modo light')
    tela.classList.remove("dark");
    tela.classList.remove("pink");}

function modopink() {
    event.preventDefault();
    console.log('modo pink')
    tela.classList.remove("dark");
    tela.classList.remove("light");
}

/*
titulo.addEventListener('click', mudarId)
function mudarId() {
    titulo.id = 'titulo'
    console.log(titulo.id)
}
*/