const botaoNavbar = document.querySelector('.navbar-toggler');
var clicked = false;

botaoNavbar.addEventListener('click', function(e) {
    e.preventDefault();

    if(clicked) {
        let navegacao = document.querySelector('.navegacao');
        navegacao.style.height='10rem';
        navegacao.style.transition='2s';
        clicked = false;
        console.log(clicked);
    } else {
        let navegacao = document.querySelector('.navegacao');
        navegacao.style.height='100vh';
        navegacao.style.transition='0.2s';

        clicked = true;
        console.log(clicked);
    }

});