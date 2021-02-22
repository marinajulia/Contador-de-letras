var capturando = "";


function capturar(campo_passado) {
    capturando = document.getElementById('valor').value;
    document.getElementById('valorDigitado').innerHTML = capturando;
    var campo = campo_passado.value.lenght;
    console.log(campo);
}