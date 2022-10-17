var IdH=`<input type="checkbox" id="btn-menu">
<label for="btn-menu" class="btn-menu"><i class="fa-sharp fa-solid fa-bars"></i></label>
<nav class="menu">
    <h1 class="logo"><a href="index.html"><span class="thinner">Pisar <i class="fa-sharp fa-solid fa-circle"></i><br> </span>La Tierra</a></h1>



        <ul class="menu-item">
            <li><a href="index.html" id="Index">Inicio</a></li>
            <li><a href="destinos.html" id="Destinos">Destinos</a></li>
            <li><a href="regiones.html" id="Regiones">Regiones</a></li>
            <li><a href="info-importante.html" id="Info">Info Importante</a></li>
            <li><a href="contacto.html" id="Contact">Contacto</a></li>
        </ul>

    
</nav>`

document.getElementById("IdH").innerHTML=IdH;

var Url = window.location.pathname;
var Destinos = document.getElementById("Destinos");
var Index = document.getElementById("Index");
var Regiones = document.getElementById("Regiones");
var Info = document.getElementById("Info");
var Contact = document.getElementById("Contact");

if (Url == '/destinos.html' || Url == '/contacto-whatsapp-paquete.html') {

   Destinos.style.textDecoration = 'underline'; 
}

else if (Url == '/norte.html' || Url == '/buenos-aires.html'|| Url == '/litoral.html'|| Url == '/regiones.html'|| Url == '/patagonia.html'|| Url == '/cordoba.html'|| Url == '/cuyo.html') {
    Regiones.style.textDecoration = 'underline'; 
}

else if (Url == '/info-importante.html') {
    Info.style.textDecoration = 'underline'; 
}

else if (Url == '/contacto.html') {
    Contact.style.textDecoration = 'underline'; 
}

else if (Url == '/index.html') {
    Index.style.textDecoration = 'underline'; 
}
else {
    Menu.style.textDecoration = 'none';
}





