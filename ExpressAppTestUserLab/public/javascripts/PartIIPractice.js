function ValorLetraDNI() {
    if (document.getElementById("flgCancelar").value == "false")
        return 0;
    debugger;
    var valuedni = document.getElementById("dni").value;
    var resto23;
    if (isNaN(valuedni)) {
        alert("No es un numero");
        return 0;
    }
    if (valuedni <0) {
        alert("Ingrese un numero mayor a cero");
        return 0;
    }
    if (valuedni > 99999999) {
        alert("Ingrese un numero menor a 99999999");
        return 0;
    }

    resto23 = valuedni % 23;

    document.getElementById("dni").value = "";
    alert(resto23);

    ValorConvertido(resto23);
}

function ValorConvertido(n) {
    var letraRetorno;
    switch (n) {
        case 0:
            letraRetorno = "T"
            break;

        case 1:
            letraRetorno = "R"
            break;

        case 2:
            letraRetorno = "W"
            break;

        case 3:
            letraRetorno = "A"
            break;

        case 4:
            letraRetorno = "G"
            break;

        case 5:
            letraRetorno = "M"
            break;

        case 6:
            letraRetorno = "Y"
            break;

        case 7:
            letraRetorno = "F"
            break;

        case 8:
            letraRetorno = "P"
            break;

        case 9:
            letraRetorno = "D"
            break;

        case 10:
            letraRetorno = "X"
            break;

        case 11:
            letraRetorno = "B"
            break;

        case 12:
            letraRetorno = "N"
            break;

        case 13:
            letraRetorno = "J"
            break;

        case 14:
            letraRetorno = "Z"
            break;

        case 15:
            letraRetorno = "S"
            break;

        case 16:
            letraRetorno = "Q"
            break;

        case 17:
            letraRetorno = "V"
            break;

        case 18:
            letraRetorno = "H"
            break;

        case 19:
            letraRetorno = "L"
            break;

        case 20:
            letraRetorno = "C"
            break;

        case 21:
            letraRetorno = "K"
            break;

        case 22:
            letraRetorno = "E"
            break;
    }

    document.getElementById("dniCalculado").value = document.getElementById("dniCalculado").value + letraRetorno;

}

function Cancelar() {
    document.getElementById("flgCancelar").value = "false";
}

function Click() {
    var min = document.getElementById("min").value;
    var max = document.getElementById("max").value;
    numeroAleatorioRango(min, max);
}

function numeroAleatorioRango(min, max) {
    debugger;
    var numero = Math.round(Math.random() * (max - min) + parseInt(min));
    alert(numero);
}