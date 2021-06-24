const botaoNavbar = document.querySelector('.navbar-toggler');
const navegacao = document.querySelector('.navegacao');

var clicked = false;

function botaoToggle(elemento) {

    if(clicked) {
        elemento.style.height='10rem';
        elemento.style.transition='2s';
        clicked = false;
        console.log(clicked);
    } else {
        elemento.style.height='100vh';
        elemento.style.transition='0.2s';

        clicked = true;
        console.log(clicked);
    }

}

botaoNavbar.addEventListener('click', (e)=> {
    e.preventDefault();
  
    botaoToggle(navegacao)
});