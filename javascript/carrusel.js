document.addEventListener('DOMContentLoaded', function () {
    let imagenes = [
        { img: 'media/azul2.jpg' },
        { img: 'media/bariloche-nieve.jpeg' },
        { img: 'media/ombu.jpg' },
        { img: 'media/neuquen.webp' },
        { img: 'media/atardecer-palmar.jpg' },
        { img: 'media/Punta-Piramides-1.jpg' },
        { img: 'media/sanluis-la-florida.jpg' },
        { img: 'media/ojos-del-campo.jpg' },
        { img: 'media/salar.jpg' },
        { img: 'media/carlos-paz.jpeg' },
        { img: 'media/villa-traful.jpg' },
        { img: 'media/laguna-de-navarro.jpg' },
        { img: 'media/valle-de-la-luna.jpg' },
        { img: 'media/zarate3.jpg' },
        { img: 'media/cerro-alcazar.jpg' },
        { img: 'media/cañon-atuel.jpg' },
        { img: 'media/planetario1.jpg' },
        { img: 'media/impenetrable.webp' },
        { img: 'media/wanda.jpg' },
        { img: 'media/corrientes2.jpg' }

    ]
    let contador = 0
    const contenedor = document.querySelector('.slideshow');
    const overlay = document.querySelector('.overlay');
    const galeriaImagenes = document.querySelectorAll('.galeria img');
    const imgSlideshow = document.querySelector('.slideshow img');


    contenedor.addEventListener('click', function (event) {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = event.target
        if (tgt == atras) {
            if (contador > 0) {
                img.src = imagenes[contador - 1].img
                contador--
            } else {
                img.src = imagenes[imagenes.length - 1].img
                contador = imagenes.length - 1
            }
        } else if (tgt == adelante) {
            if (contador < imagenes.length - 1) {
                img.src = imagenes[contador + 1].img
                contador++
            } else {
                img.src = imagenes[0].img
                contador = 0
            }
        }

    })
    Array.from(galeriaImagenes).forEach(img => {
        img.addEventListener('click', event => {
            const imagenSeleccionada = +(event.target.dataset.imgMostrar)
            imgSlideshow.src = imagenes[imagenSeleccionada].img
            contador = imagenSeleccionada
            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
        })
    })

    var span = document.getElementsByClassName("boton-cerrar")[0];
    span.onclick = function () {
        overlay.style.visibility = "hidden";
    }
})


