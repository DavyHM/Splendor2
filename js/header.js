function moverPreNav(){
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    var divAmover = document.getElementById('preNav');
    var contDestino = document.getElementById('navbarNav');

    if (windowWidth<=992) {
        contDestino.insertBefore(divAmover,contDestino.firstChild);
    }else{
        document.getElementById('preNavCont').appendChild(divAmover);
    }
    
}

window.addEventListener('resize',moverPreNav)
window.addEventListener('load',moverPreNav)
