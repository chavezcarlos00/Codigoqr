const contenedorQr = document.getElementById("contenedorQR");
const formulario = document.getElementById('Formulario');

const QR = new QRcode(contenedorQr);

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    QR.makeCode(formulario.link.value);
});