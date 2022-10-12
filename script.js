document.getElementById("favicon").innerHTML = `
<link rel="icon" href="favicon1.ico" type="image/x-icon"> `

document.getElementById("idheader").innerHTML = `
<input type="checkbox" id="btn-menu">
<label for="btn-menu" class="btn-menu"><i class="fa-sharp fa-solid fa-bars"></i></label>

<nav class="menu">
    <h1 class="logo"><a href="index.html"><span class="thinner">Pisar <i class="fa-sharp fa-solid fa-circle"></i><br> </span>La Tierra</a></h1>
           <ul class="menu-item">
            <li><a href="index.html" class="current">Inicio</a></li>
            <li><a href="destinos.html">Destinos </a></li>
            <li><a href="regiones.html">Regiones</a></li>
            <li><a href="info-importante.html">Info Importante</a></li>

            <li><a href="contacto.html">Contacto</a></li>
        </ul>
</nav>

<section id="banner">
    <article class="contenedor">
        <h6 class="muestra-2">Argentina | 2022</h6>
        <h1 class="muestra-1"><span class="thinner">Pisar </span>La Tierra</h1>
        <a href="#regiones" class="btn btn-dark">Conocer Más</a>
    </article>
</section>`

document.getElementById("idfooter").innerHTML = `
        <p>Pisar La Tierra &copy copyright 2022</p>
        <a href="#" class="facebook"><i id="icon-redes" class="fa-brands fa-square-facebook"></i> Facebook</a>
        <a href="#" class="instagram"><i id="icon-redes" class="fa-brands fa-square-instagram"></i> Instagram</a>
        <a href="https://web.whatsapp.com/" class="whatsapp"><i id="icon-redes" class="fa-brands fa-whatsapp"></i>
            Whatsapp</a>`
