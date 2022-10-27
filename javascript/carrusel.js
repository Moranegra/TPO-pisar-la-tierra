function App() {}

window.onload = function (event) {
    var app = new App();
    window.app = app;
};

App.prototype.processingButton = function(event) {
    const boton = event.currentTarget;
    const carruselLista = event.currentTarget.parentNode;
    const slide = event.currentTarget.parentNode.querySelector('#slide');
    const foto = slide.querySelectorAll('.foto');

    const fotoWidth = foto[0].offsetWidth;
    
    const slideWidth = slide.offsetWidth;
    const carruselListaWidth = carruselLista.offsetWidth;

    slide.style.left == ""  ? leftPosition = slide.style.left = 0 : leftPosition = parseFloat(slide.style.left.slice(0, -2) * -1);

    boton.dataset.button == "button-ant" ? actionAnt(leftPosition,fotoWidth,slide) : actionSig(leftPosition, slideWidth,carruselListaWidth,fotoWidth,slide)
}

let actionAnt = (leftPosition,fotoWidth,slide) => {
    if(leftPosition > 0) {
      //  console.log("entro 2")
        slide.style.left = `${-1 * (leftPosition - fotoWidth)}px`;
    }
}

let actionSig = (leftPosition,slideWidth,carruselListaWidth,fotoWidth,slide) => {
    if(leftPosition < (slideWidth - carruselListaWidth)) {
        slide.style.left = `${-1 * (leftPosition + fotoWidth)}px`;
    }
}